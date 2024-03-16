//import { Redirect, useLocation } from "wouter";
import { useEffect, useState } from "react";

import { useAccount, useCurrentUser } from "../hooks/getAccount"
import { getAllQuestions } from "../services/api/WildWonderHub";
import { extractPagination } from "../services/transformers/extractPagination";

import ErrorLogin from "../components/commons/ErrorLogin";
import Pagination from "../components/commons/Pagination";

import PropTypes from 'prop-types';
import QuestionList from "../components/forum/Questions";

export default function Forum({ page, setPage }) {

    const { isLoggedIn, errorLogin } = useAccount();
    const user = useCurrentUser();

    console.log('forum-user', user);
    console.log('forum-isLoggedIn', isLoggedIn);
    console.log('forum-errorLogin', errorLogin);

    const [forumData, setForumData] = useState([]);
    const [paginationData, setPaginationData] = useState(1);

    const togglePage = (number) => {
        setPage(number);
    }

    useEffect(() => {
        getAllQuestions(page).then((value) => {
            console.log(value);
            setForumData(value["hydra:member"]);
            setPaginationData(extractPagination(value["hydra:view"]));
        });
    }, [page]);

    useEffect(() => {
        console.log('forumData================', forumData);
        //console.log('pageData================', paginationData);
    }, [forumData, paginationData]);

    /*const [location, setLocation] = useLocation();
    
    if (!user || errorLogin) {
        setLocation('/');
    }*/

    return (
        <div className="forum">
            <h1 className="main-title green">Forum du Zoo de la Palmyre</h1>
            <p className="center mt-50 mb-50">
                Bienvenue sur le forum de notre Zoo ! Ici, vous pouvez poser toutes vos questions sur les animaux, les horaires, les tarifs, etc.
                <br />
                Vous pouvez également répondre aux questions des autres utilisateurs, et même liker les posts qui vous plaisent pour les mettre en avant.
                <br />
                Vous avez donc accès à vos posts et à vos posts favoris.
                <br />
                <br />
                Merci de respecter nos règles de bonne conduite.
            </p>
            {!user || errorLogin ? (
                <ErrorLogin />
            ) : (
                forumData === null || forumData.length === 0 ? (
                    <p>loading</p>
                ) : (
                    <>
                        <QuestionList page={page} data={forumData} togglePage={togglePage} />
                        <Pagination togglePage={togglePage} paginationData={paginationData} />
                    </>
                )
            )}
        </div>
    )
}

Forum.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired
}

Forum.defaultProps = {
    page: 1,
    setPage: () => {}
}
