import style from './style.module.scss'
import logo from '../../assets/images/logo.png'
import logomarvel from '../../assets/images/logomarvel.png'

export default function TopMenu(){
    return(
        <>
        {/* <div className={style.background}></div> */}
        <div className={style.container}>
            <ul className={style.listContainer}>
                <li className={style.item}>
                    <a className={style.icon1} href="https://www.marvel.com" target="_blank?">
                        <img src={logomarvel} width="100px" height="41.45px" alt="logo-img"/>
                    </a>
                </li>
                <li className={style.item}>
                    <a className={style.icon2} href="https://www.omelete.com.br/homem-aranha" target="_blank?">
                        <img src={logo}  alt="spiderlogo-img" />
                    </a>
                </li>
                <ul className={style.icon3}>
                <li>
                    <a href="#?">Home</a>
                </li>
                <li>
                    <a href="https://www.adorocinema.com/filmes/filme-233998/" target="_blank?">sinopse</a>
                </li>
                <li>
                    <a href="https://www.adorocinema.com/filmes/filme-233998/creditos/" target="_blank?">elenco</a>
                </li>
                </ul>
            </ul>
        </div>
        </>
    )
}