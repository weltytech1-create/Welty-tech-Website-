"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FORMSPREE_ENDPOINT, submitToFormspree } from "@/lib/formspree";

export function ServiceQuickContact({ heading }: { heading: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [attachmentLink, setAttachmentLink] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nameValid = name.trim().length > 0;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
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
    if (phone.trim()) {
      formData.append("phone", phone.trim());
    }
    if (description.trim()) {
      formData.append("message", description.trim());
    }
    if (attachmentLink.trim()) {
      formData.append("attachment_link", attachmentLink.trim());
    }
    formData.append("source", `Service Quick Contact (${heading})`);
    formData.append(
      "_subject",
      `Quick Service Inquiry (${heading}) from ${name.trim()} — Welty Tech`
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
    <section className="relative my-[8rem] md:my-0 md:pt-[15rem] md:mb-[15rem]">
      <div className="cb-container">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4.5rem] md:text-[8rem] font-medium leading-[1] tracking-[-0.02em] mb-[4rem] md:mb-[10rem] max-w-[92rem]"
        >
          {heading}
        </motion.h2>

        <div className="relative rounded-[2rem] bg-black text-white p-[3rem] md:px-[15rem] md:py-[10rem] overflow-hidden">
          <img
            src="/assets/services/quick-contact-bg.webp"
            alt=""
            width={1400}
            height={800}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-75 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 80% at 85% 20%, rgba(250, 130, 60, 0.2) 0%, rgba(229, 250, 60, 0.06) 45%, rgba(0, 0, 0, 0.75) 100%)",
            }}
          />

          <div className="relative z-[1]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="py-[2rem]"
                >
                  <div className="w-[5rem] h-[5rem] rounded-full bg-[#E5FA3C] text-black flex items-center justify-center text-[2.2rem] mb-[2.4rem]">
                    ✓
                  </div>
                  <h3 className="text-[3.2rem] md:text-[4.8rem] font-normal leading-[1.1] text-white">
                    Thank you, {name}!
                  </h3>
                  <p className="mt-[1.6rem] text-[1.9rem] md:text-[2.2rem] leading-[1.4] text-white/80 max-w-[60rem]">
                    We&apos;ve received your project brief and will get back to{" "}
                    <span className="text-white underline">{email}</span> within
                    one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setDescription("");
                      setAttachmentLink("");
                      setSubmitError("");
                      setTouched({});
                    }}
                    className="cb-cta cb-cta-md cb-cta-accent mt-[3.2rem]"
                  >
                    <span className="cb-cta-label">
                      <span data-text="Send another message">Send another message</span>
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
                  className="grid gap-[3.6rem] md:gap-[6.4rem] max-w-[74rem]"
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[3.6rem] md:gap-[4rem]">
                    <div>
                      <label htmlFor="qc-name" className="sr-only">
                        Name *
                      </label>
                      <input
                        id="qc-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Name *"
                        value={name}
                        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-white/25 focus:border-[#FA823C] focus:outline-none py-[1.3rem] md:py-[2rem] text-[2rem] leading-[1] text-white placeholder:text-white/50 transition-colors"
                      />
                      {touched.name && !nameValid && (
                        <p className="mt-[0.8rem] text-[1.4rem] text-[#FA823C]">
                          Please enter your name
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="qc-email" className="sr-only">
                        Email *
                      </label>
                      <input
                        id="qc-email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email *"
                        value={email}
                        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-white/25 focus:border-[#FA823C] focus:outline-none py-[1.3rem] md:py-[2rem] text-[2rem] leading-[1] text-white placeholder:text-white/50 transition-colors"
                      />
                      {touched.email && !emailValid && (
                        <p className="mt-[0.8rem] text-[1.4rem] text-[#FA823C]">
                          Please enter a valid email
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[3.6rem] md:gap-[4rem]">
                    <div>
                      <label htmlFor="qc-phone" className="sr-only">
                        Phone
                      </label>
                      <input
                        id="qc-phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-white/25 focus:border-[#FA823C] focus:outline-none py-[1.3rem] md:py-[2rem] text-[2rem] leading-[1] text-white placeholder:text-white/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="qc-desc" className="sr-only">
                        Description
                      </label>
                      <input
                        id="qc-desc"
                        name="message"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-white/25 focus:border-[#FA823C] focus:outline-none py-[1.3rem] md:py-[2rem] text-[2rem] leading-[1] text-white placeholder:text-white/50 transition-colors"
                      />
                    </div>
                  </div>

                  {submitError && (
                    <p role="alert" className="text-[1.5rem] text-[#FA823C] font-medium">
                      {submitError}
                    </p>
                  )}

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-[2.8rem] md:gap-[4rem]">
                    <div className="flex-1 min-w-0">
                      <label
                        htmlFor="qc-attachment-link"
                        className="inline-flex items-center gap-[0.9rem] text-[1.6rem] text-white/80 mb-[0.4rem]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          className="w-[1.8rem] h-[1.8rem] text-[#E5FA3C] shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                          />
                        </svg>
                        <span>Drive / Figma / Brief link (optional)</span>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          id="qc-attachment-link"
                          name="attachment_link"
                          type="text"
                          inputMode="url"
                          placeholder="Paste Google Drive, Figma, or Dropbox link"
                          value={attachmentLink}
                          onChange={(e) => setAttachmentLink(e.target.value)}
                          className="w-full bg-transparent border-0 border-b border-white/25 focus:border-[#FA823C] focus:outline-none py-[1.2rem] pr-[3.2rem] text-[1.8rem] leading-[1.2] text-white placeholder:text-white/45 transition-colors"
                        />
                        {attachmentLink && (
                          <button
                            type="button"
                            onClick={() => setAttachmentLink("")}
                            aria-label="Clear link"
                            className="absolute right-0 text-[1.5rem] text-white/60 hover:text-white bg-transparent border-0 p-[0.5rem] cursor-pointer"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className={`cb-cta cb-cta-md w-full md:w-[18rem] shrink-0 ${
                        formValid
                          ? "cb-cta-fill-inverse"
                          : "bg-white text-black opacity-60 hover:opacity-100"
                      } ${submitting ? "opacity-70 cursor-wait" : ""}`}
                    >
                      <span className="cb-cta-label">
                        <span data-text={submitting ? "Sending..." : "Submit"}>
                          {submitting ? "Sending..." : "Submit"}
                        </span>
                      </span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
