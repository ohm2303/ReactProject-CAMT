import { useState, useEffect } from "react";

const useFetch = (url) => {

    const[data, setData] = useState([]);

    const getData =  async() => {

        const response = await fetch(url);
        const userData = await response.json();
        setData(userData);
    }

    useEffect(() => {
        getData();
    },[url]);

    return {data};
}

export default useFetch;
/*kanokwan
วิธีใช้งาน
const Api_Novel = `https://jsonplaceholder.typicode.com/users/1`;
const {data} = useFetch(Api_Novel); ใส่ลิ้งค์ที่ต้องจะfetch
*/