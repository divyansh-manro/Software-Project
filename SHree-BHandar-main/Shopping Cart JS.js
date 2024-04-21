window.onload = function () {
    // Function to get URL parameter by name
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Function to remove product from cart

    // Function to remove product from cart
    function removeProduct() {
        let productDiv = this.closest('.product');
        let price = parseFloat(productDiv.querySelector('.product-price').innerText.replace('Rs. ', ''));
        let quantity = parseInt(productDiv.querySelector('.product-quantity input').value);
        let totalPriceElement = document.getElementById('total-price');
        let totalItemsElement = document.getElementById('total-items');

        let totalPrice = parseFloat(totalPriceElement.innerText.replace('Rs. ', ''));
        let totalItems = parseInt(totalItemsElement.innerText);

        totalPrice -= price * quantity;
        totalItems -= quantity;

        // Set total saving to 0 regardless of whether items are removed or not
        let totalSaving = 0;

        totalPriceElement.innerText = 'Rs. ' + totalPrice.toFixed(2);
        totalItemsElement.innerText = totalItems;

        productDiv.remove();
    }



    // Get product details from URL parameters
    let productName = getUrlParameter('name');
    let productImage = getUrlParameter('image');
    let productQuantity = getUrlParameter('quantity');
    let productPrice = getUrlParameter('price');

    // Create product element
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');

    let productImg = document.createElement('img');
    productImg.src = productImage;

    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    let productNameElem = document.createElement('h3');
    productNameElem.classList.add('product-name');
    productNameElem.innerText = productName;

    let productPriceElem = document.createElement('h4');
    productPriceElem.classList.add('product-price');
    productPriceElem.innerText = productPrice;

    let productQuantityElem = document.createElement('p');
    productQuantityElem.classList.add('product-quantity');
    productQuantityElem.innerHTML = 'Qnt: <input value="' + productQuantity + '" name="">';

    let productRemoveElem = document.createElement('p');
    productRemoveElem.classList.add('product-remove');
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-trash-alt');
    let removeSpan = document.createElement('span');
    removeSpan.classList.add('remove');
    removeSpan.innerText = 'Remove';
    removeSpan.addEventListener('click', removeProduct);

    // Append elements
    productRemoveElem.appendChild(removeIcon);
    productRemoveElem.appendChild(removeSpan);

    productInfo.appendChild(productNameElem);
    productInfo.appendChild(productPriceElem);
    productInfo.appendChild(productQuantityElem);
    productInfo.appendChild(productRemoveElem);

    productDiv.appendChild(productImg);
    productDiv.appendChild(productInfo);

    document.querySelector('.products').appendChild(productDiv);

    // Initialize total price, total items, and total saving
    let totalPrice = parseFloat(productPrice.replace('Rs. ', ''));
    let totalItems = parseInt(productQuantity);
    let totalSaving = totalPrice;

    // Update total price, total items, and total saving elements
    let totalPriceElement = document.getElementById('total-price');
    let totalItemsElement = document.getElementById('total-items');

    totalPriceElement.innerText = 'Rs. ' + totalPrice.toFixed(2);
    totalItemsElement.innerText = totalItems;
};
