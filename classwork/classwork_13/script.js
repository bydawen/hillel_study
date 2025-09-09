'use strict'

document.getElementById('btn_save').addEventListener('click', () => {
  const form = document.getElementById('form');

  const username = form.username.value;
  const surname = form.surname.value;
  const birthdate = form.date.value;

  const gender = form.gender.value;

  const city = form.cities.options[form.cities.selectedIndex].text;
  const address = form.address.value;

  const languages = [];
  for (let i = 0; i < form.language.length; i++) {
    if (form.language[i].checked) {
      languages.push(form.language[i].value);
    }
  }

  console.log(username, surname, birthdate, city, address, languages);

  const tableHTML = `
    <table>
      <tr>
        <td>Імʼя</td>
        <td style="padding: 5px;">${username}</td>
      </tr>
      <tr>
        <td>Прізвище</td>
        <td style="padding: 5px;">${surname}</td>
      </tr>
      <tr>
        <td>Дата народження</td>
        <td style="padding: 5px;">${birthdate}</td>
      </tr>
      <tr>
        <td>Стать</td>
        <td style="padding: 5px;">${gender}</td>
      </tr>
      <tr>
        <td>Місто</td>
        <td style="padding: 5px;">${city}</td>
      </tr>
      <tr>
        <td>Адреса проживання</td>
        <td style="padding: 5px;">${address}</td>
      </tr>
      <tr>
        <td>Володіння мовами</td>
        <td style="padding: 5px;">${languages}</td>
      </tr>
    </table>
  `;

  form.outerHTML = tableHTML;

});
