import React from 'react'
import styles from '../styles/scroll.module.css'

const textHeader = ({ text }) => {
const repeatedText = Array(30).fill(text).join(" • ");

    return(
        <>
        <div className={styles.scrollcontainer}>
            <div className={styles.scrolltext}>
                {repeatedText}
            </div>
    </div>
        </>
    );
};

export default textHeader;