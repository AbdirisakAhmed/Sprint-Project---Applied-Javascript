// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://gabitimes.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleMaker(head, authorImage, myName, articleTitle){
    //Create Elements
    const card = document.createElement("div")
    card.setAttribute("data-subject", articleTitle)
    const headLine = document.createElement("div")
    const divAuthor = document.createElement("div")
    const divImage = document.createElement("div")
    const imageContainer = document.createElement("img")
    const authorSpan = document.createElement("span")

    //Connect Elements
    card.appendChild(headLine)
    card.appendChild(divAuthor)
    divAuthor.appendChild(divImage)
    divImage.appendChild(imageContainer)
    divAuthor.appendChild(authorSpan)

    //Add TextContent
    headLine.textContent = head
    imageContainer.src = authorImage
    authorSpan.textContent = myName

    //Add ClassList
    card.classList.add("card")
    headLine.classList.add("headline")
    divAuthor.classList.add("author")
    divImage.classList.add("img-container")

    return card
}

const cardContainer = document.querySelector(".cards-container")

axios.get("https://gabitimes.herokuapp.com/articles")
.then(response => {
  object = response.data.articles
 

    const JS = object.javascript
    
  const myjs = "javascript"

    JS.forEach(item => {
         let head1 = item.headline
        let image1 = item.authorPhoto
        let name1 = item.authorName
   
      
   cardContainer.appendChild(articleMaker(head1, image1, name1,myjs ))
    })

    
    
   
})

.catch(err => {
    console.log(err)
})


//Bootstrap

axios.get("https://gabitimes.herokuapp.com/articles")
.then(response => {
  object = response.data.articles
 
    const bs= object.bootstrap
   
    bs.forEach(item => {
        let head2 = item.headline
        let image2 = item.authorPhoto
        let name2 = item.authorName
   
    const mybs = "bootstrap"
    cardContainer.appendChild(articleMaker(head2, image2, name2, mybs))


     
    })
   
    
    
})
.catch(err => {
    console.log(err)
})

//Technology

axios.get("https://gabitimes.herokuapp.com/articles")
.then(response => {
  object = response.data.articles
  

    const tech = object.technology
   
    tech.forEach(item => {
        let head3 = item.headline
        let image3 = item.authorPhoto
        let name3 = item.authorName
        const mytech = "technology"

    cardContainer.appendChild(articleMaker(head3, image3, name3,mytech))

     
    })
   
    
    
})
.catch(err => {
    console.log(err)
})

//Jquery


axios.get("https://gabitimes.herokuapp.com/articles")
.then(response => {
  object = response.data.articles
  

    const JQ= object.jquery
   
    JQ.forEach(item => {
        let head4 = item.headline
        let image4 = item.authorPhoto
        let name4 = item.authorName
   
    const myjq = "jquery"
    cardContainer.appendChild(articleMaker(head4, image4, name4, myjq))

     
    })
   
    
    
})
.catch(err => {
    console.log(err)
})

//Node

axios.get("https://gabitimes.herokuapp.com/articles")
.then(response => {
  object = response.data.articles
  

    const ND = object.node
   
    ND.forEach(item => {
        let head5 = item.headline
        let image5 = item.authorPhoto
        let name5 = item.authorName
        const mynode = "node"

    cardContainer.appendChild(articleMaker(head5, image5, name5, mynode))

     
    })
   
    
    
})
.catch(err => {
    console.log(err)
})

