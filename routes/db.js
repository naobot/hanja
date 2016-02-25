var express = require('express');
var router = express.Router();
var pg = require('pg');

/* GET characters database */
router.get('/', function(req, res, next) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM char_table', function(err, result) {
            done();
            if (err) {
                console.error(err);
                res.send("Error " + err);
            }
            else {
                res.render('pages/db', { results: result.rows });
            }
        });
    });
})

module.exports = router;
