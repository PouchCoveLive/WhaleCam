var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "WhaleCam",
    password: "Izanag1sBurd3n",
    database: "WhaleCam"
});

function getToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return today = yyyy + '-' + mm + '-' + dd;
    // var today = new Date.prototype.toLocaleDateString(); //May work just as well, untested
}

function addEmailToDB(email) {
    var today = getToday();
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO Notifications (email, date_added) VALUES ('" + email + "', '" + today + "')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Record Added");
            con.end();
        });
    });
}

// Returns results as a JSON String, you could JSON.parse and foreach to get the emails
function getAllEmailsFromDB(callback) {
    con.connect(function (err) {
        if (err) throw err;
        console.log('Connected!');
        var sql = "SELECT email FROM Notifications";
        con.query(sql, function (err, results, fields) {
            if (err) throw err;
            else {
                console.log("Records Retrieved");
                callback(results);
                con.end();
            }

        });
    });
}

function unsubscribe(email) {
    con.connect(function (err) {
        if (err) throw err;
        console.log('Connected!');
        var sql = "DELETE FROM Notifications WHERE email = '" + email + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " Records Deleted");
            con.end();
        });
    });
    
}

export {addEmailToDB, getAllEmailsFromDB, unsubscribe}

// Testing...

// console.log("Adding Email...");
// addEmailToDB("lukedavidkelly@gmail.com");

// console.log("Retrieving Emails...");
// getAllEmailsFromDB(function(res) {
//     console.log(res);
// });

// console.log("Deleting Email...")
// unsubscribe("lukedavidkelly@gmail.com");
