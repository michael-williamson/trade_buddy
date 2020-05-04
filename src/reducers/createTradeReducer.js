export default (state = {}, action) => {
    switch(action.type){
        case 'CREATE_TRADE':
            return {...action.payload};
        default:
            return state
    }
}