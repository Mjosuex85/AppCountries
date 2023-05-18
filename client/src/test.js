import axios from "axios";

const DEV_HOST = import.meta.env.VITE_DEV_HOST

const access_token = localStorage.getItem('token')
console.log(access_token)

export const getStatusApi = () => {
    let info = ''
    console.log("PASA?")

    axios(`${DEV_HOST}/api/admin/Staus` , {
        headers: {
            'Authorization': access_token
        }
    })
    .then((res) => {
        info = res.data;
        console.log(" POR FIN????",info)
    })
    .catch(error => console.log(error))

    return info
};
