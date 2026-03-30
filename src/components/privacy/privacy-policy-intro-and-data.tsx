export function PrivacyPolicyIntroAndData() {
  return (
    <>
      <p className="leading-relaxed text-sm text-white/60">
        This policy explains how we use personal data when you visit this
        website. It is written in plain English. If anything is unclear,
        contact us using the details at the end.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">
        Who we are (data controller)
      </h2>
      <p className="leading-relaxed">
        This website is a professional portfolio operated by an individual
        developer based in Ireland. For the purposes of EU/UK data protection
        law, we are the{" "}
        <span className="font-semibold text-white">data controller</span> for
        personal data processed through this site, unless we state otherwise
        (for example where a service provider processes data only on our
        instructions as a{" "}
        <span className="font-semibold text-white">processor</span>).
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">
        What personal data we process
      </h2>
      <p className="leading-relaxed">
        Depending on how you use the site, we may process:
      </p>
      <ul className="list-disc space-y-2 pl-5 leading-relaxed">
        <li>
          <span className="font-semibold text-white">Contact form:</span> email
          address and message (needed to reply); name and phone number if you
          choose to provide them.
        </li>
        <li>
          <span className="font-semibold text-white">
            Security and abuse prevention:
          </span>{" "}
          for example IP address and browser user agent when you submit the
          contact form, to help detect spam, enforce rate limits, and protect the
          service.
        </li>
        <li>
          <span className="font-semibold text-white">
            Cookie / consent preference:
          </span>{" "}
          we store your choice (for example whether analytics is on or off) in
          your browser using{" "}
          <span className="font-semibold text-white">local storage</span> so we
          do not ask you again on every visit. This is separate from analytics:
          we do not load Google Analytics until you opt in.
        </li>
        <li>
          <span className="font-semibold text-white">
            Analytics (only if you consent):
          </span>{" "}
          if you accept analytics, Google Analytics 4 may set or read cookies and
          collect usage data as described by Google. You can withdraw consent at
          any time via &quot;Cookie settings&quot; in the site footer.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-white">
        Why we process data and legal bases (GDPR)
      </h2>
      <p className="leading-relaxed">
        We process personal data only where we have a valid legal basis under
        the General Data Protection Regulation (GDPR). The main bases we rely
        on are:
      </p>
      <ul className="list-disc space-y-3 pl-5 leading-relaxed">
        <li>
          <span className="font-semibold text-white">
            Legitimate interests (Article 6(1)(f) GDPR)
          </span>
          : we process contact form submissions and limited technical data to
          respond to your enquiry, operate this website, and protect it from
          abuse (including spam and excessive automated requests). We consider
          this necessary and balanced against your rights; you may object in
          certain cases (see &quot;Your rights&quot; below).
        </li>
        <li>
          <span className="font-semibold text-white">
            Consent (Article 6(1)(a) GDPR)
          </span>
          : we process analytics data through Google Analytics 4 only if you
          click &quot;Accept analytics&quot; or enable analytics in cookie
          preferences. You can withdraw consent at any time; withdrawal does not
          affect the lawfulness of processing before withdrawal.
        </li>
        <li>
          <span className="font-semibold text-white">
            Strictly necessary storage (ePrivacy)
          </span>
          : storing your cookie choice in local storage is necessary to remember
          your consent decision and is aligned with regulatory expectations for
          consent banners. Analytics storage/access is not activated unless you
          consent.
        </li>
      </ul>
      <p className="leading-relaxed">
        We do not use your contact details to send marketing emails unless you
        clearly ask us to, and we do not sell your personal data.
      </p>
    </>
  );
}
