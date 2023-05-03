import React from 'react'
import { Container } from '../../../utils/Components'
import c from "./FooterTop.module.scss"
import footerTopImg from "../footer-images/footer-top.png"
import { MainLink } from '../../../utils/Components'

const FooterTop = () => {
  return (
    <div className={c.footer__top__wrapper}>
      <Container>
        <div className={c.footerTopBlog}>
          <img className={c.footerTopImg} src={footerTopImg} alt="img" />
            <p className={c.footerTopText}>O'lchov asboblari, chpu asboblari shu kabi jihozlarni qidiryapsizmi ? U holda sizga <a className={c.FooterTopLink} href="http://localhost:3000/">ONLINE MARKET.uz</a> do'konini tavsiya qilamiz hamyonbob, eng asosiysi sifatli metal uskunalar. Tashrif buyuring va izlagan narsanggizni bizning saytda, ONLINE MARKET.uz saytidan toping  !</p>
            <MainLink text="Batafsil" link="/" type="light" />
        </div>
      </Container>
    </div>
  )
}

export default FooterTop