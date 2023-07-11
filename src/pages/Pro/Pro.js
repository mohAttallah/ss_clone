import React from 'react';
import checkTokenInLocalStorage from '../../components/IsLoggedIn';
import HeadComponent from './Head';

function Pro() {
    const isLoggedIn = checkTokenInLocalStorage();
    if (!isLoggedIn) window.location.href = '/';
    return (
        <div>
            <HeadComponent />
            {isLoggedIn ? (
                <div>
                    <h1>Welcome to My Component</h1>
                    {/* Other content */}
                </div>
            ) : <div>
                <h1>Should Login</h1>
                {/* Other content */}
            </div>}
        </div>
    );
}

export default Pro;




