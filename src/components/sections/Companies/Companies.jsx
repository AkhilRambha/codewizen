import React from "react";
import "./Companies.css";

function Companies() {
  const companyData = [
    { name: "Infosys", domain: "infosys.com" },
    { name: "TCS", domain: "tcs.com" },
    { name: "Wipro", domain: "wipro.com" },
    { name: "Accenture", domain: "accenture.com" },
    { name: "Cognizant", domain: "cognizant.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Adobe", domain: "adobe.com" },
    { name: "Cisco", domain: "cisco.com" },
    { name: "Oracle", domain: "oracle.com" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "Capgemini", domain: "capgemini.com" },
    { name: "HCL Tech", domain: "hcltech.com" },
    { name: "Mphasis", domain: "mphasis.com" },
    { name: "Zoho", domain: "zoho.com" },
    { name: "Freshworks", domain: "freshworks.com" },
    { name: "Flipkart", domain: "flipkart.com" },
    { name: "Ericsson", domain: "ericsson.com" },
    { name: "Tech Mahindra", domain: "techmahindra.com" },
    { name: "LTI Mindtree", domain: "ltimindtree.com" },
    { name: "Virtusa", domain: "virtusa.com" },
    { name: "Genpact", domain: "genpact.com" },
    { name: "Hexaware", domain: "hexaware.com" }
  ];

  const companies = companyData.map(c => ({
    name: c.name,
    logo: `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${c.domain}&size=128`
  }));

  const rows = [
    companies.slice(0, 8),
    companies.slice(8, 16),
    companies.slice(16, 24),
  ];

  return (
    <section className="companies-section" id="companies">
      <div className="companies-container">

        <div className="companies-dashboard" data-aos="zoom-in" data-aos-duration="1000">
          <div className="companies-heading">
            <h2>
              300+ Companies Have Hired Our Learners
            </h2>
            <p>Our alumni are working with leading tech giants worldwide</p>
          </div>

          <div className="companies-rows">
            {rows.map((row, rowIndex) => (
              <div className="company-row" key={rowIndex}>
                <div
                  className={`company-track ${
                    rowIndex % 2 === 0 ? "move-left" : "move-right"
                  }`}
                >
                  {[...row, ...row].map((company, index) => (
                    <div className="company-item" key={index}>
                      <div className="company-circle">
                        <img src={company.logo} alt={company.name} />
                      </div>
                      <span>{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="dashboard-glow"></div>
        </div>

      </div>
    </section>
  );
}

export default Companies;