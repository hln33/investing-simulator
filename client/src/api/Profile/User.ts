import axios from 'axios';
import Cookies from 'js-cookie';
import { Config } from 'Config';

const { SiteURL, Port } = Config;

export const loginUser = async (email: string, password: string): Promise<boolean> => {
    const data = {
        email: email,
        password: password
    };

    const result: boolean = await axios.post(`${SiteURL}:${Port}/users/login`, data)
        .then(res => {
            if (res.data.success) {
                Cookies.set('token', res.data.token, { expires: 7, path: '/' });
                return true;
            }
            return false;
        })
        .catch(err => {
            console.error(err);
            return false;
        });

    return result;
};

export const verifyUser = async (token: any) => {
    const result: boolean = await axios.get(`${SiteURL}:${Port}/users/verify`, {
        headers: { Authorization: token },
    })
        .then((res) => {
            if (res.data.success) {
                return true;
            }
            return false;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });

    return result;
}

export const registerUser = async (firstName: string, lastName: string, password: string, email: string, phoneNumber: string) => {
    const data = {
        firstName,
        lastName,
        password,
        email,
        phoneNumber,
    };

    const result = await axios.post(`${SiteURL}:${Port}/users/register`, data)
        .then(res => {
            if (res.data.success) {
                return true;
            } else {
                return false;
            }
        })
        .catch(err => {
            console.error(err);
            return false;
        });

    return result;
}
