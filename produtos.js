const searchInput =
document.getElementById('searchInput');

const productsContainer =
document.getElementById('productsContainer');

const showAllBtn =
document.getElementById('showAllBtn');

const allCards =
Array.from(document.querySelectorAll('.product-card'));



searchInput.addEventListener('keyup', ()=>{

  const filter =
  searchInput.value.toLowerCase();

  allCards.forEach(card=>{

    const title =
    card.querySelector('h3')
    .textContent
    .toLowerCase();

    if(title.includes(filter)){

      card.style.display = 'block';

    }else{

      card.style.display = 'none';

    }

  });

});



allCards.forEach(card=>{

  card.addEventListener('click', ()=>{

    productsContainer.innerHTML = '';

    const clone =
    card.cloneNode(true);

    clone.style.display = 'block';

    productsContainer.appendChild(clone);

  });

});



showAllBtn.addEventListener('click', ()=>{

  productsContainer.innerHTML = '';

  allCards.forEach(card=>{

    card.style.display = 'block';

    productsContainer.appendChild(card);

  });

});