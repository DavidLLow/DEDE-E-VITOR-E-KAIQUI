const searchInput =
document.getElementById("searchInput");

const searchBtn =
document.getElementById("searchBtn");

const productsContainer =
document.getElementById("productsContainer");

const showAllBtn =
document.getElementById("showAllBtn");

const cards =
Array.from(document.querySelectorAll(".product-card"));





function searchProducts(){

  const filter =
  searchInput.value
  .trim()
  .toLowerCase();





  cards.forEach(card => {

    const title =
    card.querySelector("h3")
    .textContent
    .trim()
    .toLowerCase();





    if(title.includes(filter)){

      card.style.display = "block";

    }else{

      card.style.display = "none";

    }

  });

}





searchBtn.addEventListener(
"click",
searchProducts
);





searchInput.addEventListener(
"keyup",
searchProducts
);





cards.forEach(card => {

  card.addEventListener("click", (e)=>{

    if(
      e.target.classList.contains("buy-btn")
      ||
      e.target.classList.contains("cart-btn")
    ){
      return;
    }

    productsContainer.innerHTML = "";

    const clone =
    card.cloneNode(true);

    clone.style.display = "block";

    productsContainer.appendChild(clone);

  });

});





showAllBtn.addEventListener(
"click",
()=>{

  productsContainer.innerHTML = "";

  cards.forEach(card => {

    card.style.display = "block";

    productsContainer.appendChild(card);

  });





  searchInput.value = "";

});