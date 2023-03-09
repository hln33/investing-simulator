import axios from 'axios';

export const validateUser = async(email: string, password: string) => {
    // const queryString = `?email=${email}&password=${password}`;
    // const response = await axios(`http://localhost:8080/users/validate/${queryString}`);
    // console.log(response);

    const data = {
        email: email,
        password: password
    };
    axios.post('http://localhost:8080/users/validate', data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });

    // return response;
};

export const registerUser = async(fname: string, lname: string, password: string, email: string, phoneNum: string) => {
    // const queryString = `?fname=${fname}&lname=${lname}&password=${password}&email=${email}&phoneNum=${phoneNum}`;
    // const response = await axios(`http://localhost:8080/users/register/${queryString}`);
    // console.log(response);

    const data = {
        fname: fname, 
        lname: lname, 
        password: password, 
        email: email, 
        phoneNum: phoneNum
    };
    axios.post('http://localhost:8080/users/register', data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });

    // return response;
}
