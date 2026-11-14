import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero/PageHero';
import './PolicyPages.css';

const TermsAndConditions = () => (
  <>
    <PageHero
      title="Terms & Conditions"
      description="Terms for using the Codewizen website and services."
      breadcrumbs={[{ label: 'Terms & Conditions' }]}
    />

    <article className="policy-page">
      <p className="policy-updated">Last updated: November 14, 2026</p>
      <p>
        These terms apply to your use of the Codewizen website and the
        information and services offered by Sherize Solutions Pvt Ltd. By using
        this website, you agree to these terms. If you do not agree, please
        discontinue using the website.
      </p>

      <section>
        <h2>Website information</h2>
        <p>
          We aim to keep course, schedule, and service information current.
          Course content, schedules, instructors, availability, and fees may
          change. Please confirm the details that apply to your enrolment with
          us before making a decision.
        </p>
      </section>

      <section>
        <h2>Enrolment and payments</h2>
        <p>
          Enrolment is subject to confirmation by Codewizen and any applicable
          course requirements. Fees, payment timelines, cancellations, and
          refunds are governed by the terms communicated for the relevant
          course or transaction.
        </p>
      </section>

      <section>
        <h2>Accounts and acceptable use</h2>
        <p>
          You are responsible for providing accurate information and keeping
          your account credentials secure. Do not misuse the website, interfere
          with its operation, attempt unauthorized access, or submit content
          that is unlawful or infringes another person’s rights.
        </p>
      </section>

      <section>
        <h2>Learning materials and outcomes</h2>
        <p>
          Unless otherwise stated, website and course materials are provided
          for your personal learning use and may not be copied, redistributed,
          or commercially reused without permission. Training and placement
          support do not guarantee a particular job, examination result, or
          career outcome; results depend on individual circumstances and effort.
        </p>
      </section>

      <section>
        <h2>Third-party services and availability</h2>
        <p>
          The website may link to third-party services. We are not responsible
          for their content or practices. We may update, suspend, or remove
          website features when needed, and we do not guarantee uninterrupted
          availability.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms by publishing a revised version on this
          page. Continued use of the website after changes are published means
          you accept the updated terms.           If you have questions, please visit our <Link to="/contact-us">Contact Us</Link> page.
        </p>
      </section>
    </article>
  </>
);

export default TermsAndConditions;
