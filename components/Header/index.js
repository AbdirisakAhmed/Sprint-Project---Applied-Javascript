// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">February, 28, 2021</span>
//    <h1>Gabi Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// Use this object for the component you created.
const newDate = new Date();
const headerContent = [
    {
        date: newDate.toDateString(),
        title: "Gabi Times",
        temp: "98°"
    }
];
function createHeader(myDate, myTitle, myTemp){
//Create Elements
const divHeader = document.createElement("div")
const headerDate = document.createElement("span")
const title = document.createElement("h1")
const temperature = document.createElement("span")

//Connect Elements

divHeader.appendChild(headerDate)
divHeader.appendChild(title)
divHeader.appendChild(temperature)

//Add Contents

headerDate.textContent = myDate
title.textContent =  myTitle
temperature.textContent =  myTemp


//Add ClassList

divHeader.classList.add("header")
headerDate.classList.add("date")
temperature.classList.add("temp")


return divHeader
}

const headerContainer = document.querySelector(".header-container")
let ourDate = headerContent[0].date
let ourTitle = headerContent[0].title
let ourTemp = headerContent[0].temp

headerContainer.appendChild(createHeader(ourDate, ourTitle, ourTemp))




