const React = require("react");

const PlantForm = function(props) {

    // plant state
    let plant = "Bonsai";
 
    let water1 = false;
    let water2 = false;
    let water3 = false;
    let weather1= false;
    let weather2=false;
    let weather3 = false;
    let upkeep1 = false;
    let upkeep2 = false;
    let upkeep3= false;

    const changeIFormURL = (id) =>{
        // change <YOUR-API-KEY> to echoAR API key
        let url = "https://console.echoAR.xyz/arjs?key=<YOUR-API-KEY>&entry=" + id;
        console.log(url);
        // grab the iframe element from the html
        let iframe = document.getElementById("iframe");
        // change iframe source if valid plant is entered
        if(id != "") iframe.src = url;
    }
    
    const changeIFormShortURL = (url) =>{
        console.log(url);
        // grab the iframe element from the html
        let iframe = document.getElementById("iframe");
        // change iframe source if valid plant is entered
        if(url != "") iframe.src = url;
        
    }

    // On form submit
    const handleSubmit = (event) => {
        //go through form, and set the plant val
        let bonsaibool = document.getElementById("water2").checked && document.getElementById("weather2").checked && document.getElementById("upkeep3").checked;
        let moneybool = document.getElementById("water2").checked && document.getElementById("weather3").checked && document.getElementById("upkeep2").checked;
        let anthuriumbool = document.getElementById("water1").checked  && document.getElementById("upkeep1").checked && !document.getElementById("weather1").checked;
        let umbrellabool = document.getElementById("water3").checked ;
        let snakebool = (document.getElementById("water1").checked || document.getElementById("water2").checked)&& document.getElementById("weather1").checked ;
        let zzbool = document.getElementById("water1").checked && document.getElementById("weather1").checked && document.getElementById("upkeep3").checked;
        let orchidbool = document.getElementById("water2").checked && document.getElementById("weather2").checked && !document.getElementById("upkeep3").checked;
       
        if (bonsaibool)
        {
           plant="Bonsai";
        }
       if (moneybool)
        {
            plant = ("Money");
        }
        if (anthuriumbool)
        {
            plant=("Anthurium");
        }
        if (umbrellabool)
        {
            plant=("Umbrella");
        }
        if (snakebool)
        {
            plant=("Snake");
        }
        if (zzbool)
        {
            plant=("ZZ");
        }
        if (orchidbool)
        {
            plant=("orchid");
        }
        console.log(`The plant  is : ${plant}`);
        
        // switch url by short URL
        let information = getPlantBG(plant.toLowerCase());
        let variables = findplantInfo(plant.toLowerCase());
        let QRsrc = variables[0];
        let shortForm = variables[1];
        let facts = information[0];
        let readMore = information[1]

        //update html
        changeIFormShortURL(shortForm);
        document.getElementById("background").innerHTML = ` ${facts} `;
        document.getElementById("mylink").href = `${readMore}`
        document.getElementById("QRbox").src = `${QRsrc}`;
        event.preventDefault();
    }

    //{ACTION} FILL THIS IN WITH SHORTURL AND QRCODE URL
    const findplantInfo = (plantName) => {
        let shortURL = "";
        let QRImage = "app/QRCodes/";
        // Get info for each plant
        switch(plantName){
            case "money":
                QRImage = "[QRLINK]";
                shortURL = "[shortUrl]";
                break;
            case "anthurium":
                QRImage = "[QRLINK]";
                shortURL = "[shortUrl]";
            case "aloe":
                QRImage = "[QRLINK]";
                shortURL = "[shortUrl]";
                break;
            case "umbrella":
                QRImage = "[QRLINK]";
                shortURL = "[shortUrl]";
                break;
            case "bonsai":
                QRImage = "[QRLINK]";
                shortURL = "[shortUrl]";
                break;
            case "snake":
                QRImage = "[QRLINK]";
                shortURL = "[shortUrl]";
                break;
            case "orchid":
                QRImage = "[QRLINK]";
                shortURL = "[shortUrl]";
                break;
            case "zz":
                QRImage = "[QRLINK]";
                shortURL = "[shortUrl]";
                break;
            default:
                console.log("Not a plant");
                break;
        }
        return [QRImage, shortURL];
    }
    //You should not change this!
        const getPlantBG = (plantName) => {
            let plantStory = "";
            let infoLink = "";
            
            switch(plantName){
                case "money":
                    plantStory =  "You seem to be a great fit for a Chinese Money Plant! These plants like plenty of indirect sunlight and should be well watered once a week. They thrive in warmer climates, and can often multiply!";
                    infoLink = "https://gardenbeast.com/pilea-peperomioides-guide/";
                    break;
                case "anthurium":
                    plantStory = "Your plant is Anthurium! These plants thrive in slightly cooler environments, and they have lovely flowers! It is also known as the flamingo flower.";
                    infoLink ="https://www.gardeningknowhow.com/houseplants/anthurium/anthurium-care.htm";
                    break;
                case "aloe":
                    plantStory = "";
                    infoLink = "";
                    break;
                case "umbrella":
                    plantStory = "You got the Umbrella Palm! Native to Madagascar, the Umbrella Palm is a cousin of the papyrus plant. They do well with higher humidity, wet soil, and access to sunlight! ";
                    infoLink = "https://plants.ces.ncsu.edu/plants/cyperus-alternifolius/";
                    break;
                case "bonsai":
                    plantStory = "Your plant is the Bonsai! The smallest bonsai tree in the world could fit in the palm of your hand - and the most expensive is over 1.3 million dollars! Taking care of these plants is truly an art.";
                    infoLink = "https://www.bonsaiempire.com/basics/bonsai-care";
                    break;
                case "snake":
                    plantStory = "Native to southern Africa, snake plants can do well outdoors for warmer climates. However, they also make a great houseplant! Do not water too much, keep warm, and you'll have a great BUDdy for a while.";
                    infoLink = "https://www.almanac.com/plant/snake-plants#:~:text=Snake%20plants%20prefer%20bright%2C%20indirect,protect%20it%20from%20drafty%20windows.";
                    break;
                case "orchid":
                    plantStory = "You have the lovely orchid! There are over twice the number of orchid species as bird species - and every single one is beautifully unique. Start taking care of one soon! ";
                    infoLink = "https://www.aos.org/orchids/orchid-care.aspx";
                    break;
                case "zz":
                    plantStory = "You got the ZZ plant! These easy-going plants can go for many different watering cycles and amount of sun. They can also grow up to three feet!";
                    infoLink = "https://www.houseplantsexpert.com/zz-plant.html";
                    break;
                
                default:
                    console.log("Not a plant in our system");
                    break;
            }
             return [plantStory, infoLink];
        }

    return(
            //Form information!
            <form id = "myform" onSubmit={handleSubmit}>
                <label> Watering: </label>
                    <input
                        type="radio" 
                        id="water1" 
                        name = "group1"
                        value={water1}
                    />
                    <label for="water1">I always forget!</label>
                    <input
                        type="radio" 
                        id="water2" 
                        name = "group1"
                        value={water2}
                    />
                    <label for="water2">I'm right on time!</label>
                    <input
                        type="radio" 
                        id="water3"
                        name = "group1" 
                        value={water3}
                    />
                    <label for="water3">Wait, you can OVER water?</label>
                    <br /><br />
                <label> Weather: </label>
                    <input
                        type="radio" 
                        id="weather1" 
                        name = "group2"
                        value={weather1}   
                    />
                    <label for="weather1">Some like it hot. "Some" is me. </label>
                    <input
                        type="radio" 
                        id="weather2" 
                        name = "group2"
                        value={weather2}   
                    />
                    <label for="weather2">Temperate.</label>
                    <input
                        type="radio" 
                        id="weather3"
                        name = "group2" 
                        value={weather3}  
                    />
                    <label for="weather3">Lil chilly.</label>
                <br /><br />
                <label> Upkeep: </label>
                    <input
                        type="radio" 
                        id="upkeep1" 
                        name = "group3"
                        value={upkeep1} 
                    />
                    <label for="upkeep1"> Looking for botanical decor.  </label>
                    <input
                        type="radio" 
                        id="upkeep2" 
                        name = "group3"
                        value={upkeep2}  
                    />
                    <label for="upkeep2"> Something to take care of and watch grow! </label>
                    <input
                        type="radio" 
                        id="upkeep3"
                        name = "group3" 
                        value={upkeep3}   
                    />
                    <label for="upkeep3">A completely immersive hobby.</label>

                    <br />
                <input type="submit" value="Submit" />
            </form>             
    );
 }

module.exports = PlantForm;

