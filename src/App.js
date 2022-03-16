import React from "react";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Photos } from "./components/Photos";
import { Temp } from "./components/Temp"
import { Users } from "./components/Users";
import { Todos } from "./components/Todos";
import Navigation from "./components/Navigation";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Counter1 from "./comp/Counter1";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/navigation" element={<Navigation />}>


          </Route>
        </Routes>
      </BrowserRouter>,
      {/* <Header/>

<Temp/>
<Footer/>*/}
      {/* <Photos/>
<Todos/> */}
<Counter1/>
    </>
  )
};

export default App;