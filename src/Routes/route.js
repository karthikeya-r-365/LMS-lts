const express = require('express')
const router = express.Router();

const levelControler = require("../Controlers/levleController")
const qnControler = require("../Controlers/questionControler")
const ansControler = require('../Controlers/answerControler')
const userController = require('../Controlers/userControler')
const resultController = require("../Controlers/resultControler")



//...........................{User Routes}.............................//

//creating the user
router.post('/api/create-user-info', userController.creatUser);  //changed the api name //working

//fetching the user with uId in path params
router.get('/api/get-user-info/:uid', userController.fetch_user);  //changed the api name  //workiong 


//....................{Level routes}...................................//

//create new level 
router.post('/api/create-level', levelControler.createLevel); //changed the api name //working


//get all levels in the dataBase
router.get('/api/get-levels', levelControler.getLevel); //changed the api name //working



//........................................{ questions routes }.............................//


//route to create with qn and ans, means we wil give both qn with answer but will create seperartly in its own models.
router.post("/api/create-question", qnControler.createQuestinsWithAnswer); //changed the api name //


router.get('/api/get-question/:qid', qnControler.getQuestionByID); //changed the api name  // working

//route to get level specifc questiouns from the data base.
router.get('/api/get-questions/:levelid', qnControler.getQuestions_by_levelID) //changed api name //working

//route to get level specific limited number of questions from database.
router.get("/api/get-questions-limit/:levelid", qnControler.getQuestion_by_levelId_limit) //changed the api name //working


//route to insert multiple questions and answer at a time.
router.post("/api/insert-all-questions", qnControler.insertMany)




//...............................{answers routes}............//

router.get("/api/get-answer/:qid", ansControler.check); //changed the api name //working


//.................{result routes}.................//
router.post('/api/create-result', resultController.userResult);  //changed the api name //working

router.get('/api/get-results/:uid', resultController.showResult); //changed the api name //working


module.exports = router