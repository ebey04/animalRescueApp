import styles from "./button.module.css"

export default function Button({onClick, children, className}) {

    return (
        <button className={`${styles.btn} ${className ?? ""}`} onClick={onClick}>{children}</button>
    )
}