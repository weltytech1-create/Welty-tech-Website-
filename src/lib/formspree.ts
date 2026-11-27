export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqpqjdwl";

export type FormspreeResult =
  | { ok: true }
  | { ok: false; error: string };

interface FormspreeErrorResponse {
  error?: string;
  errors?: Array<{ field?: string; message?: string; code?: string }>;
}

/**
 * Submits a FormData payload to Formspree and normalizes validation
 * and network errors for inline display without page redirects.
 */
export async function submitToFormspree(
  formData: FormData
): Promise<FormspreeResult> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return { ok: true };
    }

    let message = "Unable to send your request right now. Please try again.";
    try {
      const payload = (await response.json()) as FormspreeErrorResponse;
      if (Array.isArray(payload.errors) && payload.errors.length > 0) {
        const joined = payload.errors
          .map((item) => item.message)
          .filter(Boolean)
          .join(" ");
        if (joined) message = joined;
      } else if (payload.error) {
        message = payload.error;
      }
    } catch {
      // Fallback to default message if response body is not JSON.
    }

    return { ok: false, error: message };
  } catch {
    return {
      ok: false,
      error:
        "Network error while sending. Please check your connection or email info@welty.in.",
    };
  }
}
