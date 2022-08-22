import axios from "axios";

export const getMessage = async(user) => {
    const request = await axios.get('https://api.chucknorris.io/jokes/random');
    return request.data;
};