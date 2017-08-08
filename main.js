
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
    <li>Name:<span> ${data.name}</span></li>
    <li>Github Url: <a href="https://github.com/evanCoakley">${data.html_url}</a></li>
    <li>Email: <span>lostandlaughing@gmail.com<span></li>
    <li>Company: <span>${data.company}</span></li>
    <li>Website: <a href=" https://github.com/evanCoakley">${data.blog}</a></li>
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