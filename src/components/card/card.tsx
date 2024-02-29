import styles from './Card.module.css';

interface CardProps {
    children: any;
    header: string;
    description: string;
    button: string;
  }

export default function Card({ children, header, description, button }: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                {children}
            </div>
            {header && <div className={styles.header}>{header}</div>}
            {description && <div className={styles.description}>{description}</div>}
            {button && <button className={styles.button}>{button}</button>}
        </div>
    );
}
