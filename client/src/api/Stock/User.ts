import axios from 'axios';
import { response } from 'express';

export const validateUser = async(email: string, password: string) => {
    const response = await axios(`http://localhost:8080/users/validate`);
    console.log(response);

    return response;
};

export const registerUser = async(fname: string, lname: string, password: string, email: string, phoneNum: string) => {
    const response = await axios(`http://localhost:8080/users/register`);
    console.log(response);

    return response;
}
