import PropTypes from 'prop-types';

export default function Dropdown({ actions }) {
  return (
    <div className="settings-action">
        <div className="settings-action__dropdown-btn">
            <img src="{{ asset('images/icons/settings_icon.svg') }}" alt="settings icon" className="responsive-icon settings-icon" />
        </div>
        <div className="dropdown-menu">
            {actions.map((action, index) => (
                <a key={index} className="dropdown-menu__links" href="{{ action.path }}">{action.label}</a>    
            ))}
        </div>
    </div>
  )
}

Dropdown.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape(
      {
        action: PropTypes.string,
        path: PropTypes.string,
      },
    )),
  };
  

Dropdown.defaultProps = {
    actions: []
};