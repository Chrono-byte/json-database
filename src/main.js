const fs = require('fs');
const ms = require('ms');
let db;

function setDB(path, db) {
    fs.readFile(path, 'utf8', function(err, data) {
        if(err) {
            fs.writeFileSync(path, JSON.stringify({}, null, 2))
        } else {
            return db = JSON.parse(data)
        }
        fs.writeFileSync(path, JSON.stringify(db, null, 2))
    })
}

module.exports = function() {
        return {
            store: db,
            start: function(path) {
                setInterval(function() {
                setDB(path, db)
            }, ms('5s'))},
            set: function(item, value) {
                db[item] = value
                if(db[item] === value) {
                    return `Success set ${item}'s data to ${value}`;
                } else {
                    return `Error! ${item} was not successfully set to ${value}`;
                };
            },
            get: function(item) {
                if(db[item] === '') {
                    return 'Item Empty'
                } else {
                return db[item]
            }
        }
    }
}