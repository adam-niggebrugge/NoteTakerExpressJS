const path = require('path');
const router = require('express').Router();

// '/notes/ responds with the notes.html file

router.get('/notes', (req, res) => {
    //find the path dynamically regardles of the remote path.
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
