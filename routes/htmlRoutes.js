const path = require('path');
const router = require('express').Router();

// '/notes/ responds with the notes.html file
router.get('/notes', (req, res) => {
  //find the path dynamically regardles of the remote path set up on server, or locally
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET homepage for any routes specified. Order matters, wildcard must be last or it will take precedent.
router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);




module.exports = router;