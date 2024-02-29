import Spline from '@splinetool/react-spline';
import styles from './Ball.module.css'

export default function Ball(){
    return(
        <div className={styles.ball}>
          <Spline scene="https://prod.spline.design/rfbJ5D54Od5xn3aa/scene.splinecode" />  
        </div>
        
    )
}