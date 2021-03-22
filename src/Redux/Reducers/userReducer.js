const initState = {
    authenticated : false,
    loading:false,
    credentials : {},
    requests : [],
    notifications : []
}

const userReducer = (state = initState, action) => {
    switch(action.type){
        case 'SET_AUTHENTICATED': 
            return{
                ...state,
                authenticated : true
            }

        case 'SET_UNAUTHENTICATED':
            return initState

        case 'SET_USER':
            return{
                authenticated : true,
                loading : false,
                ...action.payload
            }

        case 'LOADING_USER':
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
export default userReducer;