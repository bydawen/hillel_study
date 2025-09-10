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
            const orderDelivery = document.querySelector('.order-delivery');
            orderDelivery.innerHTML = `
              <h2>
                  Вкажіть деталі доставлення
              </h2>
              <div class="form-group">
                  <label for="username">
                      Ваше Прізвище, Ім'я, По батькові
                  </label>
                  <input class="form-field" type="text" name="username" id="username" placeholder="ПІБ" required>
              </div>
              <div class="form-group">
                  <label for="city">
                      Місто
                  </label>
                  <select name="cities" id="city" required>
                      <option value="" disabled selected>Оберіть місто...</option>
                      <option name="city" value="Kharkiv">
                          Kharkiv
                      </option>
                      <option name="city" value="Kyiv">
                          Kyiv
                      </option>
                      <option name="city" value="Lviv">
                          Lviv
                      </option>
                      <option name="city" value="Lviv">
                          Odesa
                      </option>
                      <option name="city" value="Poltava">
                          Poltava
                      </option>
                  </select>
              </div>
              <div class="form-group">
                  <label for="post">
                      Вкажіть склад Нової пошти для відправки
                  </label>
                  <input class="form-field" type="number" name="post" id="post" placeholder="Нова пошта № складу" min="1" required>
              </div>
              <div class="form-group">
                  <label>
                      Накладений платіж чи оплата на рахунок?
                  </label>
                  <div class="form-radio-holder">
                    <label for="onDelivery">
                        Накладений платіж
                        <input class="form-radio" id="onDelivery" type="radio" name="payment" value="Накладений платіж" required>
                    </label>
                    <label for="onPayment">
                        Оплата на рахунок
                        <input class="form-radio" id="onPayment" type="radio" name="payment" value="Оплата на рахунок" required>
                    </label>
                  </div>
              </div>
              <div class="form-group">
                  <label for="quantity">
                      Кількість одиниць товару
                  </label>
                  <input class="form-field" id="quantity" type="number" name="quantity" value="1" min="1">
              </div>
              
              <div class="form-group">
                  <label for="comment">
                      Коментар до замовлення
                  </label>
                  <textarea name="comment" id="comment" cols="30" rows="5" placeholder="Напишіть коментар" required></textarea>
              </div>
              <button type="button" id="btnSubmitOrder">
                  Оформити замовлення
              </button>
            `;
          }

          const btnSubmitOrder = document.getElementById('btnSubmitOrder');

          btnSubmitOrder.addEventListener('click', event => {
            const orderDetails = document.querySelector('.order-details');

            const orderDeliveryForm = document.getElementById('orderDelivery');
            const orderUserName = orderDeliveryForm.username.value;
            const orderCitySelect = orderDeliveryForm.cities;
            const orderCityOption = orderCitySelect.options[orderCitySelect.selectedIndex].text;
            const orderPost = orderDeliveryForm.post.value;
            const orderPayment = orderDeliveryForm.payment.value;
            const orderQuantity = orderDeliveryForm.quantity.value;
            const orderComment = orderDeliveryForm.comment.value;

            let UAletters = "А-Яа-яІіЇїЄєҐґ";
            let namePattern = new RegExp(
              `^[${UAletters}][${UAletters}']+\\s[${UAletters}][${UAletters}']+\\s[${UAletters}][${UAletters}']+$`
            );
            let postPattern = /.{3,}/;
            let commentPattern = /^\p{L}{3,}$/u;

            let errors = "";

            if (!orderUserName || !namePattern.test(orderUserName)) {
              errors += "<p>Будь ласка, заповніть коректно ПІБ (Прізвище, Ім’я, По батькові) українською мовою !!!</p>";
            }

            if (orderCitySelect.selectedIndex === 0) {
              errors += "<p>Будь ласка, оберіть місто !!</p>";
            }

            if (!orderPost || !orderPost.match(postPattern)) {
              errors += "<p>Будь ласка, вкажіть номер нової пошти ! <br> Мінімум 3 цифри!! </p>";
            }

            if (!orderPayment) {
              errors += "<p>Будь ласка, оберіть один з методів оплати !! </p>";
            }

            if (!orderComment || !orderComment.match(commentPattern)) {
              errors += "<p>Будь ласка, напишіть комментар <br> мінімум 3 символи і тільки літери !!! </p>";
            }

            if (errors) {
              orderDetails.innerHTML = `
                <div class="error">
                  ${errors}
                </div>
              `;
            } else {
              orderDetails.innerHTML = `
                <p>
                    Ви купили <b>${product.name}</b>, дякуємо!
                </p>
                <table>
                  <tr>
                    <th>Замовлення оформлено на:</th>
                    <td style="padding: 5px;">${orderUserName}</td>
                  </tr>
                  <tr>
                    <th>Місто:</th>
                    <td style="padding: 5px;">${orderCityOption}</td>
                  </tr>
                  <tr>
                    <th>Склад Нової пошти:</th>
                    <td style="padding: 5px;">${orderPost}</td>
                  </tr>
                  <tr>
                    <th>Форма платежу:</th>
                    <td style="padding: 5px;">${orderPayment}</td>
                  </tr>
                  <tr>
                    <th>Кількість:</th>
                    <td style="padding: 5px;">${orderQuantity}</td>
                  </tr>
                  <tr>
                    <th>Коментар:</th>
                    <td style="padding: 5px;">${orderComment}</td>
                  </tr>
                </table>
            `;
            }
          });
        });
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