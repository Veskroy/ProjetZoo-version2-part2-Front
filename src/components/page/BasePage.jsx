import PropTypes from 'prop-types';

// props => {title}
export default function BasePage({title}) {
    return (
        <html lang="fr">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{title}</title>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⚫️</text></svg>"></link>
            <link rel="stylesheet" href="" type="text/css"></link>
        </head>
        <body>
        <!-- Navbar -->

        <!-- Footer -->
        </body>
        </html>
    )
}

BasePage.PropTypes = {
    title: PropTypes.string.isRequired,
}

BasePage.defaultProps = {
    title: 'Bienvenue !',
}