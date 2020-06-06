const storageKey = 'todoAppUser'

export const setUser = (details) => {
    localStorage.setItem('todoAppUser', details);
}

export const getUser = () => {
    const userDetails = localStorage.getItem('todoAppUser');
    const currentTime = Date.now();
    // user does not exist or login expired
    if(!!userDetails && (currentTime - 24*60*1000) > userDetails.loginTimestamp) {
        if(!!userDetails){
            localStorage.removeItem(storageKey);
        }
        return null;
    }
    return userDetails;
}