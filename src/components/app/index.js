import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import Footer from "../footer";
import Header from "../header";
import styles from './app.module.scss';

const { app, body, button: appButton } = styles;

function App() {

  const { amILoggedIn, logMeIn, logMeOut } = useContext(UserContext);

  const loggedInText = amILoggedIn() ? 'in' : 'out';

  return (
    <div className={app}>
      <Header text={`I am logged ${loggedInText} - header`} />
      <div className={body}>
        <button className={appButton} onClick={logMeIn}>Log In</button>
        <button className={appButton} onClick={logMeOut}>Log Out</button>
      </div>
      <Footer text={`I am logged ${loggedInText} - footer`} />
    </div>
  );
}

export default App;
