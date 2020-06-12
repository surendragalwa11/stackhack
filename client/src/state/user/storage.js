const storageKey = 'todoAppUser'

export const setUser = (user) => {
    localStorage.setItem('todoAppUser', JSON.stringify(user));
}

export const getUser = () => {
    const userDetails = JSON.parse(localStorage.getItem('todoAppUser'));
    const currentTime = Date.now();
    // user does not exist or login expired 25hrs
    if(!!userDetails && (currentTime - userDetails.loginTimestamp) > 24*60*1000) {
        if(!!userDetails){
            localStorage.removeItem(storageKey);
        }
        return null;
    }
    return userDetails;
}