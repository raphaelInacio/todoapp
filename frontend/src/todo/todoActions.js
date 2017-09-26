import axios from 'axios'

const URL = "http://localhost:3003/api/todos"

export const changeDescription = (event) => ({
    type: 'CHANGE_DESCRIPTION',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createAt`)
    return {
        action: 'TODO_SEARCHED',
        payload: request
    }
}