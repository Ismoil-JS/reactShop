import React, {useEffect} from 'react';
import c from "./Auth.module.scss";
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Auth = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  useEffect(() => {
     if(!pathname.includes("register")){
      navigate("/auth/login");
    }
 },[ navigate, pathname ]);

  return (
    <div className={c.auth}>
      <div className={c.circle}></div>
      <div className={c.auth__form}>
        <ul className={c.auth__nav}>
          <li>
            <NavLink  className={(navData) => (navData.isActive ? c.auth__link__active : null)} to="/auth/register">{t("register")}</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? c.auth__link__active : null)} to="/auth/login">{t("login")}</NavLink>
          </li>
        </ul>
        <Outlet/>
      </div>
    </div>
  )
}

export default Auth