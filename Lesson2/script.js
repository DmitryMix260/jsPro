'use strict'

class ProductItem{
    constructor(id, title, price, img = "https://via.placeholder.com/200x150"){
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
    }

    renderProductsItem() {
        return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price} \u20bd</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`;
    }
}

class ProductList{
    constructor(){
        this.products = [];

        this._fetchProductList();
        this._render();
        this._sumProductList();
    }

    _fetchProductList(){
        this.products = [
            { id: 1, title: 'Shirt', price: 150 },
            { id: 2, title: 'Socks', price: 50 },
            { id: 3, title: 'Jacket', price: 350 },
            { id: 4, title: 'Shoes', price: 250 },
        ]
    }

    _render() {
        let listHtml = '';
        this.products.forEach(product => {
        const productsItem = new ProductItem(product.id, product.title, product.price);
        listHtml += productsItem.renderProductsItem();
        });
        document.querySelector('.products').innerHTML = listHtml;
        }

    _sumProductList() {
        console.log(this.products.reduce((acc, product) => acc + product.price, 0))
    }
}

const list = new ProductList();
