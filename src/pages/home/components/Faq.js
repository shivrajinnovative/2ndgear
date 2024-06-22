import React, { useState } from "react";
import { useDynamicQuery } from "../../../utils/apiUtils";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { data, error, isLoading } = useDynamicQuery(["faq"], "get-faq-list");

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading || error) {
    return <></>;
  }
  return (
    <div className="container mt-5 faq">
      <h3 className="text-center pt-2 poppins  fw-500">FAQ's</h3>
      <p className="text-center py-3 poppins fw-400">
        Frequently Asked Questions
      </p>
      <div className="container px-sm-5">
        <div className="accordion" id="faqAccordion">
          {data &&
            data.faqsData?.map((faq, index) => (
              <div className="card my-4" key={index}>
                <div
                  className={`card-header ${
                    openIndex === index && "bg-primary text-white" 
                  }`}
                  id={`heading${index}`}
                >
                  <h2 className="mb-0 poppins fw-400">
                    <div
                      className="d-flex p-3 justify-content-between custom-button w-100"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <span className="float-right">
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </div>
                  </h2>
                </div>
                <div
                  id={`collapse${index}`}
                  className={`collapse ${
                    openIndex === index && "show" 
                  } transition-height`}
                  aria-labelledby={`heading${index}`}
                  data-parent="#faqAccordion"
                >
                  <p className="card-body poppins fw-400 px-4">{faq.answer}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
