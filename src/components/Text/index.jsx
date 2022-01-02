import style from './style.module.scss'
import title from '../../assets/images/title.png'
import subtitle from '../../assets/images/subtitle.png'
import play from '../../assets/images/play.png'

export default function Text(){
    return (
        <div className={style.content}>
            <div className={style.Title}>
                <img src={title} alt="title-img" />
            </div>
                <img className={style.subtitle} src={subtitle} alt="subtitle-img" />
                <button className={style.botao} type="submit"> 
                    <a href="https://www.youtube.com/watch?v=RKb1jSW56UQ" target="_blank?">
                        ASSISTA AO TRAILER
                    </a>
                    <img src={play} alt="play-img" />
                </button>
        </div>
    )
}