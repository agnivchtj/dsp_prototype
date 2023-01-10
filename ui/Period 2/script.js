let products = {
  data: [
    {
      productName: "A Couple Making Music, Cornelis Troost",
      category: "Happy",
      price: "dotdot",
      image: "happy-music-couple.jpg",
    },
    {
      productName: "Portrait of a couple, probably Isaac Abrahamsz Massa and Beatrix van der Laen, Frans Hals",
      category: "Happy",
      price: "this painting blah",
      image: "SK-A-133.jpg",
    },
    {
      productName: "The deranged piano playing, Willem Bartel van der Kooi, 1813 oil on canvas",
      category: "Happy",
      price: "dotdot",
      image: "SK-A-1065.jpg",
    },
    {
      productName: "Melancholie, Jozef Israels",
      category: "Sad",
      price: "dotdot",
      image: "SK-A-2595.jpg",
    },
    {
      productName: "Jeremiah lamenting the destruction of Jerusalem, Rembrandt van Rijn, 1630",
      category: "Sad",
      price: "dotdot",
      image: "SK-A-2606.jpg",
    },
    {
      productName: "Crucifixion with Mary, John, Mary Magdalene and a donor, anonymous, 1500 - 1530",
      category: "Sad",
      price: "dotdot",
      image: "SK-A-3276.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText =i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
//initializations
let searchInput = document.getElementById("search-input").value;
let elements = document.querySelectorAll(".product-name");
let cards = document.querySelectorAll(".card");
//loop through all elements
elements.forEach((element, index) => {
  //check if text includes the search value
  let category = cards[index].className
  //console.log(category)
  if (element.innerText.includes(searchInput.toUpperCase())) {
    //display matching card
    cards[index].classList.remove("hide");
  } 
  else if(category.toUpperCase().includes(searchInput.toUpperCase())){
    console.log(category)
   cards[index].classList.remove("hide");
  }
  else {
    //hide others
    cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};