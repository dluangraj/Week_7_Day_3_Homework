console.log(document.getElementsByTagName('h1')[0].innerHTML = 'Hola Mundo!')

colorButton = document.getElementById('color-button')

let colorChange = () => {
    let headerText = document.getElementsByTagName('h1')[0].innerHTML
    let headerTextClass = document.getElementsByTagName('h1')[0]
    headerTextClass.className != 'color-changed' ? headerTextClass.className = 'color-changed' : headerTextClass.className = ''
}

// set Event Listener to colorButton
colorButton.addEventListener('click', colorChange)

// add a button to the document
let button = document.createElement('button')
let buttonDisplay = document.createElement('h2')

button.innerHTML = 'SUPER CLICKABLE'
button.className = 'buttoney'
document.body.append(button)

button.addEventListener('mouseover', () => {
    buttonDisplay.innerHTML = 'Tell me something good...'
    document.body.append(buttonDisplay)
})

// grab my text
const source = document.querySelector('div.source')
source.addEventListener('copy', (event) => {
    console.log(event)
    const selection = document.getSelection()
    console.log(selection)
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault()
})

// add Event Listener to form
// create form variable
const form = document.querySelector('#testDataForm')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let first = document.querySelector('#first-name')
    let last = document.querySelector('#last-name')
    console.log(first.value) // way number one to grab input info
    console.log(last.value)
    // let lastName = event.path[1][0].value
    // console.log(last.value)
    // console.log(event)
})