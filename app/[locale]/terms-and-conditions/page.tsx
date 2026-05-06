import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "@/i18n/routing";

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      `By downloading, installing, or using the Quassama mobile application or any related services (collectively, the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not access or use the Service.`,
      `These Terms constitute a legally binding agreement between you ("User", "you", or "your") and Quassama ("we", "us", or "our"). We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.`,
    ],
  },
  {
    id: "description",
    title: "2. Description of Service",
    content: [
      `Quassama is an expense tracking application that allows individuals, couples, and groups to record, split, and manage shared and personal financial expenses. The Service includes, but is not limited to:`,
    ],
    bullets: [
      "Manual and voice-based expense entry",
      "AI-powered receipt scanning and data extraction",
      "Group expense management and debt simplification",
      "Saving goals and budget tracking",
      "Multi-language support (English, French, Arabic / Darija)",
      "Cloud synchronization and backup",
    ],
  },
  {
    id: "accounts",
    title: "3. User Accounts & Registration",
    content: [
      `To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.`,
      `You are responsible for safeguarding your account credentials and for all activity that occurs under your account. You must notify us immediately at abdezaadaddi06@gmail.com if you suspect any unauthorized access or security breach.`,
      `You must be at least 13 years of age (or the minimum age of digital consent in your country) to create an account. By creating an account, you represent that you meet this requirement.`,
    ],
  },
  {
    id: "subscriptions",
    title: "4. Subscription Plans & Payments",
    subsections: [
      {
        heading: "4.1 Available Plans",
        content: [
          `Quassama offers the following subscription tiers:`,
        ],
        bullets: [
          "Free — $0/month, forever. Includes basic expense tracking, limited groups, manual entry, ad-supported experience, and up to 10 AI decisions per month.",
          "Personal — $2.99/month. Includes unlimited groups and expenses, Voice AI (60 min/month, 7 min/day), Receipt scanning (50 scans/month, 10/day), unlimited AI decisions, and no ads. Includes a 3-day free trial for new subscribers.",
          "Couple / Family — $6.99/month. Includes everything in Personal, plus Voice AI (350 min/month, 15 min/day), Receipt scanning (100 scans/month, 10/day), advanced analytics, and early access to new features.",
        ],
      },
      {
        heading: "4.2 Billing & Renewal",
        content: [
          `Paid subscriptions are billed monthly through the applicable app store (Apple App Store or Google Play Store) on the date you subscribed. Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.`,
          `You can manage or cancel your subscription at any time through your device's app store account settings. Cancellation takes effect at the end of the current billing period; no partial refunds are issued for unused time.`,
        ],
      },
      {
        heading: "4.3 Free Trial",
        content: [
          `The Personal plan includes a 3-day free trial for first-time subscribers. The trial automatically converts to a paid subscription unless cancelled before the trial period ends. Only one free trial is permitted per Apple ID or Google account.`,
        ],
      },
      {
        heading: "4.4 Price Changes",
        content: [
          `We may change subscription prices with at least 30 days' notice. Continued use of the Service after a price change constitutes your acceptance of the new pricing.`,
        ],
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "5. Acceptable Use Policy",
    content: [
      `You agree to use the Service only for lawful purposes. You must not:`,
    ],
    bullets: [
      "Use the Service to record, store, or facilitate any illegal financial activity, including tax fraud, money laundering, or unauthorized fund transfers.",
      "Attempt to reverse-engineer, decompile, or otherwise extract the source code of the application.",
      "Scrape, crawl, or harvest data from the Service by automated means.",
      "Impersonate another person or create false account information.",
      "Share your account credentials with third parties or allow multiple users to access the same account concurrently.",
      "Upload or transmit malicious code, viruses, or any content intended to disrupt or damage the Service.",
      "Circumvent, disable, or otherwise interfere with security-related features of the Service.",
    ],
    closingContent: [
      `We reserve the right to suspend or terminate any account that violates this policy without prior notice.`,
    ],
  },
  {
    id: "ai-features",
    title: "6. AI Features & Limitations",
    content: [
      `Quassama uses artificial intelligence to power features such as voice-to-expense transcription and receipt image scanning. By using these features, you acknowledge the following:`,
    ],
    bullets: [
      "AI-generated output (amounts, dates, categories, suggestions) is provided for convenience only and may contain errors. You are responsible for reviewing and verifying all AI-extracted data before acting on it.",
      "Voice recordings and receipt images submitted to AI processing are used solely to generate the requested output and are not retained beyond the immediate processing session.",
      "Daily and monthly usage limits apply per plan. Requests exceeding your plan's limits will be restricted until the next usage period.",
      "We do not guarantee the accuracy, completeness, or fitness of AI-generated output for any particular purpose.",
    ],
  },
  {
    id: "privacy",
    title: "7. Data Privacy & Security",
    content: [
      `Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Key principles include:`,
    ],
    bullets: [
      "We collect only the data necessary to provide and improve the Service.",
      "Financial data you enter is encrypted at rest and in transit using industry-standard protocols.",
      "We do not sell, rent, or trade your personal or financial data to third parties for advertising or marketing purposes.",
      "You may request deletion of your account and associated data at any time by contacting us.",
      "Cloud-synced data is stored on secure servers and is accessible only by you and the group members you explicitly invite.",
    ],
    closingContent: [
      `By using the Service, you consent to the collection and processing of data as described in our Privacy Policy.`,
    ],
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    content: [
      `All content, features, and functionality of the Service — including but not limited to the software, text, graphics, logos, icons, images, audio clips, and the selection and arrangement thereof — are the exclusive property of Quassama or its licensors and are protected by applicable intellectual property laws.`,
      `We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes in accordance with these Terms. This license does not include the right to sublicense, sell, resell, transfer, or commercially exploit any portion of the Service.`,
      `You retain ownership of all data and content you input into the Service. By uploading content (such as receipt images), you grant us a limited license to process that content solely for the purpose of delivering the requested Service feature.`,
    ],
  },
  {
    id: "third-party",
    title: "9. Third-Party Services",
    content: [
      `The Service may integrate with or link to third-party services, including but not limited to Apple App Store, Google Play Store, and cloud infrastructure providers. These third parties have their own terms of service and privacy policies, which are independent of ours.`,
      `We are not responsible for the content, practices, or availability of any third-party services. Your use of such services is at your own risk.`,
    ],
  },
  {
    id: "disclaimers",
    title: "10. Disclaimer of Warranties",
    content: [
      `THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.`,
      `We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy of any financial data, AI output, exchange rates, or calculations produced by the Service. The Service is not a substitute for professional financial, accounting, tax, or legal advice.`,
    ],
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    content: [
      `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL QUASSAMA, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.`,
      `IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM OR (B) USD $10.`,
      `Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability, so some of the above limitations may not apply to you.`,
    ],
  },
  {
    id: "termination",
    title: "12. Termination",
    content: [
      `We may suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.`,
      `Upon termination, your right to use the Service ceases immediately. If you wish to delete your account, you may do so through the app's settings. We will delete or anonymize your personal data within 30 days of account deletion, except where retention is required by law.`,
      `Provisions of these Terms that by their nature should survive termination — including intellectual property, disclaimers, and limitation of liability — shall survive.`,
    ],
  },
  {
    id: "modifications",
    title: "13. Modifications to Terms",
    content: [
      `We reserve the right to modify these Terms at any time. When we make material changes, we will notify you via in-app notification or email (if you have provided one) at least 14 days before the changes take effect.`,
      `Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the changes. If you do not agree to the new Terms, you must stop using the Service and cancel any active subscription.`,
    ],
  },
  {
    id: "governing-law",
    title: "14. Governing Law & Dispute Resolution",
    content: [
      `These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Morocco, without regard to its conflict of law provisions.`,
      `Any dispute arising from or relating to these Terms or the Service shall first be attempted to be resolved through good-faith negotiation. If negotiation fails within 30 days, disputes shall be submitted to the competent courts of Marrakech, Morocco, unless otherwise required by applicable consumer protection law in your jurisdiction.`,
    ],
  },
  {
    id: "contact",
    title: "15. Contact Us",
    content: [
      `If you have any questions, concerns, or requests regarding these Terms or the Service, please contact us at:`,
    ],
    contact: {
      name: "Quassama — Built by a Student Engineer at UCA Marrakech",
      email: "abdezaadaddi06@gmail.com",
    },
  },
];

export default function TermsAndConditions() {
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
              Terms &amp; Conditions
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

        {/* Terms content */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <p className="text-gray-600 text-base leading-relaxed mb-12 p-5 bg-amber-50 border border-amber-200 rounded-xl">
              <strong className="text-[#2A524D]">Please read these Terms carefully</strong> before using Quassama. They explain your rights, responsibilities, and the limitations of our Service. By using the app you agree to these Terms in full.
            </p>

            <div className="space-y-14">
              {SECTIONS.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="text-[#3A7068] text-2xl font-bold mb-5 pb-3 border-b border-gray-100">
                    {section.title}
                  </h2>

                  {/* Top-level paragraphs */}
                  {section.content?.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}

                  {/* Top-level bullet list */}
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

                  {/* Closing paragraphs after bullets */}
                  {section.closingContent?.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mt-4">
                      {para}
                    </p>
                  ))}

                  {/* Subsections (e.g. 4.1, 4.2 …) */}
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
                    </div>
                  ))}

                  {/* Contact block */}
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

            {/* Back to home */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#3A7068] font-semibold hover:text-[#2A524D] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
