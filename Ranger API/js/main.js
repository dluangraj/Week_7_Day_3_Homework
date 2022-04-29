const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// create a constance to hold DOM elements
const DOM_Elements = {
    rangers: '.ranger-list'
}

// create Ranger List HTML
const createRanger =  (id, name) => {
    const html = `<a href='#' class= 'list-group-item list-group-item-action list-group-item-light' id="${id}"><button class="btn btn-primary mx-3" onclick="showInfo()">${name}</button></a>`
    // paste list item on document
    document.querySelector(DOM_Elements.rangers).insertAdjacentHTML('beforeend', html)
}

// create function to loop over rangers and create each element
const loadData = async () => {
    const rangerList = await getData();
    rangerList.forEach(ranger => createRanger(ranger.id, ranger.name))
}

// clear the data
const clearData = () => {
    document.querySelector(DOM_Elements.rangers).innerHTML = '';
}

// show info
const showInfo = async () => {
    // const info = `this is astring`
    const rangerList = await getData();
    rangerList.forEach(ranger => {
        document.getElementById(`${ranger.id}`).insertAdjacentHTML('beforeend', `${ranger.color} ${Object.values(ranger)[3]} ${ranger.season}`)
    })
}