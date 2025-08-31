import styles from '../styles/home.module.css'

import fportfolio from '../img/fportfolio.png'
import fprints from '../img/fprints.png'
import fphotos from '../img/fphoto.png'

import fpaint from '../img/fpaint.png'
import fpublic from '../img/fpublic.png'


import fsculpt from '../img/fsculpt.png'
import fdraw from '../img/fdraw.png'
import finfo from '../img/finfo.png'

export default function Home() {
    return(
        <>
        <div className={styles.maincont}>

            <div className={styles.firstcol}>
                <img className={styles.imgfold0} src={fportfolio}/>
                <img className={styles.imgfold1} src={fprints}/>
                <img className={styles.imgfold1} src={fphotos}/>
            </div>

            <div className={styles.middlecol}>
                <img className={styles.imgfold2} src={fpaint}/>
                <img className={styles.imgfold2} src={fpublic}/>
            </div>

            <div className={styles.lastcol}>
                <img className={styles.imgfold0} src={fsculpt}/>
                <img className={styles.imgfold3} src={fdraw}/>
                <img className={styles.imgfold3} src={finfo}/>
            </div>

        </div>
        </>
    )
};