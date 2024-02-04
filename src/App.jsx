import { useEffect } from "react"
import testGetLoggedUser from "./services/api/WildWonderHub"

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

  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
