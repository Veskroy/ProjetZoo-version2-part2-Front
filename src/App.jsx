import { useLocation } from "wouter";
import Router from "./routes";

import BasePage from './components/page/BasePage';
import UserProvider from "./context/user/UserProvider";

function App() {

  const [location] = useLocation();
  
  return (
    <>
      <UserProvider>
        <BasePage className={`${location === '/' ? 'homepage' : 'content'}`}>
          <Router />
        </BasePage>
      </UserProvider>
    </>
  )
}

export default App;
