import format from "date-fns/format";
import ptBr from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";

export function Header() {
    const currentDate = format(new Date(), "EEEEEE, d MMMM", {
        locale: ptBr,
    });

    return (
        <header className={styles.headerContainer}>
            <img style={{width: '100px', height: '100px'}} src="/tl.png" alt="turinglegion" />

            <p style={{color: '#ccc'}}>TuringCast um podcast de tecnologia</p>

            <span style={{color: '#ccc'}}>{currentDate}</span>
        </header>
    );
}
