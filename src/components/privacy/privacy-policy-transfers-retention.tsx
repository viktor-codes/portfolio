export function PrivacyPolicyTransfersRetention() {
  return (
    <>
      <h2 className="mt-10 text-xl font-semibold text-white">
        Processors, international transfers, and safeguards
      </h2>
      <p className="leading-relaxed">
        We use trusted service providers to run parts of the service. They
        process personal data on our instructions.
      </p>
      <p className="leading-relaxed">
        <span className="font-semibold text-white">Email delivery (Resend):</span>{" "}
        contact messages are transmitted using{" "}
        <a
          href="https://resend.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 underline-offset-2 hover:text-emerald-300 hover:underline"
        >
          Resend
        </a>
        , which is headquartered in the United States. That means certain data
        (such as the content of your message and email metadata needed to deliver
        it) may be processed in the{" "}
        <span className="font-semibold text-white">United States</span> and
        potentially other countries outside the European Economic Area (EEA).
      </p>
      <p className="leading-relaxed">
        Where personal data is transferred outside the EEA/UK, we aim to ensure
        appropriate safeguards are in place under GDPR Chapter V — for example{" "}
        <span className="font-semibold text-white">
          EU Standard Contractual Clauses (SCCs)
        </span>{" "}
        approved by the European Commission, supplemented where appropriate by
        additional technical and organisational measures, and (where relevant)
        UK equivalents. Resend publishes information about compliance and
        subprocessors; you should also review Resend&apos;s privacy documentation
        for details of how they process data.
      </p>
      <p className="leading-relaxed">
        <span className="font-semibold text-white">Analytics (Google):</span> if
        you consent, Google may process analytics data in accordance with
        Google&apos;s terms and privacy notices, which may involve transfers
        outside the EEA. Google provides contractual commitments for such
        transfers (including SCCs where applicable).
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">
        How long we keep data (retention)
      </h2>
      <p className="leading-relaxed">
        We keep personal data only for as long as necessary for the purposes
        described above, unless a longer period is required by law.
      </p>
      <ul className="list-disc space-y-2 pl-5 leading-relaxed">
        <li>
          <span className="font-semibold text-white">Contact form enquiries:</span>{" "}
          we typically retain emails and related correspondence for up to{" "}
          <span className="font-semibold text-white">six (6) months</span> after
          the last message in a thread if no contract or ongoing work
          relationship arises from your enquiry (a &quot;non-converting&quot;
          inquiry). If a project or commercial relationship begins, we may
          retain relevant communications longer where needed to perform the work,
          meet legal obligations, or defend legal claims.
        </li>
        <li>
          <span className="font-semibold text-white">
            Security logs / rate-limiting data:
          </span>{" "}
          short-lived technical records may be retained only as long as needed to
          prevent abuse (typically a brief window aligned with the rate limit
          mechanism in use).
        </li>
        <li>
          <span className="font-semibold text-white">Cookie consent record:</span>{" "}
          stored in your browser until you clear site data or change your choice.
          We do not need to keep a separate server-side copy of your banner
          choice for basic operation.
        </li>
      </ul>
    </>
  );
}
