import style from './style.module.scss'
import perfil from '../../assets/images/photo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import search from '../../assets/images/search.png'
import twitter from '../../assets/images/twitter.png'
import status from '../../assets/images/statusOn.png'

export default function LeftMenu(){
    return(
        <>
        <div className={style.background}></div>
        <div className={style.container}>
            <ul className={style.listContainer}>
                <li className={style.item}>
                    <a className={style.icon1} href="#?">
                        <img src={perfil} alt="perfil-img"/>
                        <img src={status} className={style.status} alt="status-img"/>
                    </a>
                </li>
                <li className={style.item}>
                    <a className={style.icon2} href="https://www.instagram.com/guilier_me/" target="_blank?">
                        <img src={instagram} alt="instagram-img" />
                    </a>
                </li>
                <li className={style.item}>
                    <a className={style.icon3} href="#?" target="_blank?">
                     <img src={twitter} alt="twitter-img" />
                    </a>
                </li>
                <li className={style.item}>
                    <a className={style.icon4} href="https://www.facebook.com/guilherme.ferreira.7140497/" target="_blank?">
                     <img src={facebook} alt="facebook-img" /> 
                    </a>
                </li>
                <li className={style.item}>
                    <a className={style.icon5} href="#?">
                        <img src={search} alt="search-img" /> 
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}