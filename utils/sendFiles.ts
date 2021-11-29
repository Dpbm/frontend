import axios from "axios";

export default async function sendFiles(files:any){
    let bodyFormData = new FormData();
    files.forEach((file:any) => { bodyFormData.append('image', file) });
    const {data}:any = await axios.post(process.env.NEXT_PUBLIC_API_URL+'files', bodyFormData); 
   
    return data || [];
} 