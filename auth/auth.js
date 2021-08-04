import {Client} from '../model/model.js'
export const auth = async (req, res) => {
    console.log('authing');
    const token = await req.headers.token;
    const userName = await req.params.userName;
    console.log(await req.url);
    const client = await Client.findOne({token, userName});
    if(client){
        return true;
    }
    else if(!client){
        return false;
    }
}
