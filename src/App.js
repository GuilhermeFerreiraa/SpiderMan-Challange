import style from './App.module.scss'

import LeftMenu from './components/LeftMenu/index';
import TopMenu from './components/TopMenu/index';
import Text from './components/Text/index';

export default function App() {
  return (
    <div className={style.App}>
      <LeftMenu />
      <TopMenu />
      <div className={style.background}></div>
      <Text />
    </div>
    );
}


