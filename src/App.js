// import style from './App.module.scss'

import LeftMenu from './components/LeftMenu/index';
// import TopMenu from './components/TopMenu/index';
import Background from './components/Background/index';
import Text from './components/Text/index';

export default function App() {
  return (
    <>
      <LeftMenu />
      <Text />
      {/* <TopMenu /> */}
     {/*  <div className={style.background}></div> */}
      <Background />
    </>
    );
}


