import React, { useContext } from 'react';
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Home from './MainComponents/Home';
import ImageComp from './MainComponents/ImageComp';
import Wrapper from './Components/Wrapper';
import { ChanegeThemeContext } from './MainComponents/ThemeContext';


function App() {
  const [theme, setTheme] = useContext(ChanegeThemeContext)

  return (
    <Provider store={store} >
        <Wrapper className="appTheme" themeColor={theme} >
          <div className="App">
            <ImageComp />
            <Home />
          </div>
        </Wrapper>
    </Provider>

  );
}

export default App;
