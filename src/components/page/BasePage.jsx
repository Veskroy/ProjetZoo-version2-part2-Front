import PropTypes from 'prop-types';
import Header from '/src/components/page/Header.jsx';
import Footer from '/src/components/page/Footer.jsx';

// props => {children, title}
function BasePage({ children, className }) {
    return (
        <>
            <Header />
                {className === 'homepage' ? (
                    <div className={className}>
                        {children}
                    </div>
                ) : (
                    <div className={className}>
                        <div className="background-img" />
                        <div className="container-body-infos">
                            {children}
                        </div>
                    </div>
                )}
                
            <Footer />
        </>
    )
}

BasePage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

BasePage.defaultProps = {
    children: "",
    className: "",
};

export default BasePage;
