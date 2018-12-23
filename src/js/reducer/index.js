const initialState = {
    data: [],
    totalPage: 0,
    inputValue : ''
};

const reduser = (state = initialState , action) => {
    switch (action.type) {
        case 'save' :
            return { ...state, data: action.payload };
        case 'totalPage' :
            return { ...state, totalPage: action.payload };

        case 'inputValue' :
            return { ...state, inputValue: action.payload };

        default:
            return state;
    }
};

export default reduser;