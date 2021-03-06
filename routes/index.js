var express = require('express');
var router = express.Router();
var twitterRoute = require('./twitter');
var ibmRoute = require('./ibm');
var youtubeRoute = require('./youtube');

//Con el nombre de un usuario, analiza sus tweets, analiza via Alchemy y arma los resultados. Le avisa que le mandaran un mail con un codigo
router.get('/twitter',twitterRoute.analyze);

//Con el nombre de un usuario, analiza sus tweets y de los usuarios que sigue, analiza via Alchemy y arma los resultados. Le avisa que le mandaran un mail
router.get('/twitterWithFollowing',twitterRoute.analyzeFollowing);

//Para probar con resultados de prueba de Alchemy
router.get('/testProccess', ibmRoute.test);

//Sirve para ir agregando nuevas palabras clave a una categoria y darle mas o menos peso segun el puntaje del feedback
router.post('/feedback', ibmRoute.feedback);

//Obtiene los resultados de un codigo especifico
router.get('/result', ibmRoute.getResult);

//obtiene 5 videos de youtube relacionados a una fase o palabra
router.get('/youtube', youtubeRoute.busqueda);

//obtiene tweets destacados dado una palabra 
router.get('/buscarTweets', twitterRoute.buscarTweets);

//obtiene los usuarios de twitter que tienen gustos similares
router.get('/buscarTwitterUsers', twitterRoute.buscarTwitterUsers);

module.exports = router;
