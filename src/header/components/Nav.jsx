import styles from '../styles/nav.module.css'
import siteLogo from '../img/sitelogo.png'

export default function Nav() {
    return (
        <>
        <div className={styles.maincontainer}>
            <img className={styles.siteLogo} src={siteLogo}/>
            <h2>RAHIMHAMID</h2>

            <div className={styles.subcontainer}>
                <h3>HOME</h3>
                <h3>PORTFOLIO</h3>

                <ul>
                    <li>PAINTING</li>
                    <li>SCULPTURE</li>
                    <li>PRINTS</li>
                </ul>

                <ul>
                    <li>PHOTOS</li>
                    <li>DRAWINGS</li>
                    <li>PUBLIC ART</li>
                </ul>

                <h3>INFO</h3>

            </div>

        </div>
        </>
    )
};