# FliprAPI2_addressTOcoordinates

QUESTION2 flipr:

Takes an array of addresses and returns the latitude and longitude .
Make another API which will serve a POST request accepts a JSON containing an
array of addresses.
* Get coordinates (Lat,Long) for the received addresses using Google Geocoding API
whose key[4] is provided.
* Make an array of objects with each object in the following format -
{
add: “address_here”,
location: [lat_here , long_here]
}
* A sample array of addresses is provided below for testing while development[5].
