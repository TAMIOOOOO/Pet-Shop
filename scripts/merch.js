
renderingItems();
function renderingItems() {
    let itemHtml = '';

    items.forEach((items) => {

        itemHtml += `
        <div class="product-container">
      <div class="product-image-section"></div>
      <div class="product-details">
        <div class="product-name-section">Name: ${items.name}</div>
        <div class="product-price-section">Price: $${(items.price / 100).toFixed(2)}</div>
        <div class="product-cart-section"><button>Add to Cart</button></div>
      </div>
    </div>
        `;
    });
    document.querySelector(".products-grid-container").innerHTML = itemHtml;
}