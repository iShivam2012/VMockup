import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Stats from "./Pages/Stats";
import Header from "./Components/Header";
import EmailDetails from "./Pages/EmailDetails";
import { useState } from "react";

function App() {
  const[data, setData] = useState()
  const emailDataHandler = (emaildata) =>{
    console.log("app ", emaildata)
    setData(emaildata);
  }

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact>
          <Redirect to="/mails" />
        </Route>
        <Route path="/mails" exact>
          <Home dataHandler={emailDataHandler}/>
        </Route>
        <Route path="/mails/:mailID">
          <EmailDetails data={data} />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
