/**
 * Dummy / testing script for connecting to discoggs with the `disconnect`
 * package ( https://www.npmjs.com/package/disconnect ).
 *
 * Put configuration such as your user token as DISCOGS_TOKEN into
 * an `.env` file.
 */

require("dotenv").config();
var Discogs = require("disconnect").Client;

// Authenticate by user token
// This method uses a personal token and is only suitable for one-user
// applications (e.g. not for a webservice for many users)
// https://www.discogs.com/developers/#page:authentication
var dis = new Discogs(process.env.AGENT, {
  userToken: process.env.DISCOGS_TOKEN
});

function doQuery(whatQuery) {
    whatQuery.then(
    function(result) {
        console.log(result);
        // result.results.forEach(element => {
        // console.log("\n" + element.title + " id: " + element.id);
        // });
    },
    function(err) { console.error(err); });
}

var db = dis.database();

// Example 1
// Searching
// https://www.discogs.com/developers/#page:database,header:database-search
const queryType = 'album';
const query = "Dvorak & Suk: Sérénades tchèques";
db.search(query, {
  type: queryType
}).then(
  function(result) {
    console.log(result);
    result.results.forEach(element => {
      console.log("\n" + element.title + " id: " + element.id);
    });
  },
  function(err) {
    console.error(err);
  }
);


// Example 2
// Query a specific release
const releaseId = 7198263;
doQuery(db.getRelease(releaseId));
