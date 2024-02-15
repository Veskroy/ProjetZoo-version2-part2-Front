import PropTypes from 'prop-types';
import Header from '/src/components/page/Header.jsx';
import Footer from '/src/components/page/Footer.jsx';

// props => {children}
// eslint-disable-next-line react/prop-types
export default function BasePage({children}) {
    return (
        <>
        <Header>
        </Header>
            {children}
        <Footer>
        </Footer>
        </>
    )
}

BasePage.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

BasePage.defaultProps = {
    title: 'Bienvenue !',
    children: "",
}