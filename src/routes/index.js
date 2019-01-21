const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Message": "Wellcome to teddis API"});
    //res.render('index'); // No es necesaria la ruta a view ya que el sistema ya sabe donde esta.
});

module.exports = router;