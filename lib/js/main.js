const formContainer = document.querySelector(".form_container");
const mainTitle = document.querySelector("#main_title");
const story = document.querySelector("#story_result");
const titleInput = document.querySelector("#title_input");
const nounInput = document.querySelector("#noun");
const verbInput = document.querySelector("#verb");
const adjectiveInput = document.querySelector("#adjective");
const subimtButton = document.querySelector("#submit_button");

titleInput.addEventListener('keyup', function(){
    mainTitle.innerText = titleInput.value;
});

subimtButton.addEventListener('click', function(event){  //i love anon functions, 60% of the stress naming things is resolved :)
    if(nounInput.value == "" || verbInput.value == "" || adjectiveInput.value == "" || titleInput.value == "")  //chek for empty spase
    {
        alert("Please fill in all fields");
    }
    else
    {
        const storyString = "Last night I ate a " + nounInput.value + ", and today I just had to " + verbInput.value + ". What a "+ adjectiveInput.value +" day!";
        story.innerText = storyString;
    }
    formContainer.style.display = "none";
    event.preventDefault();
});