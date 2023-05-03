import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Container, MainLink } from "../../utils/Components";
import c from "./Navbar.module.scss";
import { UniversalLink } from "../../utils/Components";
import { FiMessageCircle, FiHeart, FiUser, FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const langs = ["uz", "ru"];
  const { t } = useTranslation();
  const { pathname } = useLocation();
  function menuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() => {
    isMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
  }, [isMenuOpen])
  console.log(isMenuOpen);
  return pathname.includes("/auth") ? (
    <></>
  ) : (
    <nav className={c.navbar}>
      <div className={isMenuOpen ? c.mobile__filter : ""} style={isMenuOpen ? { zIndex: "3" } : { zIndex: "0" } } onClick={()=>{setIsMenuOpen(false)}}></div>
      <Container>
        <div className={c.navbar__wrapper}>
          <div className={c.navbar__logo__wrapper}>
            <img src={logo} alt="" />
          </div>
          <div className={c.navbar__menu}>
            <ul className={c.navbar__language__list}>
              {langs.map((l) => (
                <>
                  <li
                    onClick={() => {
                      i18n.changeLanguage(l);
                      dispatch({langCode: l, type: "CHANGE_LANG"})
                    }}
                  >
                    {l}
                  </li>
                  <span>|</span>
                </>
              ))}
            </ul>

            <UniversalLink text={t("message")} link="/" icon={<FiMessageCircle/>}/>
            <UniversalLink text="" link="/like" icon={<FiHeart/>}/>
            <UniversalLink text={t("account")} link="/auth/login" icon={<FiUser/>}/>
          </div>
          <MainLink text={t("ennounce")} link="/" type="light" />
          <FiMenu className={c.mobile__menu__icon} onClick={menuToggle} />
        </div>
      </Container>
      <div className={`${c.mobile__menu} ${isMenuOpen ? c.active__menu : ""}`}>
        <div className={c.navbar__menu__mobile}>
          <ul className={c.navbar__language__list}>
            {langs.map((l) => (
              <>
                <li
                  onClick={() => {
                    i18n.changeLanguage(l);
                  }}
                >
                  {l}
                </li>
              </>
            ))}
          </ul>
          <UniversalLink text={t("message")} link="/" icon={<FiMessageCircle />} />
          <UniversalLink text="" link="/" icon={<FiHeart />} />
          <UniversalLink text={t("account")} link="/auth/login" icon={<FiUser />} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
