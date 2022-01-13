import { Link } from "react-router-dom";

const TYPES = [
    "Aqua",
    "Beast-Warrior",
    "Cyberse",
    "Dinosaur",
    "Dragon",
    "Fairy",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Rock",
    "Warrior",
    "Spellcaster"
   ];

export default function Home() {
    return (
        <div className="container types_container">

            {
                TYPES.map((type, index) => {
                    return (
                        <div className="type" key={index}>
                            <Link className="anchor " to={`/cards/${type}`}>{type}</Link> 
                        </div>
                    )
                })

            }
           
        </div>
    )
}