function checkTokenInLocalStorage() {
    const token = window.localStorage.getItem('token');

    return token;
}

export default checkTokenInLocalStorage;
