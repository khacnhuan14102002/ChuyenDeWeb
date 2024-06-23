import axios from "axios";
export const Login = async () => {


    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/sign-in`)



    return res.data;

}