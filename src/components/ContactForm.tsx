"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";

interface FormField {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
}

interface ContactFormProps {
  form: {
    method: "POST";
    action: string;
    successMessage?: string;
    fields: FormField[];
    submit: { label: string; variant?: "primary" };
    helperText?: string;
  };
}

export default function ContactForm({ form }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Check if using FormSubmit (form-to-email service)
  const isFormSubmit = form.action.startsWith("https://formsubmit.co");

  // Check for success parameter in URL (FormSubmit redirects back)
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true' && submitStatus !== 'success') {
      setSubmitStatus('success');
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (isFormSubmit) {
      // Use FormSubmit's AJAX endpoint to avoid page redirect
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Add subject based on form type
      const subject = form.action.includes('booking') 
        ? 'New Booking Request - Perfectly Pampered Parties'
        : 'New Contact Form Submission - Perfectly Pampered Parties';
      formData.append('_subject', subject);
      formData.append('_captcha', 'false'); // Disable captcha for better UX
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
        });

        if (response.ok || response.status === 200) {
          setSubmitStatus("success");
          form.reset();
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // Original API route handling
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface rounded-card p-6 md:p-8 shadow-card max-w-2xl mx-auto">
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6"
      >
        {form.fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-text font-body text-sm font-medium mb-2"
            >
              {field.label}
              {field.required && <span className="text-primary ml-1">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={field.rows || 5}
                className="w-full px-4 py-3 rounded-input border border-border bg-background text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="w-full px-4 py-3 rounded-input border border-border bg-background text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select an option</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-input border border-border bg-background text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            )}
          </div>
        ))}

        {form.helperText && (
          <p className="text-mutedText font-body text-xs">{form.helperText}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full px-8 py-3 rounded-button font-body text-base font-medium transition-all",
            form.submit.variant === "primary"
              ? "bg-primary text-white hover:bg-primaryHover shadow-button hover:shadow-lg disabled:opacity-50"
              : "border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50"
          )}
        >
          {isSubmitting ? "Sending..." : form.submit.label}
        </button>

        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-input text-green-800 font-body text-sm">
            {form.successMessage || "Your message has been sent successfully!"}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-input text-red-800 font-body text-sm">
            There was an error submitting your form. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
