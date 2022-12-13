const resultModel = require("../Models/resultModel")

const userResult = async (req, res)=>{
    try{
        let data = req.body;

        let {level_Id, user_Id, score, certificate_URl  } = data;

        let nData = await resultModel.create(data)

        res.send({data: nData})
    } catch(err){
        res.send({Error: err})
    }
}

const showResult = async(req,res)=>{
    try{
        let uId= req.params.uid
        console.log(uId)
        //let user = await userModel.find({id:user_Id})
        let scoreData = await resultModel.find({user_id:uId});
        //let levelscore = await resultModel.find(level);
        res.status(200).send({data:scoreData}); 
    }
    catch(err){
        res.status(501).send({Error: err})
    }
}

module.exports = { showResult, userResult};