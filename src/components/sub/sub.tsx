import Spline from '@splinetool/react-spline';
import styles from './Sub.module.css'

export default function Sub(){
    return(
        <div className={styles.sub}>
            <h1 className={styles.h1}>Join PokeFormula today and become a Pokemon master!</h1>
            <div className={styles.spline}>
                <Spline scene="https://prod.spline.design/5w3-WkVVLF44FsjH/scene.splinecode" />
            </div> 
        </div>
    )
}