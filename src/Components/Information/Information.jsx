import React from "react";
import Css from "./Information.module.css";
import { CiPhone, CiMail } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Information = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.call}>
            <div className={Css.text}>
              <button>
                <CiPhone />
              </button>
              <p>+201098285305</p>
            </div>
            <div className={Css.text}>
              <button>
                <CiMail />
              </button>
              <p>sohailaebrahim62@gmail.com</p>
            </div>
          </div>
          <div className={Css.icons}>
            <Link to="https://www.facebook.com/">
              <FaFacebookF />
            </Link>
            <Link to="https://github.com/sohailaebrahim">
              <FaGithub />
            </Link>
            <Link to="https://www.linkedin.com/in/sohaila-ebrahime-650474270/">
              <FaLinkedinIn  />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
