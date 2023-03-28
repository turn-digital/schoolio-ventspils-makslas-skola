import React from "react";
import { t } from "i18next";

const Content = (props) => {
  return (
    <div>
      <div className="hero-circle">
        <div className="wrapper">
          <div className="hero-circle__col">
            <div className="hero-circle__image">
              <img
                className="hero-circle__image-item"
                src="../../../images/layout3.png"
                alt={t("siteName")}
              />
              <div className="hero-circle__logo">
                <img
                  src="https://www.salgalesmms.lv/wp-content/uploads/2021/07/Salgales-MMS-logo.png"
                  alt={`${t("siteName")} logo`}
                />
                <span className="hero-circle__logo-back"></span>
              </div>
            </div>
          </div>
          <div className="hero-circle__col">
            <div className="hero-circle__logo">
              <img
                src="../../../images/logo.jpg"
                alt={`${t("siteName")} logo`}
              />
              <span className="hero-circle__logo-back"></span>
            </div>

            <h2 className="hero-circle__title">{t("siteName")}</h2>

            <div className="hero-circle__desc">
              "Sabalso Mūziku, Mākslu Sevī"
            </div>
            <div className="hero-circle__links">
              <ul className="quick-links quick-links--simple ">
                <li className="quick-links__item">
                  <a
                    href="https://www.salgalesmms.lv/sakumlapa/nodarbibu-grafiks/"
                    title="Nodarbību grafiki"
                    className="link "
                  >
                    <span>Nodarbību grafiki</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 9 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="quick-links__item">
                  <a
                    href="https://www.salgalesmms.lv/uznemsana/muzikas-makslas-izglitibas-programmas/"
                    title="Programmu piedāvājums"
                    className="link "
                  >
                    <span>Programmu piedāvājums</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 9 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.55 7.5L1.05 15 0 13.95 6.45 7.5 0 1.05 1.05 0z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hero-circle__waves">
          <div className="hero-circle__wave">
            <img
              src="https://www.salgalesmms.lv/wp-content/themes/svp-child/assets/images/fons.png"
              alt="background"
            />
            <img
              src="https://www.salgalesmms.lv/wp-content/themes/svp-child/assets/images/fons.png"
              alt="background"
            />
            <img
              src="https://www.salgalesmms.lv/wp-content/themes/svp-child/assets/images/fons.png"
              alt="background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
