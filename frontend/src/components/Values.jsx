import React from "react";
import "./Values.css";
import {
  FaRegHandPaper,
  FaUsers,
  FaShieldAlt,
  FaHandsHelping,
  FaUserPlus,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Values = () => {
  const leftValues = [
    {
      icon: <FaRegHandPaper />,
      title: "Deliver",
      text: "We do what we say we are going to do",
    },
    {
      icon: <FaUsers />,
      title: "Collaborate",
      text: "We work as a team — globally and locally",
    },
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      text: "We act with integrity",
    },
  ];

  const rightValues = [
    {
      icon: <FaHandsHelping />,
      title: "Care",
      text: "We take care of each other and foster a culture of inclusion",
    },
    {
      icon: <FaUserPlus />,
      title: "Community",
      text: "We believe in stewardship and building a sustainable company",
    },
  ];

  return (
    <div className="values_container">
      <div className="values_inner">
        <div className="values_left">
          <h1>Our Values</h1>
          <p className="values_intro">
            Our Values are the fabric of Red Cat. They bind us together regardless
            of where or how we work and position us to succeed on our
            transformation journey.
          </p>

          <div className="values_grid">
            <div className="values_col">
              {leftValues.map((v, i) => (
                <div className="value_item" key={i}>
                  <div className="value_icon">{v.icon}</div>
                  <div className="value_text">
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="values_col">
              {rightValues.map((v, i) => (
                <div className="value_item" key={i}>
                  <div className="value_icon">{v.icon}</div>
                  <div className="value_text">
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="values_logo">
          <img src={logo} alt="Redcat logo" />
        </aside>
      </div>
    </div>
  );
};

export default Values;
