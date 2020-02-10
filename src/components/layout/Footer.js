import React from "react";
import { Link } from "react-router-dom";
import { footer } from "../../data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {footer.map(list => {
          return (
            <div className="footer-block">
              <h4 className="heading-4">{list.title}</h4>
              <ul className="footer-block-list">
                {list.items.map(item => {
                  return (
                    <li>
                      <Link className="footer-block-list-item">{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
