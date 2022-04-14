    'use strict'
    
    const products = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
    ];

    const renderProductsItem = (item, img = "https://via.placeholder.com/200x150") => 
      `<div class="product-item" data-id="${item.id}">
                    <img src="${img}" alt=" img">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    <button class="by-btn">Добавить</button>
                </div>`;
    ;

    const renderProductsList = (list) => document.querySelector('.products').innerHTML = list
      .map((item) => renderProductsItem(item))
      .join("");
    

    renderProductsList(products);