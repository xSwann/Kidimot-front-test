import { Link } from "react-router-dom"
import { Button } from '@nextui-org/react';
import './scene.scss'

function Scene() {
    return (
        <div>
            <Button color="gradient" auto className="button button-scene" as={Link} to="/" >
            Revenir à l'accueil
            </Button>
            <h1>Future page de notre Scene</h1>

        </div>
    )
}

export default Scene
