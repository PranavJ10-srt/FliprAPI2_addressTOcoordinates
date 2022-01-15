const express = require("express");
const app = express();
const https = require("https");
let url = "https://maps.googleapis.com/maps/api/geocode/<var>outputFormat</var>?<var>parameters</var>";

let arr = ["Plot No:1, Sadarpur, Sector-45, Noida, Uttar Pradesh 201303, India",
  "New Link Road, Behind Infinity Mall, Andheri West, Mumbai, Maharashtra 400053, India",
  "D-002, Sector 75 Road, Sector 75, Noida, Uttar Pradesh 201301, India",
  "Ambrahi Village, Sector 19 Dwarka, Dwarka, Delhi, 110075, India"
];


  apikey = "AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw";
  url="https://maps.googleapis.com/maps/api/geocode/json?address=Plot No:1, Sadarpur, Sector-45, Noida, Uttar Pradesh 201303, India&key="+apikey;
  //url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw" ;
  https.get(url, function(response) {
    console.log(response.statusCode);
    console.log(response["results"][0]["formatted_address"]);
//     response.on("data",function(data){
//       console.log(typeof data);
//            console.log(data.data.results[0]);
//       // console.log(response.data["results"]);
// // let details = JSON.parse(JSON.stringify(data.toString()));
// //
// // console.log(details["results"]["formatted_address"]);
//
// });
    //console.log(JSON.parse(response.toString()));

  });


app.listen(3000,function(req,res){
console.log("listening");
});

