import PropTypes from 'prop-types';

export default function SearchBar({ labelSearch, placeholderInput, formSearch, setFormSearch, buttonSearch }) {

    return (
        <form className="mt-50" action="" method="GET">
            <div>
                <label htmlFor="search">
                    {labelSearch}
                </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder={placeholderInput}
                    value={formSearch}
                    onChange={(e) => setFormSearch(e.target.value)}
                />
                {buttonSearch && <button className="btn button-primary" type="submit">{buttonSearch}</button>}
            </div>
        </form>
    )
}

SearchBar.propTypes = {
    labelSearch: PropTypes.string,
    placeholderInput: PropTypes.string,
    formSearch: PropTypes.string.isRequired,
    setFormSearch: PropTypes.func.isRequired,
    buttonSearch: PropTypes.string
}

SearchBar.defaultProps = {
    labelSearch: "Rechercher",
    placeholderInput: "Rechercher...",
    formSearch: "",
    setFormSearch: () => {},
    buttonSearch: ""
}
