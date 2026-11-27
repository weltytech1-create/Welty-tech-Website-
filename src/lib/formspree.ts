import { sanitizeSingleLineInput } from "@/lib/security";

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqpqjdwl";
const REQUEST_TIMEOUT_MS = 15_000;

export type FormspreeResult =
  | { ok: true }
  | { ok: false; error: string };

interface FormspreeErrorResponse {
  error?: string;
  errors?: Array<{ field?: string; message?: string; code?: string }>;
}

/**
 * Submits a FormData payload to Formspree with timeout, omitted credentials,
 * and sanitized error messages for inline display without page redirects.
 */
export async function submitToFormspree(
  formData: FormData
): Promise<FormspreeResult> {
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT_MS
  );

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      credentials: "omit",
      referrerPolicy: "strict-origin-when-cross-origin",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return { ok: true };
    }

    if (response.status === 429) {
      return {
        ok: false,
        error: "Too many requests right now. Please wait a moment and try again.",
      };
    }

    let message = "Unable to send your request right now. Please try again.";
    try {
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const payload = (await response.json()) as FormspreeErrorResponse;
        if (Array.isArray(payload.errors) && payload.errors.length > 0) {
          const joined = payload.errors
            .map((item) =>
              typeof item.message === "string"
                ? sanitizeSingleLineInput(item.message, 120)
                : ""
            )
            .filter(Boolean)
            .join(" ");
          if (joined) message = sanitizeSingleLineInput(joined, 220);
        } else if (typeof payload.error === "string" && payload.error.trim()) {
          message = sanitizeSingleLineInput(payload.error, 220);
        }
      }
    } catch {
      // Fallback to default message if response body is not JSON.
    }

    return { ok: false, error: message };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return {
        ok: false,
        error:
          "Request timed out while sending. Please try again or email info@welty.in.",
      };
    }
    return {
      ok: false,
      error:
        "Network error while sending. Please check your connection or email info@welty.in.",
    };
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
}
