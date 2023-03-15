import axios from 'axios';
import { Config } from 'Config';

const {SiteURL, Port} = Config;

export const validateUser = async(email: string, password: string) => {
    const data = {
        email: email,
        password: password
    };
    axios.post(`${SiteURL}:${Port}/users/validate`, data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
};

export const registerUser = async(fname: string, lname: string, password: string, email: string, phoneNum: string) => {
    const data = {
        fname: fname, 
        lname: lname, 
        password: password, 
        email: email, 
        phoneNum: phoneNum
    };
    axios.post(`${SiteURL}:${Port}/users/register`, data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
}
