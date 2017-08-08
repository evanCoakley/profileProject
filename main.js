
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/evanCoakley");
req.addEventListener("load", reqListener);
req.send();


function reqListener() {
    let data = JSON.parse(this.responseText);

    const heading = `
    <h1>${data.name}</h1>
    `
    const basics = `
    <h2>The Basics</h2>
    <ul class="basics-list">
    <li>Name: ${data.name}</li>
    <li>Github Url: ${data.html_url}</li>
    <li>Email: lostandlaughing@gmail.com</li>
    <li>Company: ${data.company}</li>
    <li>Website: ${data.blog}</li>
    </ul>`
    const story = `
    <h2>The Story</h2>
    <div class="storycontent">
    <p>${data.bio}</p>
    <img src="${data.avatar_url}">
    </div>`





    document.querySelector("header").innerHTML = heading;
    document.querySelector(".basics").innerHTML = basics;
    document.querySelector(".story").innerHTML = story;

}