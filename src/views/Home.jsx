import { Link } from "wouter";
import { useAccount, useRolesUser, useUserToString } from "../hooks/getAccount";
import { adminUrl } from "../services/api/WildWonderHub";

import Video from "../components/commons/Video";

import videoSinge from '../videos/singe.mp4';
import videoPingouins from '../videos/pingouins.mp4';

function Home() {
    const { userContext, isLoggedIn } = useAccount();
    const userToString = useUserToString();
    const { isAdmin } = useRolesUser();
    //console.log('user from home: ', userContext, isLoggedIn);

    return (
        <div className="presentation-base">

            <h1 className="main-title mt-50 mb-50 green">
                Bienvenue sur le site du Zoo de la Palmyre !
            </h1>

            {/* Carousel à implémenter */}

            <div className="presentation-content">
                <h3 className="presentation__title">Qu’est-ce-que le Zoo de la Palmyre ?</h3>

                <div className="presentation-infos mt-50">
                    <p className="presentation-infos__text">
                        Le Zoo de La Palmyre, situé sur la côte ouest de la France, est l'un des plus grands et des plus renommés
                        zoos d'Europe. Fondé en 1966, ce parc zoologique s'étend sur près de 18 hectares au cœur d'une magnifique
                        pinède. Il abrite une incroyable diversité d'animaux provenant des quatre coins du globe, offrant ainsi une
                        expérience immersive et éducative aux visiteurs de tous âges. Avec plus de 1 600 animaux appartenant à plus
                        de 115 espèces différentes (<Link className="link" href="/">que vous pouvez retrouver ici</Link>), le zoo s'engage activement dans la conservation et la préservation des espèces
                        menacées, tout en offrant des habitats spacieux et naturels pour le bien-être de ses résidents. En plus des
                        fascinantes rencontres animalières, les visiteurs peuvent également profiter de spectacles éducatifs,
                        d'aires de jeux et d'espaces de restauration au sein de ce véritable havre de biodiversité.
                        <br />
                        <br />
                        Pour toutes questions, n’hésitez pas à consulter notre <Link className="link" href="/">forum</Link> ou <Link className="link" href="/">nous contacter</Link> à notre adresse mail !
                    </p>
                    <img src="assets/images/img-animaux/suricates.png" alt="img animal" />
                </div>

                <div className="presentation-practical-infos mt-50">
                    <h3 className="presentation__title mb-50">Informations pratiques 🗺</h3>
                    <p className="presentation-pratical-infos__text center mt-50 mb-100">
                        Tournant le dos aux anciennes pratiques des parcs zoologiques, le parc met l'accent sur une amélioration
                        constante de la qualité de vie des animaux, et joue un rôle important dans la réintroduction dans leur
                        milieu naturel de certaines espèces menacées. Il joue également un rôle pédagogique auprès du visiteur
                        en l'informant sur la biologie et le comportement des espèces, ainsi qu'en le sensibilisant aux menaces
                        nécessitant de mettre en œuvre des mesures de conservation.
                    </p>

                    <Video video={videoSinge} controls={false} label="Rencontrez nos singes affamés ! 🐵" />

                    <div className="practical-infos__content mt-100 mb-100">
                        <div className="practical-infos__item">
                            <img src="assets/images/icons/home/hour_icon.svg" alt="hour icon" className="large-icon" />
                            <p className="practical-infos__text">
                                Notre zoo vous est ouvert toute l’année (jours fériés compris) de 9h à 19h du 1er avril au 30 septembre et de 9h à 18h le reste de l'année.</p>
                        </div>
                        <div className="practical-infos__item">
                            <img src="assets/images/icons/home/localisation_icon.svg" alt="price icon" className="large-icon" />
                            <p className="practical-infos__text">
                                Rendez-vous à l'adresse suivante : <i>6 Avenue de Royan, 17570 Les Mathes</i> pour pouvoir profiter pleinement de notre Zoo !
                            </p>
                        </div>
                        <div className="practical-infos__item">
                            <img src="assets/images/icons/home/price_icon.svg" alt="localisation icon" className="large-icon" />
                            <p className="practical-infos__text">
                            Le prix d'entrée sans réduction est de 20€.
                            <br />
                            Gratuite pour les enfants de moins de 3 ans, 12€ pour ceux âgés de 3 à 12 ans.
                            Les personnes en situation de handicap peuvent accéder au zoo au tarif de 14€. Les étudiants bénéficient d'un tarif réduit à 15€ tandis que les
                            seniors peuvent profiter de leur visite au tarif de 16€.
                            </p>
                        </div>
                    </div>

                    <Video video={videoPingouins} controls={false} label="Rencontrez nos pingouins, amateurs de plongée ! 🤿" />

                </div>

            <div className="presentation-content">

                <div className="presentation-user mb-100">
                    {(isLoggedIn && userContext && userContext.user) && (
                        <>
                            <h3>Bonjour, {userToString}</h3>
                            <p className="mt-50">N'hésitez pas à réserver un nouveau ticket pour notre Zoo ici, ou à consulter vos tickets déjà réservés ici !</p>
                            <p>Si vous avez la moindre question concernant le fonctionnement de notre Zoo, consultez notre forum ici et créez un post !</p>
                        </>
                    )}
                    {isAdmin && (
                        <Link className="btn button-admin" href={adminUrl}>Accès administratif</Link>
                    )}
                </div>
                
            </div>

        </div>

        </div>

    )
}

export default Home;
