import React from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = () => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>Profile</title>
            <link rel="stylesheet" href="css/StyleSheet.css" />

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            />

            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            />

            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </Helmet>
    );
};

export default HeadComponent;
