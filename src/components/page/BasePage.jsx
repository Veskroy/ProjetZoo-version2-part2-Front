import PropTypes from 'prop-types';
import Header from '/src/components/page/Header.jsx';
import Footer from '/src/components/page/Footer.jsx';

// props => {children}
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

BasePage.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

BasePage.defaultProps = {
    title: 'Bienvenue !',
    children: "",
}