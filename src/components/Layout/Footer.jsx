import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By ShankarKumarNanda.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/shankar-kumar-nanda-04304a263/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/Shankar009378"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://twitter.com/shankarnanda26"} target="_blank">
          <FaTwitter />
        </Link>
        <Link to={"mailto:nandashankar26@gmail.com"} target="_blank">
          <IoMail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
