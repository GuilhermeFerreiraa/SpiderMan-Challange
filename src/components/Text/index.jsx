import style from './style.module.scss'
import title from '../../assets/images/title.png'
import subtitle from '../../assets/images/subtitle.png'
import play from '../../assets/images/play.png'

export default function Text(){
    return (
    <>
        <div className={style.contentMain}>
          <img src={title} alt="title" />
          <img src={subtitle} alt="subtitle" />
        </div>
        <div className={style.contentBotao}>
              <a href="#?">Assista ao trailer</a>
              <img className={style.image} src={play} alt="play-img" />
        </div>
    </>
    )
}