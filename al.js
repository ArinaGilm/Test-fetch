let participants = document.querySelector(".about_test_participants-list");


fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach (user  => {
      let text = document.createElement("h2");
      text.innerHTML = user.name;
      participants.append(text);
      let email = document.createElement("p");
      email.innerHTML = user.email;
      participants.append(email);
      let street = document.createElement("p");
      street.innerHTML = user.address.street;
      participants.append(street);
      let suite = document.createElement("p");
      suite.innerHTML = user.address.suite;
      participants.append(suite);
      let city = document.createElement("p");
      city.innerHTML = user.address.city;
      participants.append(city);
    });
      
  });

let posts= document.querySelector(".about_test_posts-list");

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(messages  => {
        messages.forEach (msg => {
let title = document.createElement("div");
title.innerHTML = msg.title;
posts.append(title);
let post = document.createElement("div");
post.innerHTML = msg.body;
posts.append(post);
      });
    });
