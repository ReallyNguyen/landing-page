import styles from './Subribe.module.css'

export default function Subcribe(){
    return(
        <>
            <section className={styles.newsletter}>
                <h2 className={styles.h1}>Subscribe to Our Newsletter</h2>
                <form className={styles.form}>
                    <input className={styles.input} type="email" placeholder="Enter your email" />
                    <button className={styles.button}>Subscribe</button>
                </form>
            </section>
        </>
    )
}