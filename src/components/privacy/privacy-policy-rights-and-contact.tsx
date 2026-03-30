import Link from "next/link";

export function PrivacyPolicyRightsAndContact() {
  return (
    <>
      <h2 className="mt-10 text-xl font-semibold text-white">
        Your rights under the GDPR (Articles 15–22)
      </h2>
      <p className="leading-relaxed">
        Subject to applicable law, you may have the following rights in relation
        to your personal data:
      </p>
      <ul className="list-disc space-y-2 pl-5 leading-relaxed">
        <li>
          <span className="font-semibold text-white">
            Right of access (Article 15):
          </span>{" "}
          request a copy of the personal data we hold about you and certain
          information about how we use it.
        </li>
        <li>
          <span className="font-semibold text-white">
            Right to rectification (Article 16):
          </span>{" "}
          ask us to correct inaccurate data or complete incomplete data.
        </li>
        <li>
          <span className="font-semibold text-white">
            Right to erasure (&quot;right to be forgotten&quot;) (Article 17):
          </span>{" "}
          ask us to delete personal data in certain circumstances.
        </li>
        <li>
          <span className="font-semibold text-white">
            Right to restriction of processing (Article 18):
          </span>{" "}
          ask us to limit processing in certain circumstances (for example while a
          dispute is resolved).
        </li>
        <li>
          <span className="font-semibold text-white">
            Right to data portability (Article 20):
          </span>{" "}
          receive certain data you provided in a structured, commonly used,
          machine-readable format, and transmit it to another controller where
          technically feasible (where processing is based on consent or contract
          and is carried out by automated means).
        </li>
        <li>
          <span className="font-semibold text-white">
            Right to object (Article 21):
          </span>{" "}
          object to processing based on legitimate interests (including profiling
          based on those interests) in certain situations. Where we process
          personal data for direct marketing, you have a right to object at any
          time.
        </li>
        <li>
          <span className="font-semibold text-white">
            Rights related to automated decision-making (Article 22):
          </span>{" "}
          we do not use fully automated decision-making that produces legal or
          similarly significant effects solely by automated means for visitors to
          this site. If that ever changes, we will update this policy and explain
          your rights.
        </li>
      </ul>
      <p className="leading-relaxed">
        You may also have the right to lodge a complaint with a supervisory
        authority. In Ireland, the supervisory authority is the{" "}
        <a
          href="https://www.dataprotection.ie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 underline-offset-2 hover:text-emerald-300 hover:underline"
        >
          Data Protection Commission (DPC)
        </a>
        .
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">
        Cookies, local storage, and analytics
      </h2>
      <p className="leading-relaxed">
        <span className="font-semibold text-white">
          Essential preference storage:
        </span>{" "}
        we use browser storage (such as local storage) to record whether you have
        made a cookie choice and what you selected. This is needed to apply your
        decision consistently and avoid repeatedly showing the banner. It is not
        used for advertising.
      </p>
      <p className="leading-relaxed">
        <span className="font-semibold text-white">Analytics (optional):</span>{" "}
        Google Analytics 4 is loaded{" "}
        <span className="font-semibold text-white">only after consent</span>.
        Until you opt in, Google Analytics scripts are not loaded on the page.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">
        Contact / privacy requests
      </h2>
      <p className="leading-relaxed">
        To exercise your rights or ask questions about this policy, contact us
        via the{" "}
        <Link
          href="/#contact"
          className="text-emerald-400 underline-offset-2 hover:text-emerald-300 hover:underline"
        >
          contact form
        </Link>{" "}
        and include &quot;Privacy request&quot; in your message. We may need to
        verify your identity before fulfilling certain requests.
      </p>
    </>
  );
}
