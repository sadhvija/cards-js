const card=document.querySelector("div")
card.id="cardgirl"
card.innerHTML=`<img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"width="300">
<p>girl</p>
<button>click me</button>`
card.style.border="2px solid black"
card.style.display="inline-block"
card.style.backgroundColor="pink"
card.style.padding="20px"
card.style.marginBottom="10px"

const card1=document.querySelector("span")
 card1.id="card2"
 card1.innerHTML=`<img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"width="300px"height="70%">
 <p>Effiel tower</p>
 <button>click me</button>`
 card1.style.border="2px solid black"
 card1.style.display="inline-block"
 card1.style.backgroundColor="blue"
card1.style.padding="20px"


const newCard=document.createElement("span")
newCard.id="cardtree"
newCard.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrzkUP2rJ3U8o2fSlxLE7mDpny3xTBzwkLA&s"width="300">
<p>Butterfly</p>
<button>click me</button>`
newCard.style.border="2px solid black"
newCard.style.display="inline-block"
newCard.style.backgroundColor="green"
newCard.style.padding="20px"

document.body.appendChild(newCard)


const newCard1=document.createElement("div")
newCard1.id="card4"
newCard1.innerHTML=`<img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"width="300px"height="70%">
<p>tree</p>
<button>click me</button>`
newCard1.style.border="2px solid black"
newCard1.style.display="inline-block"
newCard1.style.backgroundColor="red"
newCard1.style.padding="20px"

document.body.appendChild(newCard1)

