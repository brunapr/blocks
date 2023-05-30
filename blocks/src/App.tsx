import { useState } from 'react';
import Premium from './components/Premium';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';
import './utils/variables.css';

function App() {
  const [ close, setClose ] = useState(false);
  
  return (
    <div className="App">
      {
        !close &&
        <Premium
          close={close}
          setClose={setClose}
        />
      }
      <Header/>
      <Page close={close}/>
      <Footer close={close}/>
    </div>
  );
}

export default App;
