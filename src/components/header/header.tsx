import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src='/logo.svg' width={100} height={100} alt="logo" />
      <button className={styles.button}>Sign Up</button>
    </header>
  );
}
