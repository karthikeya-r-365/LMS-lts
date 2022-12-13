const userModel = require('../Models/userModel');

const creatUser = async (req, res)=>{
try {
    let data = req.body;
    let {uid, first_Name, last_Name, mobile_Number, email_id, linkedIN_url} = data;

    let nData = await userModel.create(data)

    res.status(201).send({data: nData});
} catch (err) {
    res.send({error: err})
}
};

const fetch_user = async (req, res)=>{
    try{

        let uId = req.params.uid;

        console.log(uId)

        let nData = await userModel.findOne({uid: uId});

        if(!nData) res.status(400).send({status: false, msg:`no user found with this uid: ${uId}`})

        
        res.status(200).send({data: nData});
    } catch(err){
        res.status(501).send({Error: err});
    }
}

module.exports = {creatUser, fetch_user}