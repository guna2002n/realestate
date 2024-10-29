import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import axios from "axios";
import { config } from "compile";
const axiosInstance=axios.create({
    baseURL:"https://api/oakberry"
})
axiosInstance.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem('token')
        if(token)
        {
            config.headers.Authorization=`Bearer ${token}`
        }
        console.log('config  '+config);
        
        return config
    },(error)=>{
        console.error('error   ',error)
        return Promise.reject(error)
    }
)

    axiosInstance.interceptors.response.use((response)=>{
        console.log('response  ',response);
        
        return response
    },
    (error)=>{
        if(error.response)
        {
            if(error.response.status===401)
            {
                console.error('unauthorized! Please Login ');
                window.location='/';
            }
        }else{
            console.error('Network error',error);
        }
        return Promise.reject(error)
    }
)