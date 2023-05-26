const router = require('express').Router();


router.route('/:lang').get((req, res) => {
    switch (req.params.lang) {
        case 'es':
            msg = 'Hola Mundo!!';
            break;
        case 'en':
            msg = 'Hello World!!';
            break;
            case 'fr':
                msg = 'Bonjour Monde!!';
                break;
                default:
                    msg = 'Hallo Welt!!';
            break;
    }
    res.json({msg});
});
router.route('/').get((req, res) => {
    const r = req.body.a + req.body.b;
    res.json({r});
});
module.exports = router;