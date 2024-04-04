import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Dropdown({ actions }) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="settings-action">
            <div className="settings-action__dropdown-btn" onClick={() => setShowDropdown(!showDropdown)}>
                <img src="../../../public/assets/images/icons/settings_icon.svg" alt="settings icon" className="responsive-icon settings-icon" />
            </div>
            <div className={`dropdown-menu ${showDropdown ? 'show' : 'hide'}`}>
                {actions.map((action, index) => (
                    <a key={index} className="dropdown-menu__links" href={action.path}>{action.label}</a>
                ))}
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    })).isRequired,
};