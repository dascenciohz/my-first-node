const { Router } = require('express');
const router = Router();
const Domain = require('../models/domainSchema');

// GET
router.get('/domain', async (req, res) => {
    const listDomain = await Domain.find();
    res.render('index', {
        listDomain
    });
});

// POST
router.post('/newdomain', async (req, res) => {
    const domain = new Domain(req.body);
    await domain.save();
    res.redirect('/domain');
});

module.exports = router;