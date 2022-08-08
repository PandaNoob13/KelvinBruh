import './App.css';
import { useState } from 'react';
import MoreEffect from './components/MoreEffect';
import ThemeModifier from './components/ThemeModifier';
import DummyView from './components/DummyView';
import { HookComponent } from './components/HookComponent';
import { DepProvider } from './context/depContext';
import MoreEffectService from './services/MoreEffectService';
import MyHook from './components/MyHook/MyHook';

function App() {
  // const [dark, setDark] = useState(false)
  // return <MoreEffect/>
  // return (
  //   <div style={{backgroundColor: dark ? 'black' : 'white'}}>
  //     <p style={{color: dark ? 'white' : 'black'}}>color: {dark ? 'white' : 'black'}</p>
  //     <button onClick={() => setDark(!dark)}>
  //       Set Theme {dark ? 'white' : 'black'}
  //     </button>
  //   </div>
  // );
  // const [pageID, setPageID] = useState(0)
  // return(
  //   pageID == 0 ? <ThemeModifier onNavigate={() => setPageID(1)}/> : <DummyView onNavigate={() => setPageID(0)}/>
  // )
  // return <HookComponent/>

  // return (
  //   <DepProvider services={{
  //     moreEffectService: MoreEffectService()
  //   }}>
  //     <MoreEffect/>
  //   </DepProvider>

  // )
  return <MyHook/>
}

export default App;
