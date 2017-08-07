function displayName() {
    let data = JSON.parse(this.responseText);
    let list = '';

    data.results.forEach(function (person) {
        list += `<li>${person.name}</li>`;
    });

    container.innerHTML = list;
}