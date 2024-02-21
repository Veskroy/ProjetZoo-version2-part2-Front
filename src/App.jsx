import {useEffect, useState} from "react"
import testGetLoggedUser from "./services/api/WildWonderHub"
import BasePage from "./components/page/BasePage";
import Loading from "./components/commons/Loading.jsx";
import { useLocation } from "wouter";
import Router from "./routes";

import { testGetLoggedUser } from "./services/api/WildWonderHub"

import BasePage from './components/page/BasePage';

function App() {

  useEffect(() => {
    const testApiConnection = async () => {
      try {
        const response = await testGetLoggedUser();
        console.log('réponse API :', response);
      } catch (error) {
        console.error('erreur connexion API :', error);
      }
    };

    testApiConnection();
  }, []);

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return <Loading/>
  }

  const [location] = useLocation();
  console.log(location);
  
  return (
    <>
      <BasePage className={`${location === '/' ? 'homepage' : 'content'}`}>
        <Router />
      </BasePage>
    </>
  )
}

export default App;
