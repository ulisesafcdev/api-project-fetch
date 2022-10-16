const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
const $productContainer = document.querySelector(".product-container");

fetch("https://fakestoreapi.com/products")
  .then(res => (res.ok) ? res.json() : Promise.reject(res))
  .then(data => {
    console.log(data);
    data.forEach(e => {
      $template.querySelector("#link-img").setAttribute("src", e.image);
      $template.querySelector("#title").textContent = e.title;
      $template.querySelector("#category").textContent = e.category;
      $template.querySelector("#precio").textContent = `$ ${e.price}`;
      $template.querySelector("#description").textContent = e.description;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    })

    $productContainer.appendChild($fragment);
  })
  .catch(err => {
    console.log(err);
  });