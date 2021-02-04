import './App.css';


import {lazy, Suspense } from 'react';

const Slogan = lazy(() => import('./code-splitting/Slogan'));
const Rodape = lazy(() => import('./code-splitting/Rodape'));
const Logo = lazy(() => import('./code-splitting/Logo'));
const Loading = lazy(() => import('./code-splitting/Loading'));


// import Slogan from './code-splitting/Slogan';
// import Rodape from './code-splitting/Rodape';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Suspense fallback={ <img style={{width: "70px"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading..."/> }>
          <Logo/>
        </Suspense>

        <Suspense fallback={ <img style={{width: "70px"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading..."/> }>
          <Slogan />
        </Suspense>

        <Suspense fallback={ <img style={{width: "70px"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading..."/> }>
          <Rodape />
        </Suspense>
        <Suspense fallback={ <img style={{width: "70px"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading..."/> }>
          <Loading />
        </Suspense>
        
      </header>
    </div>
  );
}



export default App;
