import axios from "axios";

const BASE_URL =  import.meta.env.VITE_APP_BASE_URL;

// console.log("BASE_URL = ", BASE_URL)

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(BASE_URL + url);

        // console.log(`data of This url ${url} is --> ${data}`);
        return data;

    } catch (err) {
        console.log(err);
        return err;
    }
};