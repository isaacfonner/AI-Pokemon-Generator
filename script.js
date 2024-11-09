var pokedex = undefined
var pokeimage = undefined
function pokegen(name, description) {
    pokedex=puter.ai.chat(`You are a pokemon game designer creating a new pokemon. What would you make the pokedex entry of a pokemon named ${name} which is described as ${description}. Please include only the pokedex entry and no stats such as weight`)
    console.log(pokedex)
    puter.ai.txt2img(`A picture of a new pokemon called ${name} which is described as ${description}. Please make it look very professional and like existing pokemon designs`, false).then((image)=>{
        pokeimage = image;
    });
}