import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero/PageHero';
import './PolicyPages.css';

const PrivacyPolicy = () => (
  <>
    <PageHero
      title="Privacy Policy"
      description="How Codewizen collects, uses, and protects your information."
      breadcrumbs={[{ label: 'Privacy Policy' }]}
    />

    <article className="policy-page">
      <p className="policy-updated">Last updated: November 14, 2026</p>
      <p>
        Codewizen, operated by Sherize Solutions Pvt Ltd, respects your privacy.
        This policy explains how information may be handled when you use this
        website or contact us about our courses and services.
      </p>

      <section>
        <h2>Information you provide</h2>
        <p>
          We may receive information you choose to provide through contact,
          course enquiry, registration, review, or account forms. This can
          include your name, contact details, course preferences, and the
          message or other details you submit.
        </p>
      </section>

      <section>
        <h2>How we use information</h2>
        <p>We use submitted information to:</p>
        <ul>
          <li>Respond to enquiries and provide information about our services.</li>
          <li>Manage course registrations and student accounts.</li>
          <li>Provide support and communicate relevant service updates.</li>
          <li>Maintain, protect, and improve the website and our services.</li>
        </ul>
      </section>

      <section>
        <h2>Service providers and sharing</h2>
        <p>
          We may use service providers to support website hosting, account
          management, communications, or other operational needs. They may
          process information only as needed to provide those services. We do
          not sell your personal information. We may also disclose information
          when required by law or to protect our users, services, and rights.
        </p>
      </section>

      <section>
        <h2>Security and retention</h2>
        <p>
          We use reasonable measures to protect information, but no online
          service can guarantee absolute security. We retain information for
          only as long as reasonably needed for the purposes described here,
          unless a longer period is required by law.
        </p>
      </section>

      <section>
        <h2>Your choices and questions</h2>
        <p>
          You may contact us to request access to, correction of, or deletion of
          information you have provided, subject to applicable requirements.
          For privacy questions or requests, please use our <Link to="/contact-us">Contact Us</Link> page.
        </p>
      </section>
    </article>
  </>
);

export default PrivacyPolicy;
