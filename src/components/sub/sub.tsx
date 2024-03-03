import Spline from '@splinetool/react-spline';
import styles from './Sub.module.css'

export default function Sub(){
    return(
        <div className={styles.sub}>
            <h1 className={styles.h1}>Become the ultimate Pokemon trainer with PokeFormula! Explore detailed stats and information for every Pokemon generation, compare stats, and engage in thrilling 1v1 battles. Plus, collect and play with Pokemon TCG cards won from battles!</h1>
            <div className={styles.spline}>
                <Spline scene="https://prod.spline.design/5w3-WkVVLF44FsjH/scene.splinecode" />
            </div> 
        </div>
    )
}