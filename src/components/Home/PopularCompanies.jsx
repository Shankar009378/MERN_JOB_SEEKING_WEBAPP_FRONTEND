import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft Corporation India",
      location: "807, New Delhi House, Barakhamba Road, New Delhi – 110001, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
      careersLink: "https://careers.microsoft.com/",
    },
    {
      id: 2,
      title: "Tesla, Inc.",
      location: "13101 Harold Green Road, Austin, Texas 78725",
      openPositions: 5,
      icon: <SiTesla />,
      careersLink: "https://www.tesla.com/careers",
    },
    {
      id: 3,
      title: "Apple Inc.",
      location: "1 Apple Park Way. Cupertino, CA 95014. United States",
      openPositions: 20,
      icon: <FaApple />,
      careersLink: "https://www.apple.com/jobs/",
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <a href={element.careersLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Positions {element.openPositions}</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
