const path = require('path');
const router = require('express').Router();

// GET Route for homepage
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// '/notes/ responds with the notes.html file
router.get('/notes', (req, res) => {
    //find the path dynamically regardles of the remote path set up on server, or locally
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/404.html'))
);

module.exports = router;