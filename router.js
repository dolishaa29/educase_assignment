let express=require('express');
const { addSchool, listSchools } = require('./service');
let router=express.Router();

router.post('/addSchool',addSchool);
router.get('/listSchools',listSchools);

module.exports=router;