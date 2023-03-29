import React from "react";
import { t } from "i18next";

const Content = (props) => {
  return (
    <div>
      <div className="hero-square">
        <div className="hero-square__bg">
          <img
            src="../../../images/layout2.jpg"
            alt={`${t("siteName")} ēka vasarā`}
          />
        </div>
        <div className="wrapper">
          <div className="hero-square__col">
            <img
              className="hero-square__image"
              src="http://www.garozaspamatskola.lv/wp-content/uploads/2021/08/edit_DSC01771-2-1570x962-c-default.jpg"
              alt={`${t("siteName")} ēka vasarā`}
            />
            <div className="hero-square__logo">
              <img
                src="../../../images/logo.jpg"
                alt={`${t("siteName")} logo - ozola zars ar zēnu un meiteni`}
                width="126px"
                height="126px"
              />
              <span className="hero-square__logo-back"></span>
            </div>
          </div>
          <div className="hero-square__col">
            <div className="hero-square__content">
              <h2 className="hero-square__title">{t("siteName")}</h2>
              <div className="hero-square__desc">
                Mūsu skola ir kā otrā ģimene gan pedagogiem, gan skolēniem. Šeit
                visi viens otru pazīst. Ja kādam nepieciešams atbalsts un
                palīdzība, tas tiek dots.
              </div>
              <div className="hero-square__more">
                <a href={"/contact"} title="Vairāk par skolu" className="link ">
                  <span>Vairāk par skolu</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.333.667L7.6 1.4l4 4.067H.333v1.066H11.6l-4 4.067.733.733L13.667 6z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-square__links">
        <div className="wrapper">
          <ul className="quick-links quick-links--horizontal quick-links--large">
            <li className="quick-links__item">
              <a className="quick-links__link" href={"/contact"} target="">
                Stundu laiki
                <svg
                  width="9"
                  height="15"
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
              <a className="quick-links__link" href={"/contact"} target="">
                Ēdināšana
                <svg
                  width="9"
                  height="15"
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
              <a className="quick-links__link" href={"/contact"} target="">
                Skolas autobuss
                <svg
                  width="9"
                  height="15"
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
              <a className="quick-links__link" href={"/contact"} target="">
                Stundu izmaiņas
                <svg
                  width="9"
                  height="15"
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
  );
};

export default Content;
