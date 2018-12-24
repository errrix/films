const initialState = {
    data: [],
    totalPage: 0,
    currentPage: 0,
    inputValue : ''
};

const reduser = (state = initialState , action) => {
    switch (action.type) {
        case 'save' :
            return { ...state, data: action.payload };

        case 'updateData' :
            return { ...state, data: state.data.concat(action.payload) };

        case 'totalPage' :
            return { ...state, totalPage: action.payload };

        case 'currentPage' :
            return { ...state, currentPage: action.payload };

        case 'inputValue' :
            return { ...state, inputValue: action.payload };

        default:
            return state;
    }
};

export default reduser;