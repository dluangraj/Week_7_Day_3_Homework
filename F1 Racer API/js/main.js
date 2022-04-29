// F1 Racer API
const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response.data)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

// create a constance to hold DOM elements
const DOM_Elements = {
    racers: '.racer-list'
}

// create Racer List HTML
const createRacer =  (position, givenName, familyName) => {
    const html = `<a href='#' class= 'list-group-item list-group-item-action list-group-item-light' id="${position}">${givenName} ${familyName}</a>`
    // paste list item on document
    document.querySelector(DOM_Elements.racers).insertAdjacentHTML('beforeend', html)
}

// create function to loop over racers and create each element
const loadData = async (season, round) => {
    const racerList = await getData(season, round);
    racerList.forEach(racer => createRacer(racer.position, racer.Driver.givenName, racer.Driver.familyName))
}

// clear the data
const clearData = () => {
    document.querySelector(DOM_Elements.racers).innerHTML = '';
}

// create form variable
const form = document.querySelector('#testDataForm')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let season = document.querySelector('#season').value
    let round = document.querySelector('#round').value
    loadData(season, round)
    // console.log(season.value) // way number one to grab input info
    // console.log(round.value)
})