function handleLogout() {
    localStorage.removeItem('token');
    return;
}
export default handleLogout;
