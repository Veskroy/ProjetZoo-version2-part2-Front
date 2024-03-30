import PropTypes from 'prop-types';
import {useState} from "react";

export default function AnimalCard({ animal, firstAnimal }) {
    console.log("card", animal, firstAnimal);
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="card-component animal-card">
            <div className="card-expand animal-card__content" onClick={() => setExpanded(!expanded)}>
                <div className="card__content-left">
                    <img src="assets/images/icons/paw-filled_icon.svg" alt="icon" className="basic-icon responsive-icon" />
                    <h3>{animal.name}</h3>
                </div>
                <div className="card__content-right">
                    <img src="assets/images/icons/arrow-state_icon.svg"
                         alt="icon"
                         className="basic-icon responsive-icon expanded-state-icon"
                         style={{ transform: expanded || firstAnimal ? 'rotate(0deg)' : 'rotate(180deg)' }}
                    />
                </div>
            </div>
            <div className={`animal-card__infos card-content-expanded ${firstAnimal || expanded ? '' : 'hidden'}`}>
                <ul className="infos-list">
                    <li><span className="keyword">Genre</span> : {animal.gender}</li>
                    <li><span className="keyword">Description</span> : {animal.description}</li>
                    <li><span className="keyword">Poids</span> : {animal.weight} g</li>
                    <li><span className="keyword">Taille</span> : {animal.size} cm</li>
                    <li><span className="keyword">Zone affectée</span> : {animal.pen}</li>
                </ul>
                <a href="" className="btn button-secondary full-width">
                    Voir l'emplacement de {animal.name}
                </a>
            </div>
        </div>
    )
}
