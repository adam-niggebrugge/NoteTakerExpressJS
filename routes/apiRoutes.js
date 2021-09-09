const router = require('express').Router();

router.get('/notes', (req, res) => {
    //res.send("Hello Worlds!!"); //testing
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

module.exports = router;