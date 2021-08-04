import {Client} from '../model/model.js';
import bcrypt from 'bcrypt';
// @desc create new client
// @route POST /client
// @access private
function makeid() {
    const length = 10;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export const createNewClient = async (req, res, next) => {
    let random = await makeid();
    const password = await req.body.password;
    const salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    console.log(hash);
    const newClient = await Client.create({
        userName: req.body.userName,
        password: hash,
        fullName: req.body.fullName,
        token: random,
    });
    if(!newClient) {
        return res.status('400').json({success: false, message:'The client was not crated!'})
    }
    return res.status('200').json({message:'The client was created!', data: {token: random}});
}

export const getClient = async (req, res, next) => {
    let token = await req.headers.token;
    if(token) {
        const client = await Client.findOne({token: req.headers.token});
        if(!client) {
            return res.status('404').json({success: false, message:'The client was not found!'});
        }
        return res.status('200').json({message:'The client was found!', data: client});
    }
    else if(!token){
        console.log('login');
        const { userName, password } = await req.body;
        const client = await Client.findOne({userName});
        if(!client) {
            console.log('The Client was not found please check your credentials and try again!');
            return res.status('401').json({success: false, data: 'The Client was not found please check your credentials and try again!'})
        }
        else if(client){
            const validPassword = await bcrypt.compare(password, client.password)
            if(validPassword == false) {
                return res.status('401').json({success: false, data: 'Incorrenct credentials please try again!'})
            }
        }
        return res.status('200').json({success: true, data: client})
    }
}

export const deleteClient = async(req, res, next) => {
    let token = await req.headers.token;
    if(!token) {
        return res.status('401').json({success: false, data: 'unauthaurized!'});
    }
    const deleteClient = await Client.findOneAndDelete({token});
    console.log(deleteClient);
    if(!deleteClient) {
        return res.status(400).json({ success: false, data: 'Client was not found' });
    }
    return res.status(200).json({success: true, data: 'Client was deleted successfully'});
}