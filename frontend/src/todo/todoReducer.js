const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        "_id": "59ba5eeef70aba0044fbb0ee",
        "description": "Ler Livro",
        "__v": 0,
        "createdAt": "2017-09-14T10:50:22.089Z",
        "done": false
    }, {
        "_id": "59ba5ef3f70aba0044fbb0ef",
        "description": "Estudar React",
        "__v": 0,
        "createdAt": "2017-09-14T10:50:27.781Z",
        "done": true
    }, {
        "_id": "59ba5efaf70aba0044fbb0f0",
        "description": "Tirar a reservista",
        "__v": 0,
        "createdAt": "2017-09-14T10:50:34.364Z",
        "done": false
    }]
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_DESCRIPTION':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state;
    }
};