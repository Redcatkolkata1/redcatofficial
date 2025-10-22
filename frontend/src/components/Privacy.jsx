import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy_container d-flex flex-wrap">
      <div
        className="left_container mt-5"
        style={{ width: "100%", maxWidth: "900px" }}
      >
        <h2>🔒 Privacy Policy</h2>
        <p>
          At <strong>RedCat Hospitality Private Limited</strong>, your privacy
          matters to us. Here’s a quick look at how we handle your data:
        </p>

        <h3>✅ What We Collect</h3>
        <ul>
          <li>Basic details: name, email, phone number</li>
          <li>Device & location info (only with consent)</li>
          <li>Account details & activity logs</li>
          <li>Payment/KYC details (if needed for services)</li>
        </ul>

        <h3>⚙️ How We Use It</h3>
        <ul>
          <li>To provide and improve our services</li>
          <li>To verify your identity and ensure secure transactions</li>
          <li>To send OTPs, alerts, and service updates</li>
          <li>To prevent fraud and comply with laws</li>
        </ul>

        <h3>🍪 Cookies & Tracking</h3>
        <ul>
          <li>We use cookies to make the website/app work better</li>
          <li>
            You can disable them in your browser (some features may not work)
          </li>
        </ul>

        <h3>🔐 Security</h3>
        <ul>
          <li>Your data is stored on secure, encrypted servers</li>
          <li>
            We use industry-standard safeguards, but no system is 100%
            hack-proof
          </li>
        </ul>

        <h3>🗑️ Your Choices & Rights</h3>
        <ul>
          <li>Access, correct, or delete your data</li>
          <li>Opt-out of marketing messages</li>
          <li>Request account deletion anytime</li>
        </ul>

        <h3>👶 Children’s Privacy</h3>
        <p>
          Services are for <strong>18+ users only</strong>. Data from minors is
          deleted if found.
        </p>

        <h3>📤 Sharing</h3>
        <ul>
          <li>We never sell your data</li>
          <li>
            Shared only with trusted service providers, regulators (as required
            by law), or during mergers/acquisitions
          </li>
        </ul>

        <h3>📌 Updates</h3>
        <p>
          We may update this policy. The latest version will always be available
          on our site.
        </p>

        <h3>📞 Contact Us</h3>
        <p>
          For questions or complaints, reach us at:
          <br />
          📧{" "}
          <a href="mailto:thredcathospitality@gmail.com">
            thredcathospitality@gmail.com
          </a>{" "}
          |{" "}
          <a href="mailto:support@redcat.co.in">support@redcat.co.in</a>
        </p>

        <p>
          👉 For the detailed Privacy Policy, please read the detailed document- {" "}
          <a
            href="/Redcat Privacy Policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>

          .
        </p>
      </div>
    </div>
  );
};

export default Privacy;
