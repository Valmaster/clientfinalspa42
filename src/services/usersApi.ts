import axios from 'axios';
import {User} from '../interface/user/User';

export function register(user: User) {
    return axios.post('http://localhost:3000/users/signup', user);
}
