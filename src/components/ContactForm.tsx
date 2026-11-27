"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_CONFIG } from "@/data/welty";
import { FORMSPREE_ENDPOINT, submitToFormspree } from "@/lib/formspree";

export function ContactForm() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Digital Product Design",
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [selectedBudget, setSelectedBudget] = useState<string>(
    CONTACT_CONFIG.budgets[1]
  );
  const [attachmentLink, setAttachmentLink] = useState<string>("");
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const nameValid = name.trim().length > 0;
  const formValid = nameValid && emailValid;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    setSubmitError("");
    if (!formValid || submitting) return;

    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    formData.append("_replyto", email.trim());
    formData.append(
      "interests",
      selectedInterests.join(", ") || "General Inquiry"
    );
    formData.append("budget", `${selectedBudget} INR`);
    if (details.trim()) {
      formData.append("message", details.trim());
    }
    if (attachmentLink.trim()) {
      formData.append("attachment_link", attachmentLink.trim());
    }
    formData.append("source", "Contacts Page");
    formData.append(
      "_subject",
      `New Project Inquiry from ${name.trim()} — Welty Tech`
    );
    if (honeypot) {
      formData.append("_gotcha", honeypot);
    }

    const result = await submitToFormspree(formData);
    setSubmitting(false);

    if (result.ok) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error);
    }
  };

  return (
    <div className="max-w-[92rem]">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.4rem] bg-[#FFF4EC] border border-[#FA823C]/25 p-[4rem] md:p-[6rem]"
          >
            <div className="w-[5.2rem] h-[5.2rem] rounded-full bg-[#E5FA3C] text-black flex items-center justify-center text-[2.4rem] mb-[2.4rem]">
              ✓
            </div>
            <h2 className="text-[3.4rem] md:text-[5rem] font-medium leading-[1.1] tracking-[-0.02em] text-black">
              Request received!
            </h2>
            <p className="mt-[1.8rem] text-[2rem] md:text-[2.4rem] leading-[1.4] text-black/80 max-w-[60rem]">
              Thanks, <span className="font-medium text-black">{name}</span>. Our
              team at Welty Tech will review your brief ({selectedInterests.join(", ") || "Project Inquiry"} ·{" "}
              {selectedBudget} INR) and reply to{" "}
              <span className="underline">{email}</span> within one business day.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setDetails("");
                setAttachmentLink("");
                setSubmitError("");
                setTouched({});
              }}
              className="cb-cta cb-cta-md cb-cta-fill mt-[3.6rem]"
            >
              <span className="cb-cta-label">
                <span data-text="Send another request">Send another request</span>
              </span>
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 1 }}
            className="grid gap-[5rem] md:gap-[6.5rem]"
          >
            {/* Formspree honeypot */}
            <input
              type="text"
              name="_gotcha"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Interests */}
            <div>
              <div className="text-[2rem] md:text-[2.4rem] font-normal text-black/60 mb-[2.4rem]">
                I&apos;m interested in...
              </div>
              <div className="flex flex-wrap gap-[1.2rem]">
                {CONTACT_CONFIG.interests.map((interest) => {
                  const active = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      aria-pressed={active}
                      className={`rounded-full px-[2.4rem] py-[1.4rem] text-[1.8rem] md:text-[2rem] leading-[1] transition-all duration-300 border ${
                        active
                          ? "bg-black text-[#E5FA3C] border-black"
                          : "bg-white text-black border-black/15 hover:border-[#FA823C]"
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Text Inputs */}
            <div className="grid gap-[4rem]">
              <div>
                <label className="sr-only" htmlFor="contact-name">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name *"
                  value={name}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-black/20 focus:border-[#FA823C] focus:outline-none py-[1.6rem] text-[2.2rem] md:text-[2.8rem] text-black placeholder:text-black/40 transition-colors"
                />
                {touched.name && !nameValid && (
                  <p className="mt-[0.8rem] text-[1.5rem] text-[#FA823C]">
                    Please enter your name
                  </p>
                )}
              </div>

              <div>
                <label className="sr-only" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email *"
                  value={email}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-black/20 focus:border-[#FA823C] focus:outline-none py-[1.6rem] text-[2.2rem] md:text-[2.8rem] text-black placeholder:text-black/40 transition-colors"
                />
                {touched.email && !emailValid && (
                  <p className="mt-[0.8rem] text-[1.5rem] text-[#FA823C]">
                    Please enter your email address
                  </p>
                )}
              </div>

              <div>
                <label className="sr-only" htmlFor="contact-details">
                  Tell us about your project
                </label>
                <textarea
                  id="contact-details"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your project"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full resize-none bg-transparent border-0 border-b border-black/20 focus:border-[#FA823C] focus:outline-none py-[1.6rem] text-[2.2rem] md:text-[2.8rem] text-black placeholder:text-black/40 transition-colors"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <div className="text-[2rem] md:text-[2.4rem] font-normal text-black/60 mb-[2.4rem]">
                Project budget (INR)
              </div>
              <div className="flex flex-wrap gap-[1.2rem]">
                {CONTACT_CONFIG.budgets.map((budget) => {
                  const active = selectedBudget === budget;
                  return (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      aria-pressed={active}
                      className={`rounded-full px-[2.4rem] py-[1.4rem] text-[1.8rem] md:text-[2rem] leading-[1] transition-all duration-300 border ${
                        active
                          ? "bg-[#E5FA3C] text-black border-[#E5FA3C] font-medium"
                          : "bg-white text-black border-black/15 hover:border-[#FA823C]"
                      }`}
                    >
                      {budget}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drive / Document Link Attachment */}
            <div className="grid gap-[1rem]">
              <label
                htmlFor="contact-attachment-link"
                className="inline-flex items-center gap-[1rem] text-[2rem] text-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="w-[2.2rem] h-[2.2rem] text-[#FA823C] shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                  />
                </svg>
                <span>Project brief or Drive link (optional)</span>
              </label>

              <div className="relative flex items-center">
                <input
                  id="contact-attachment-link"
                  name="attachment_link"
                  type="text"
                  inputMode="url"
                  placeholder="Paste Google Drive, Figma, Notion, or Dropbox link"
                  value={attachmentLink}
                  onChange={(e) => setAttachmentLink(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-black/20 focus:border-[#FA823C] focus:outline-none py-[1.4rem] pr-[3.6rem] text-[1.9rem] md:text-[2.2rem] text-black placeholder:text-black/40 transition-colors"
                />
                {attachmentLink && (
                  <button
                    type="button"
                    onClick={() => setAttachmentLink("")}
                    aria-label="Clear link"
                    className="absolute right-0 text-[1.6rem] text-black/50 hover:text-black bg-transparent border-0 p-[0.6rem] cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              <p className="text-[1.4rem] leading-[1.4] text-black/45">
                Share a view-only Google Drive, Figma, Notion, or Dropbox link so our team can review your files immediately.
              </p>
            </div>

            {/* Submit */}
            <div className="grid gap-[2rem] justify-items-start">
              {submitError && (
                <p role="alert" className="text-[1.6rem] text-[#FA823C] font-medium">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className={`cb-cta cb-cta-lg ${
                  formValid
                    ? "cb-cta-fill"
                    : "bg-black/20 text-white/80 hover:bg-black/30"
                } ${submitting ? "opacity-70 cursor-wait" : ""}`}
              >
                <span className="cb-cta-label">
                  <span data-text={submitting ? "Sending..." : "Send request"}>
                    {submitting ? "Sending..." : "Send request"}
                  </span>
                </span>
              </button>

              <p className="text-[1.4rem] leading-[1.4] text-black/45">
                This site is protected by reCAPTCHA and the Google Privacy Policy
                and Terms of Service apply.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
