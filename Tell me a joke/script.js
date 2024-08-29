const btnEL = document.getElementById("btn");
const jokeEL = document.getElementById("joke")

const apiKey = "qNINPXuFV2Gg+22U3dJxSQ==cKmy1fLhr45k9cpt";

const options = {
    method: "Get",
    headers : {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

        try {
            jokeEL.innerText = "Updating...";
            btnEL.disabled = true;
            btnEL.innerText = "Loading...";
            const response = await fetch(apiURL, options);
            const data = await response.json();
      
            btnEL.disabled = false;
            btnEL.innerText = "TELL ME A JOKE";
      
            jokeEL.innerText = data[0].joke;
            
        } catch (error) {
            jokeEL.innerText = "An error happened, try again later";
            btnEL.disabled = false;
            btnEL.innerText = "TELL ME A JOKE";
            console.log(error);
            
        }

     
}


btnEL.addEventListener("click", getJoke)