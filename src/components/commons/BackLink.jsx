import PropTypes from "prop-types";
import { Link } from "wouter";
import backIcon from "../../../public/assets/images/icons/back_icon.svg";

export default function BackLink({ to, label }) {
    return (
        <>
            <Link to={to} className="link mbc">
                <img src={backIcon} alt="back icon" className="basic-icon back-icon" />
                {label}
            </Link>
        </>
    );
}

BackLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

BackLink.defaultProps = {
    to: '',
    label: ''
};
