

const levelModel = require("../Models/levlModel");

const createLevel = async (req, res)=>{
    try{
    let data = req.body;
    let {level_num, level_disc} = data;

    let dup_level = await levelModel.findOne({level_num: level_num});

    if(dup_level) return res.status(401).send({status: false, msg:`Already a level had been created with this number: ${level_num}`})

    let nData = await levelModel.create(data);
        //console.log(nData)
        if(Object.keys(nData).length === 0) return res.status(502).send({status: false, msg:`Data has not created in the DataBase due to error`})
    return res.status(201).send({data: nData})

    } catch(err){
        console.log(err)
        res.status(501).send({Error: err})
    }
}


const getLevel = async (req, res)=>{
    try{
        let nData = await levelModel.find()

        res.status(200).send({data: nData})
    } catch(err){
        res.status(501).send({Error: err})
    }
}

module.exports = {createLevel, getLevel}