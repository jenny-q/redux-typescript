interface RepositioriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}
const reducer = (state: RepositioriesState, action: any) => {
    switch(action.type) {
        case 'search_respositories':
            return { loading: true, error: null, data: []};
        case 'search_respositories_success':
            return { loading: false, error: null, data: action.payload};
        case 'search_respositories_error':
            return { loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default reducer;