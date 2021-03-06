var app = require('express'),
    router = app.Router();

router.use('/1/classes/airportOther', require('./airport'));
router.use('/1/classes/airlineOther', require('./airline'));
router.use('/calculator', require('./calculate'));

module.exports = router;
