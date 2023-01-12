//NOTE: THE DEFAULT RESPONSE FROM THE API IS AN XML FILE. TO GET A JSON FILE, ADD "&fmt=json" to the end of the string 


/*Root/Endpoint*/
const endpointUrl = "https://musicbrainz.org/ws/2/";



/*
fetch('https://musicbrainz.org/ws/2/area/45f07934-675a-46d6-a577-6f8637a411b1?inc=aliases&fmt=json')
  .then((response) => response.json())
  .then((data) => 
    {

      console.log(data.name)
      
    });
*/


fetch('http://musicbrainz.org/ws/2/artist/Richard Paul Astley?inc=aliases+genres+tags+ratings&fmt=json')
.then((response) => response.json())
.then((data) => console.log(data));

   