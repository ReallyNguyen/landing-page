import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
        <div className={styles.footer}>
            <p>© PokeFormula 2024</p>
            <Link style={{ textDecoration: 'none' }} href={"https://github.com/ReallyNguyen/PokeFormula.git"}>
                <p className={styles.p}>Group Project Repo</p>
            </Link>
        </div>
    )
}