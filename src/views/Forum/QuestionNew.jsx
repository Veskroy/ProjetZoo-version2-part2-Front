import { useUserToString } from "../../hooks/getAccount.js";
import BackLink from "../../components/commons/BackLink.jsx";
import PostQuestion from "../../components/forum/PostQuestion.jsx";
import {postQuestion} from "../../services/api/WildWonderHub.js";

export default function QuestionNew() {
    const userToString = useUserToString();

    const handlePostSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const title = e.target[0].value;
        const description = e.target[1].value;
        console.log(title, description);
        postQuestion(title, description).then((value) => {
            console.log(value);
        });
    }

    return (
        <>
            <BackLink to="/forum" label="Retour au forum" />
            <div className="question-new">

                <div className="container-question-new">
                    <h1 className="main-title mt-50">Créer un nouveau post</h1>
                    <div className="question-new__main-infos mt-50">
                        <h3>Bonjour, {userToString}</h3>
                        <p className="new__description">Afin de maximiser vos chances d'obtenir de l'aide,
                            essayez de décrire au mieux votre problème ou questionnement (n'écrivez pas des centaines de lignes).
                        </p>
                        <p className="new__description">
                            Lorsque votre post aura trouvé une réponse, pensez à le marquer comme résolu (en vous rendant sur votre post et en cliquant sur "Fermer le post"). Cela permettra aux autres utilisateurs de savoir que votre problème a été résolu.
                        </p>
                    </div>
                </div>

                <PostQuestion handlePostSubmit={handlePostSubmit} />

            </div>
        </>
    )
}
