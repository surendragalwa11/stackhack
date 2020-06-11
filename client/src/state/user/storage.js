const storageKey = 'todoAppUser'

export const setUser = (details) => {
    details = {
        username: 'surendragalwa',
        email: 'surendra@gmail.com',
        loginTimestamp: Date.now(),
        token: 'sadhjsahdque123bndfbgmndfgkjrejterte'
    }
    localStorage.setItem('todoAppUser', JSON.stringify(details));
}

export const getUser = () => {
    const userDetails = JSON.parse(localStorage.getItem('todoAppUser'));
  console.log('user', userDetails);
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