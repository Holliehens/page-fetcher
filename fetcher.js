const request = require('request');
const fs = require('fs');
const params = process.argv.splice(2);
console.log('params:..... ', params);

request(params[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  fs.writeFile(params[1], body, function (err) {
    if (err) throw err;
    const stats = fs.statSync(params[1]);
    console.log('stats: ....', stats);
    console.log(`Downloaded and saved ${stats.size} bytes to ${params[1]}`);
  })
  
});