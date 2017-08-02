
console.log(customers.results[0]);


let container=document.querySelector(".container");

let template = '';

for (var i = 0; i < customers.results.length; i++) {

// let template;
template += `<div class="profile1">`;

template += `<div class="photo"><img src=${customers.results[i].picture.large}></div>`;

template += `<div class="name">${customers.results[i].name.first} ${customers.results[i].name.last}</div>`;

template += `<div class="email">${customers.results[i].email}</div>`;

template += `<div class="address1">${customers.results[i].location.street}
              <p>${customers.results[i].location.city}, ${customers.results[i].location.state}
              ${customers.results[i].location.postcode}</p></div>`;

// template += `<div class="address2>${customers.results[i].location.city}</div>`;

// template += `<div class="address3">${customers.results[i].location.postcode}</div>`;

template += `<div class="id">${customers.results[i].id.value}</div>`;

template += `</div>`;
}

container.innerHTML = template;
