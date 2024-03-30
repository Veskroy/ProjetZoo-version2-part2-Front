import { useEffect, useState } from "react"
import { getAllAnimals } from "../../services/api/WildWonderHub";
import { extractPagination } from "../../services/transformers/extractPagination";
import AnimalCard from "../../components/animal/AnimalCard";
import Pagination from "../../components/commons/Pagination.jsx";

export default function AnimalList() {
    
    const [animalsListData, setAnimalsListData] = useState([]);
    const [paginationData, setPaginationData] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        getAllAnimals(page, '').then((value) => {
            setAnimalsListData(value["hydra:member"]);
            setPaginationData(extractPagination(value["hydra:view"]));
        });
    }, [page]);

    const togglePage = (number) => {
        setPage(number);
        window.scrollTo(0, 0);
    }

    console.log(animalsListData, paginationData);
    console.log("first", animalsListData[0]);

    return (
        <>
            <div className="animal-infos">
                <h1 className="main-title green mt-50 mb-50">
                    Les animaux de notre zoo
                </h1>
                <img src="assets/images/img-animaux/zoo-2.png" alt="img animal" />
                <p className="presentation-pratical-infos__text mt-50 center">
                    Ici, vous pouvez retrouver tous les animaux de notre zoo.
                    <br />
                    Vous pouvez également consulter la liste des familles et des espèces.
                    <br />
                    <br />
                    Pour chaque animal, vous pouvez consulter sa fiche détaillée en cliquant dessus.
                    <br />
                    Vous pouvez également rechercher un animal par son nom !
                </p>
            </div>

            <div className="line line-mbc"></div>

            {/* todo - form de recherche sur le nom d'un animal */}

            <div className="list-animals">

                {animalsListData && animalsListData.map((animal, index) => {
                    return <AnimalCard key={index} animal={animal} firstAnimal={index === 0} />
                })}

                <Pagination togglePage={togglePage} paginationData={paginationData} />

            </div>

        </>
    )
}
