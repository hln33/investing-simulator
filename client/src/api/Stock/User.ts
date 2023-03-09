import axios from 'axios';

export const validateUser = async(name: string, password: string) => {
    const response = await axios(`http://localhost:8080/users/validate`);
    console.log(response);

    return response;
};
