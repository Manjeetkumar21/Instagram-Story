const profile = [
    {
        name: "Iron Man",
        dp: "./DP/DP1.jpg",
        story: "./Stories/Story1.jpg"
    },

    {
        name: "DeadPool",
        dp: "./DP/DP2.jpg",
        story: "./Stories/Story2.jpg"
    },

    {
        name: "Thor",
        dp: "./DP/DP3.jpg",
        story: "./Stories/Story3.jpg"
    },

    {
        name: "Spider Man",
        dp: "./DP/DP4.jpg",
        story: "./Stories/Story4.jpg"
    },

    {
        name: "Groot",
        dp: "./DP/DP5.jpg",
        story: "./Stories/Story5.jpg"
    }
];

let content = ""

profile.forEach(function(element,idx){

    content+= `<div class="stories-box">
                    <div class="story">
                         <img id = "${idx}" src="${element.dp}" alt="Profile Picture">
                    </div>
                    <p class="username">${element.name}</p>
                </div>`

})

const stories = document.querySelector('.stories');
let dev = document.querySelector('.dev')

stories.innerHTML = content;

stories.addEventListener('click', function(event){
    
    document.querySelector(".full-screen").style.display = "block";
    document.querySelector(".full-screen").style.backgroundImage = `url(${profile[event.target.id].story})`;
    dev.style.display = "none"

    document.querySelector("#username").innerHTML = `${profile[event.target.id].name}`

    setTimeout(() => {
        document.querySelector(".full-screen").style.display = "none";
        document.querySelector("#username").innerHTML = "User's Name"
        dev.style.display = "block"
    }, 3000);

})