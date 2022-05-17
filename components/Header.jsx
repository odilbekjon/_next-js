import Image from "next/image";
import styles from '../styles/Home.module.css';

function Header() {
    return(
        <section className="section__header">
            <div className={styles.container}>
              <header className="header">
                <a href="http://localhost:3000/"><Image className="header__img" src="/logo.png" width={85} height={52} /></a>
                <ul className="header__list">
                    <li className="header__item"><a className="header__link" href="">Biz haqimizda</a></li>
                    <li className="header__item"><a className="header__link" href="">Jamoa</a></li>
                    <li className="header__item"><a className="header__link active" href="">Ko’rsatuv sonlari</a></li>
                    <li className="header__item"><a className="header__link" href="http://localhost:3000/about">Merch</a></li>
                    <li className="header__item"><a className="header__link" href="">Hamkorlik</a></li>
                </ul>
                <i className='bx bx-menu'></i>
              </header>
              <div className="hero">
                   <div className="hero__left">
                     <h1 className="hero__head">Qasam ichaman, meni Amazon yoki Facebook’ka  <span className="hero_head_span">50 000$</span> oylikka chaqirsa ham bormayman</h1>
                     <div className="box">
                     <div className="boxx">
                        <img className="hero__img" src="/icon.svg" width={50} />
                        <audio controls className="hero__mp3" src="/Osmondagi_bolalar.mp3" type="audio/mp3"></audio>
                        <div className="wrap">
                        <span className="hero__span">Abdusattor Abdurahimov</span>
                        <p className="hero__text">Tajribali admin, frilanser va IT biznesmen</p>
                        </div>
                    </div>
                     </div>
                  </div>
                  <div className="hero__right">
                      <img className="hero__right--img" src="/Abdusattor.png"  alt=""/>
                  </div>
              </div>
            </div>
        </section> 
        // end of section
    )
}

export default Header;