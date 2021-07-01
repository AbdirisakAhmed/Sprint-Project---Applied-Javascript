// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://gabitimes.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// const myTopics = [
//     "javascript",
//     "bootstrap",
//     "technology",
//     "jquery",
//     "node.js"
// ]

axios.get("https://gabitimes.herokuapp.com/topics")
.then(response =>{
    
    tabMaker("All")
    
    const  newTabs = response.data.topics
    newTabs.forEach(topic => {
        tabMaker(topic)
    });
}).catch(err => {consolde.log(err)})



const topics = document.querySelector(".topics")
function tabMaker(data){
    const tab = document.createElement("div")

    tab.classList.add("tab")
    tab.setAttribute("data-topic", data)
    tab.textContent = data
    topics.appendChild(tab)

    return tab
}

topics.addEventListener("click", function(event){
    let targetedTopic = event.target.dataset.topic;
   console.log(targetedTopic)
    
    const cards = document.querySelectorAll(".card")
     cards.forEach(card => {
          card.style.display = "flex"
          if(card.dataset.subject !== targetedTopic){
            card.style.display = "none"
    }
    
    if (targetedTopic == "All"){
        card.style.display = "flex"
    }
     }) 
   
})

