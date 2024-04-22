import { getCookie } from 'cookies-next';

const isLoggedin = () => {
const token = getCookie('token');
return token ? true : false;
}

export default isLoggedin;