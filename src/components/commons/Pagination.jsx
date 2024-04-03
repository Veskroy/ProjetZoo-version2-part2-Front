import React from "react";

import PropTypes from 'prop-types';

// paginationData = current, first, previous?, next, last?
export default function Pagination({ paginationData, togglePage }) {

    if (paginationData === null) return (<></>);

    const config_numberPagesDisplayed = 2;

    const { current,
        first,
        last
    } = paginationData;

    const pages = [];

    for (let i = current - config_numberPagesDisplayed; i <= current + config_numberPagesDisplayed; i++) {
        if (i > 1 && i <= last - 1) {
            pages.push(i);
        }
    }

    return (
        <div className="pagination">
            <button className={`btn-pagination link-first ${current === first ? 'disabled cursor-not-allowed' : ''}`}
                onClick={() => togglePage(first)}
            >
                &lt;&lt;
            </button>

            <div className="pagination-data">

                <button className={`btn-pagination link-page ${current === 1 ? 'pagination-actual-number' : ''}`}
                    onClick={() => togglePage(first)}
                >
                    1
                </button>

                {(current - config_numberPagesDisplayed) - 1 > 1 && <span className="btn-pagination indicator">...</span>}

                {pages.map(pagedt => (
                    <React.Fragment key={pagedt}>
                        {current === pagedt ? (
                            <span className="btn-pagination pagination-actual-number">{pagedt}</span>
                        ) : (
                            <button
                                onClick={() => togglePage(pagedt)}
                            >
                                {pagedt}
                            </button>
                        )}
                    </React.Fragment>
                ))}

                {(current + config_numberPagesDisplayed) < last - 1 && <span className="btn-pagination indicator">...</span>}

                <button className={`btn-pagination link-page ${current === last ? 'pagination-actual-number' : ''}`}
                    onClick={() => togglePage(last)}
                >
                    {last}
                </button>

            </div>

            <button className={`btn-pagination link-last ${current === last ? 'disabled cursor-not-allowed' : ''}`}
                onClick={() => togglePage(last)}
            >
                &gt;&gt;
            </button>

        </div>
    )
}

Pagination.propTypes = {
    paginationData: PropTypes.object.isRequired,
    togglePage: PropTypes.func.isRequired
}

Pagination.defaultProps = {
    paginationData: null,
    togglePage: () => {}
}
