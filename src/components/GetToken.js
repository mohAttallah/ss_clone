const getUsernameFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return token;
    }
    return '';
};