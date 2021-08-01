import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider, extendTheme} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  custom:"1300px",
  xl: "1900px",
  "2xl": "96em",
})

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#fff",
        lineHeight: "tall",
      },
      
    },
  },
 breakpoints
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ChakraProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
