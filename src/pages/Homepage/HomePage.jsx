import {  Link } from "react-router-dom"
import {  Button  } from "@nextui-org/react";
import  ButtonLoginModale  from "./modales/login"
import ButtonSignupModale from "./modales/signup";
import "./homepage.scss"


function HomePage() {
    return (
        <div className="homepage">
            <div className="title-subtitle-and-button">
                <h1 className="homepage-title">KIDIMOT</h1>
                <h2 className="homepage-subtitle">L'appli de jeu qui rend l'apprentissage de la lecture amusant</h2>
                <Button size="xl"  color="gradient" auto className="button button-jouer" as={Link} to="/scene" >
                    Jouer
                </Button>
                
                <Button.Group className="button-group-box"   color="primary">
                    <ButtonLoginModale />
                    <ButtonSignupModale />
                </Button.Group>
        
            </div>

        </div>
    )
}

export default HomePage
