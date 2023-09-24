import style from "./Header.module.css";

export const Header = () => {
    return (
        <header className={style.topHeader}>
            <h1 className={style.headerTitle}>Map Generator</h1>
        </header>
    )
}