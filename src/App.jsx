import { useEffect } from "react"
import testGetLoggedUser from "./services/api/WildWonderHub"
import BasePage from "./components/page/BasePage";

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
      <BasePage title={"Page de WWH"}>
      </BasePage>
    </>
  )
}

export default App
