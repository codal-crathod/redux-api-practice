import axios from 'axios';

export const getUsers = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: 'GET_USERS', payload: response.data });
}

export const addUser = (user) => (dispatch) => {
    dispatch({ type: 'ADD_USER', payload: user });
}
