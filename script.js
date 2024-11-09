var pokedex = undefined
var pokeimage = undefined
alert("This site uses Puter.JS for AI functions, and you will be required to auth using puter. if you do not wish to do this, watch the demo video on the readme.")

function pokegen(name, description) {
    const container = document.getElementById('append');
    const cont = document.getElementById('append');
    var loading = document.getElementById("pokex")
    puter.ai.chat(`You are a pokemon game designer creating a new pokemon. What would you make the pokedex entry of a pokemon named ${name} which is described as ${description}. Please include only the pokedex entry and no stats such as weight, and no markdown.`).then((results)=>{
        pokedex = results
        console.log(pokedex)
    });
    puter.ai.txt2img(`A picture of a new pokemon called ${name} which is described as ${description}. Please make it look very professional and like existing pokemon designs, with no text in the image.`, false).then((image)=>{
        pokeimage = image;
        console.log(pokeimage)
        loading.innerHTML = "Your Pokemon has been generated, image and pokedex can be found below!"
        var dex = document.createElement('p');
        dex.innerHTML = pokedex
        dex.style = "margin-bottom: 3vh;"
        pokeimage.style = "margin-left: 40%"
        container.appendChild(dex);
        cont.appendChild(pokeimage);
    });
 
}

function generate() {
    var pokename = document.getElementById("name").value;
    var pokedesc = document.getElementById("desc").value;
    console.log(pokename)
    console.log(pokedesc)
    const poketext = document.createElement('p');
    poketext.id = "pokex"
    poketext.innerHTML = "Generating Pokemon. Please wait 30-60 seconds (depending on wifi speed)"
    poketext.style = "font-weight: bold;"
    const container = document.getElementById('append');
    container.innerHTML = ""
    container.appendChild(poketext);
    pokegen(pokename, pokedesc)
}