import axios from "axios";

export const getAllProduct = async (search) => {
    let res = {}
    console.log('search',!!search)
    if(search.length > 0){
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all?filter=name&filter=${search}`)
    }else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`)
    }

    //const  res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`);
    return res.data;

}
export const getProductType = async (type) => {
    if (type) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all?filter=type&filter=${type}`)
        //const  res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`);
        return res.data;

    }
}
export const getDetailsProduct = async (id) => {


    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-details/${id}`)



    return res.data;

}
export const getAllType = async () => {


    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-type`)



    return res.data;

}