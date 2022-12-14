const userModel = require('../Models/userModel');

const creatUser = async (req, res)=>{
try {
    let data = req.body;

    let {uid, first_Name, last_Name, mobile_Number, email_id, linkedIN_url} = data;

    let dup_uid = await userModel.findOne({uid: uid})

    if(dup_uid) return res.status(401).send({status: false, msg:`user already exist with this uid: ${uid}`})

    let dup_mobile = await userModel.findOne({mobile_Number:mobile_Number});

    if(dup_mobile) return res.status(401).send({status: false, msg:`user already exist with this mobile-Number: ${mobile_Number}`})

    let dup_email = await userModel.findOne({email_id:data.email_id});

    if(dup_email) return res.status(401).send({status: false, msg:`user already exist with this Mail: ${email_id}`});
    //console.log(data)
    let nData = await userModel.create(data)

    if(Object.keys(nData).length === 0) return res.status(502).send({status: false, msg:`Data has not created in the DataBase due to error`})
    
    res.status(201).send({data: nData});
} catch (err) {
    console.log(err)
    res.status(501).send({error: err})
}
};

const fetch_user = async (req, res)=>{
    try{

        let uId = req.params.uid;

        //console.log(uId)

        let nData = await userModel.findOne({uid: uId});

        if(!nData) res.status(400).send({status: false, msg:`no user found with this uid: ${uId}`})

        
        res.status(200).send({data: nData});
    } catch(err){
        res.status(501).send({Error: err});
    }
}

module.exports = {creatUser, fetch_user}