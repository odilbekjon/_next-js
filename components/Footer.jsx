import styles from '../styles/Home.module.css';

function Footer() {
    return(
        <section className="footer__section">
            <div className={styles.container}>
                <footer className='footer'>
                    <img src="logo.png" width={85} height={52} alt="" />
                    <p className='footer__text'>“Osmondagi bolalar” 2021. Barcha huquqlar himoyalangan</p>
                    <img src="/abutech.png" width={180} alt="" />
                </footer>
            </div>
        </section>
    )
}

export default Footer;