export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,

    //REMOVE after finish developing
    // token: "BQBGZ4b3KeRz-EiBYgMAp7WUxNQfcX1hE77h54z-C6Ts0iYUC7kmGXNLo3QOsNO7Z6SKTOfQ-fqX8CNs4ZwTHd7uL-rgX2qGPuDH1HfX3tFRg1qKA2F9oVwWj9TWJOuCYSXkE7IY6r64fhT2ileXjZ6u3zqoUUA5Ikshc4pjyI-H8kCcZAAb",
};

const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default: 
            return state;
    }
}

export default reducer;