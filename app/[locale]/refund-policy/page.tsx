import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "@/i18n/routing";

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    content: [
      `This Refund Policy ("Policy") describes the conditions under which Quassama ("we", "us", or "our") issues refunds for paid subscriptions purchased through the Quassama mobile application or website.`,
      `Quassama uses two distinct billing channels depending on your platform:`,
    ],
    bullets: [
      "iOS users — Subscriptions are purchased and managed through the Apple App Store. Billing and refunds are handled by Apple and subject to Apple's policies.",
      "Android users — Subscriptions are purchased and managed directly through the Quassama website (quassama.app). Billing is handled by Quassama, and we are responsible for processing any refunds.",
    ],
    closingContent: [
      `The sections below apply to both platforms unless otherwise noted. Where the process differs, each platform is addressed separately.`,
    ],
  },
  {
    id: "free-trial",
    title: "2. Free Trial",
    content: [
      `The Personal plan includes a 3-day free trial for first-time subscribers. You will not be charged during the trial period.`,
    ],
    bullets: [
      "iOS users — Cancel at least 24 hours before the trial ends through your Apple ID subscription settings (Settings → Apple ID → Subscriptions).",
      "Android users — Cancel before the trial ends through your account settings on the Quassama website (Account → Manage Subscription → Cancel).",
    ],
    closingContent: [
      `We are unable to issue refunds for charges that result from failing to cancel before the trial period expires, regardless of platform.`,
    ],
  },
  {
    id: "eligibility",
    title: "3. Refund Eligibility",
    content: [
      `You may be eligible for a refund in the following circumstances:`,
    ],
    bullets: [
      "You were charged in error (e.g. duplicate charge or a technical billing fault).",
      "You were charged after cancelling your subscription before the renewal date, due to a platform-side error.",
      "A significant, persistent technical issue prevented you from using the Service for the majority of a billing period, and our support team was unable to resolve it within a reasonable time.",
      "You are a first-time subscriber who inadvertently purchased a plan without intending to (request must be submitted within 48 hours of the charge).",
    ],
    closingContent: [
      `Refund requests are evaluated on a case-by-case basis. Meeting one of the above criteria does not guarantee a refund; we reserve the right to decline requests that appear to be abusive or made in bad faith.`,
    ],
  },
  {
    id: "non-refundable",
    title: "4. Non-Refundable Situations",
    content: [
      `The following situations are generally not eligible for a refund:`,
    ],
    bullets: [
      "You forgot to cancel your subscription before the automatic renewal date.",
      "You no longer use the app or have found an alternative.",
      "You disagree with or are dissatisfied with a feature or a change to the Service.",
      "Partial refunds for unused days within an active billing period.",
      "Requests submitted more than 30 days after the charge date.",
      "Accounts that have been suspended or terminated due to a violation of our Terms & Conditions.",
    ],
  },
  {
    id: "how-to-request",
    title: "5. How to Request a Refund",
    subsections: [
      {
        heading: "5.1 Through Apple App Store",
        content: [
          `Apple handles all billing for iOS purchases. To request a refund:`,
        ],
        bullets: [
          "Visit reportaproblem.apple.com and sign in with your Apple ID.",
          `Find the Quassama charge, tap "Report a Problem", and select the appropriate reason.`,
          "Apple will review your request and respond via email, typically within a few days.",
        ],
      },
      {
        heading: "5.2 Android Users — Through the Quassama Website",
        content: [
          `Android subscriptions are billed directly by Quassama through our website. We handle your refund request ourselves — no third-party platform is involved. To request a refund:`,
        ],
        bullets: [
          "Email us at abdezaadaddi06@gmail.com with the subject line \"Refund Request — Android\".",
          "Include your full name, the email address linked to your Quassama account, the charge date, and the amount.",
          "Briefly explain the reason for your refund request.",
          "We will review your request within 3 business days and confirm the outcome via email.",
          "Approved refunds are returned to the original payment method used on our website within 5–10 business days.",
        ],
        closingContent: [
          `Because we process Android payments directly, we have full control over the refund and can act quickly. We aim to resolve all legitimate requests fairly and promptly.`,
        ],
      },
      {
        heading: "5.3 Additional Support",
        content: [
          `Regardless of platform, if you encounter any billing issue not covered above, or if your refund request through Apple has been unsuccessful, contact us at abdezaadaddi06@gmail.com and include:`,
        ],
        bullets: [
          "Your full name and account email address.",
          "Your platform (iOS or Android).",
          "The charge date and amount.",
          "Any prior correspondence with Apple support (for iOS users).",
        ],
        closingContent: [
          `For iOS users, we will advocate on your behalf with Apple where possible, though the final decision rests with Apple. For Android users, we will resolve the issue directly.`,
        ],
      },
    ],
  },
  {
    id: "processing",
    title: "6. Refund Processing",
    subsections: [
      {
        heading: "iOS — Processed by Apple",
        content: [
          `For iOS subscribers, approved refunds are processed entirely by Apple. Funds are returned to the payment method on file with your Apple ID. Processing times are determined by Apple and typically take 5–10 business days. We have no control over Apple's processing timeline.`,
        ],
      },
      {
        heading: "Android — Processed by Quassama",
        content: [
          `For Android subscribers who purchased through our website, approved refunds are processed directly by Quassama. Funds are returned to the original payment method used at checkout within 5–10 business days of approval. You will receive a confirmation email once the refund has been initiated.`,
          `We cannot issue refunds to a different payment method than the one originally used for the purchase.`,
        ],
      },
    ],
  },
  {
    id: "cancellation",
    title: "7. Cancellation vs. Refund",
    content: [
      `Cancelling your subscription and requesting a refund are two separate actions:`,
    ],
    bullets: [
      "Cancellation stops future billing. You retain access to your paid plan until the end of the current billing period.",
      "A refund returns money for a charge that has already been made. Cancelling does not automatically trigger a refund.",
    ],
    closingContent: [
      `iOS users: cancel through Settings → Apple ID → Subscriptions before the next renewal date. Android users: cancel through Account → Manage Subscription on the Quassama website. Always cancel before renewal regardless of whether you are also requesting a refund.`,
    ],
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    content: [
      `We may update this Refund Policy from time to time. Material changes will be communicated via in-app notification at least 14 days before taking effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Policy.`,
    ],
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      `For any questions about this Refund Policy or to submit a refund request, please reach out to us:`,
    ],
    contact: {
      name: "Quassama — Built by a Student Engineer at UCA Marrakech",
      email: "abdezaadaddi06@gmail.com",
    },
  },
];

export default function RefundPolicy() {
  return (
    <>
      <Header />

      <main>
        {/* Page banner */}
        <section className="bg-[#3A7068] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#F3E5AB] text-sm font-semibold uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Refund Policy
            </h1>
            <p className="text-white/70 text-base">
              Effective date: <strong className="text-white/90">May 5, 2026</strong>
            </p>
          </div>
        </section>

        {/* Quick-jump navigation */}
        <section className="bg-[#2A524D] py-4 sticky top-16 z-40 overflow-x-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex gap-4 text-xs text-white/70 whitespace-nowrap">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="hover:text-[#F3E5AB] transition-colors"
                  >
                    {s.title.replace(/^\d+\.\s/, "")}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-12 grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 space-y-1">
                <p className="font-semibold text-[#2A524D] flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  iOS Users (iPhone / iPad)
                </p>
                <p>Subscriptions are billed through the <strong>Apple App Store</strong>. Refunds are requested directly from Apple at <span className="text-[#3A7068]">reportaproblem.apple.com</span>.</p>
              </div>
              <div className="p-5 bg-[#f0f9f8] border border-[#3A7068]/20 rounded-xl text-sm text-gray-700 space-y-1">
                <p className="font-semibold text-[#2A524D] flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.341c-.297 0-.59-.034-.874-.1L14.5 17.39A6.5 6.5 0 0 1 6 10.5a6.5 6.5 0 0 1 6.5-6.5 6.5 6.5 0 0 1 6.5 6.5 6.47 6.47 0 0 1-.477 2.441zM12.5 5.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/><path d="M6.174 8.813a5.5 5.5 0 0 0 9.652 0H6.174z"/></svg>
                  Android Users
                </p>
                <p>Subscriptions are billed directly <strong>through the Quassama website</strong>. Refunds are handled by us — email <span className="text-[#3A7068]">abdezaadaddi06@gmail.com</span> and we&apos;ll resolve it promptly.</p>
              </div>
            </div>

            <div className="space-y-14">
              {SECTIONS.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="text-[#3A7068] text-2xl font-bold mb-5 pb-3 border-b border-gray-100">
                    {section.title}
                  </h2>

                  {section.content?.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="my-4 space-y-2">
                      {section.bullets.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-[#3A7068] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.closingContent?.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mt-4">
                      {para}
                    </p>
                  ))}

                  {section.subsections?.map((sub, si) => (
                    <div key={si} className="mt-6">
                      <h3 className="text-[#2A524D] text-lg font-semibold mb-3">
                        {sub.heading}
                      </h3>
                      {sub.content?.map((para, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed mb-3">
                          {para}
                        </p>
                      ))}
                      {sub.bullets && (
                        <ul className="my-3 space-y-2">
                          {sub.bullets.map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#3A7068] flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {"closingContent" in sub && sub.closingContent?.map((para: string, i: number) => (
                        <p key={i} className="text-gray-600 leading-relaxed mt-3">
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}

                  {section.contact && (
                    <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-700 space-y-1">
                      <p className="font-medium text-[#2A524D]">{section.contact.name}</p>
                      <p>
                        Email:{" "}
                        <a
                          href={`mailto:${section.contact.email}`}
                          className="text-[#3A7068] underline underline-offset-2 hover:text-[#2A524D]"
                        >
                          {section.contact.email}
                        </a>
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Footer links */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#3A7068] font-semibold hover:text-[#2A524D] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm text-[#3A7068] hover:text-[#2A524D] underline underline-offset-2 transition-colors"
              >
                View Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
