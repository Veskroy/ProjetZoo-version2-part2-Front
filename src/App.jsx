import { useState } from "react";
import { useLocation } from "wouter";

import UserProvider from "./context/user/UserProvider";

import BasePage from "./components/page/BasePage";
import Router from "./routes";


function App() {

  const [page, setPage] = useState(1);
  const [location] = useLocation();
  
  return (
    <>
      <UserProvider>
        <BasePage className={`${location === '/' ? 'homepage' : 'content'}`}>
          <Router page={page} setPage={setPage} />
        </BasePage>
      </UserProvider>
    </>
  )
}

export default App;
