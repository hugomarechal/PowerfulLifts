import React, {useState} from "react";
import mainIllustration from '../../public/images/illustration.png';
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";

const Home = () => {

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [isSignUpFormVisible, setIsSignUpFormVisible] = useState(false);

    const getLogin = () => {
        setIsLoginFormVisible(true);
    }

    const getSignUp = () => {
        setIsSignUpFormVisible(true);
    }

    const handleClose = (elemName) => {
        if (elemName === 'login') setIsLoginFormVisible(false);
        if (elemName === 'signup') setIsSignUpFormVisible(false);
    }

    return(
        <>
            <h1>Bienvenue sur Powerful Lifts</h1>
            <div className="main-container landing">
                <img className="illustration" src={mainIllustration}
                     alt="Un powerlifter heureux avec son coach"/>
                <div className="home-container">
                    <h2>Votre application personalisée pour la pratique du powerlifting et de la force athlétique</h2>
                    <div className="flex-container">
                        <h3>Veuillez vous connecter ou vous inscrire.</h3>
                        <div>
                            <button onClick={getLogin}>Se connecter</button>
                            <button onClick={getSignUp}>Créer un compte</button>
                        </div>
                    </div>
                </div>
            </div>
            {isLoginFormVisible && <Login handleClose={()=> handleClose('login')}/>}
            {isSignUpFormVisible && <SignUp handleClose={()=> handleClose('signup')}/>}
        </>
    )
}

export default Home;