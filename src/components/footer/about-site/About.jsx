import React from 'react'
import { Container } from '../../../utils/Components'
import c from './About.module.scss'
import Footerlogo from '../footer-images/s.png'

const About = () => {
    return (
        <div className={c.aboutWrapper}>
            <Container>
                <div className={c.aboutComponent}>
                    <div className={c.aboutInner}>
                        <img className={c.footerLogo} src={Footerlogo} alt="logo" />
                        <p className={c.footerLogoText}>ONLINE MARKET.uz</p>
                    </div>
                    <p className={c.aboutDescription}>Cервис объявлений № 1 в Узбекистане
                        Частные объявления Узбекистана на OLX (бывший torg.uz) - здесь вы найдете то, что искали.
                        Нажав на кнопку "Подать объявление", вы сможете разместить онлайн-объявление на любую необходимую тематику - поиск работы, услуги, продажа автомобилей, недвижимости, электроники и многое другое.
                        С помощью сервиса OLX в Узбекистане вы можете найти, продать или купить практически все, что угодно. Воспользовавшись функцией поиска, вы без труда найдете уже опубликованные объявления интересующей вас тематики.
                        OLX в Узбекистане - ваш надежный и незаменимый помощник.</p>
                </div>
            </Container>
        </div>
    )
}

export default About