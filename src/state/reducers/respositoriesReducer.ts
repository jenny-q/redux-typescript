interface RepositioriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

interface SearchRespositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRespositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRespositoriesErrorAction {
    type:  ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

type Action = SearchRespositoriesAction | SearchRespositoriesSuccessAction | SearchRespositoriesErrorAction

enum ActionType {
    SEARCH_REPOSITORIES = 'search_respositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_respositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_respositories_error'
}

const reducer = (
    state: RepositioriesState,
    action: Action
    ): RepositioriesState => {

    switch(action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: []};
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default reducer;