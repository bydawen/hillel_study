const showCategories = () => {
  const parent = document.querySelector('.categories');
  if (!parent) {
    return;
  }

  const categoriesList = document.createElement('ul');
  categoriesList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      const categoryId = event.target.getAttribute('data-category');
      // const category = getCategoryById(categoryId);
      const category = categories[categoryId];
      if (!category) {
        return;
      }
      // console.log(category);
      showProductsByCategory(category);

    }
  });

  Object.values(categories).forEach(category => {
    const element = document.createElement('li');
    element.textContent = category.name;
    element.setAttribute('data-category', category.id);

    // element.addEventListener('click', () => {
    //   console.log(category);
    // });

    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
}

// const getCategoryById = id => categories.find(category => category.id == id);

const showProductsByCategory = category => {
  // const { products } = category; те саме, що і нижче
  const products = category.products;
  const parent = document.querySelector('.products');
  if (!parent) {
    return;
  }

  parent.innerHTML = '';

  const productsList = document.createElement('ul');

  productsList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      console.log(event.target);
      // const categoryId = category.id
      const categoryId = event.target.getAttribute('data-category');
      const productId = event.target.getAttribute('data-product');

      // self-practice
      const category = categories[categoryId];
      if (!category) {
        return;
      }

      const product = category.products.find(item => item.id == productId);
      if (!product) {
        return;
      }

      const infoContainer = document.querySelector('.info');
      if (infoContainer) {
        infoContainer.textContent = product.description;

        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Buy this product';
        buyBtn.setAttribute('data-category', category.id);
        buyBtn.setAttribute('data-product', product.id);
        buyBtn.type = 'button';

        infoContainer.appendChild(buyBtn);

        infoContainer.addEventListener('click', event => {
          if (event.target && event.target.tagName === 'BUTTON') {
            const orderDetails = document.querySelector('.order-details');

            orderDetails.innerHTML = `Ви купили <b>${product.name}</b>, дякуємо!`;
          }
        });
        // END self-practice
      }
    }
  });

  products.forEach(product => {
    const element = document.createElement('li');
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category.id);
    // element.addEventListener('click', () => {
    //   console.log(product);
    // })
    productsList.appendChild(element);
  });

  parent.appendChild(productsList);
}


showCategories();