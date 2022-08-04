const express = require('express');
const routers = express.Router();
const {getPeople, postPeople, updatePeople, deletePeople} = require('../controller/people')


//style 11
routers.get('/',getPeople)


//style 2
routers.route('/').post(postPeople);

routers.route(':/id').put(updatePeople).delete(deletePeople);

module.exports = routers;