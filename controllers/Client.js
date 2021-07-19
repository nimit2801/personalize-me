import {Client} from '../model/model.js';

// @desc create new client
// @route POST /client
// @access private

export const createNewClient = async (req, res, next) => {
    let random = '123asd123';
    const newClient = await Client.create({
        userName: req.body.userName,
        password: req.body.password,
        fullName: req.body.fullName,
        token: random,
    });
    if(!newClient) {
        return res.status('400').json({success: false, message:'The client was not crated!'})
    }
    return res.status('200').json({message:'The client was created!', data: {token: random}});
}

export const getClient = async (req, res, next) => {
    const client = await Client.findOne({token: req.body.token});
    if(!client) {
        return res.status('404').json({success: false, message:'The client was not found!'});
    }
    return res.status('200').json({message:'The client was found!', data: client});
}
