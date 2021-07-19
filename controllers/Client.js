import {Client} from '../model/model.js';

// @desc create new client
// @route POST /client
// @access private

export const createNewClient = async (req, res, next) => {
    const newClient = await Client.create({
        userName: 'Shreya',
        fullName: 'Nimit Savant',
        password: '12345678',
    });
    if(!newClient) {
        return res.status('400').json({success: false, message:'The client was not crated!'})
    }
    return res.status('200').json({message:'The client was created!'});
}
