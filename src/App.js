import React from 'react';
import './App.css';
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { lengthCharactersChange } from './redux/actions/changelenghtcharacters';

import Home from './screens/home';
import Character from './screens/character'
import ErrorPage from "./components/error";
import notfoundimage from './assets/404.png'
import DefaultLayout from './layouts/default';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { reducerMaster } from './redux/reducers/root-reducer'
import { ApolloProvider } from '@apollo/client'

import client from './client' 

let store = createStore(reducerMaster);
let persistor = persistStore(store)

const AppWrapper = () => { 

  /*
  const palindromo = cadena => {
    let normal = cadena.replace(/ /g, "").toUpperCase() 
    let reverse = cadena.replace(/ /g, "").toUpperCase().split("").reverse().join("")
    return normal === reverse
  }

  useEffect(() => {
    console.log(palindromo("perfume mio oim emufrep"))
  })
  */
  
  const mainRoutes = {
    path: '/',
    element: <DefaultLayout/>, 
    children: [
     {path: '/', element: <Home setlength={lengthCharactersChange} /> },
     {path: '/character/:id', element: <Character/> },
     {path: '*', element: 
      <ErrorPage  
        image={notfoundimage}
        title="404" 
        content="the page you requested does not exist"
      />
     },
    ],
  };

  const routing = useRoutes([ mainRoutes ]); 

  return routing

} 

export const App = () => {
  return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}> 
          <Router >
            <AppWrapper/> 
          </Router> 
        </ApolloProvider>  
      </PersistGate>
    </Provider>  
  )
}

