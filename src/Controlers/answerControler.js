
const ansModel = require('../Models/answerModel');


let check = async (req, res)=>{
    try{

        let qn_id = req.params.qid;

        //let {qn_id } = data;

        let ansData = await ansModel.findOne({question_id:qn_id});

        let rp = {qn_id: ansData.question_id,
            answer: ansData.answer
         }

        res.status(200).send({data:rp})
            

    } catch(err){
        console.log(err)
        res.send({error: err})
    }
}


module.exports = {check} //, multiCheck}