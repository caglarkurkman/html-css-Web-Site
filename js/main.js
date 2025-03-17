const tabs = document.querySelectorAll(".categories > *");
let selectedTab = document.querySelector(".categories > .selected-tab");

const products = document.querySelectorAll(".product");
const pizzas = document.querySelectorAll("[category-pizza]");
const desserts = document.querySelectorAll("[category-dessert]");
const pastas = document.querySelectorAll("[category-pasta]");
const burgers = document.querySelectorAll("[category-burger]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedTab.classList.toggle("selected-tab");
    selectedTab = tab;
    tab.classList.toggle("selected-tab");
    displayCards(tab.textContent.trim());
  });
});

function displayCards(tabTitle) {
  switch (tabTitle) {
    case "PİZZA":
      products.forEach((product) => {
        product.classList.add("display-none");
      });
      pizzas.forEach((item) => {
        item.classList.remove("display-none");
      });
      break;
    case "MAKARNA":
      products.forEach((product) => {
        product.classList.add("display-none");
      });
      pastas.forEach((item) => {
        item.classList.remove("display-none");
      });
      break;
    case "BURGER":
      products.forEach((product) => {
        product.classList.add("display-none");
      });
      burgers.forEach((item) => {
        item.classList.remove("display-none");
      });
      break;
    case "TATLI":
      products.forEach((product) => {
        product.classList.add("display-none");
      });
      desserts.forEach((item) => {
        item.classList.remove("display-none");
      });
      break;
    default:
      products.forEach((product) => {
        product.classList.remove("display-none");
      });
      break;
  }
}

/* Ürün sayfasına yönlendirici */

var loc = "test";
if (location.pathname.includes("shop")) {
  loc = "shop";
}
if (location.pathname.includes("menu")) {
  loc = "menu";
}
if (location.pathname.includes("product-category")) {
  loc = "category";
}
if (
  !location.pathname.includes("shop") &&
  !location.pathname.includes("menu") &&
  !location.pathname.includes("product-category")
) {
  loc = "home";
}
// var loc =
//   location.pathname.includes("shop") || location.pathname.includes("menu");
let isSale = false;
products.forEach((product) => {
  product.addEventListener("click", () => {
    let productChildrenCount = product.firstElementChild.children.length;
    productChildrenCount == 5 ? (isSale = true) : (isSale = false);

    let productImg, productName, productDesc, productPrice, productOldPrice;

    if (!location.pathname.includes("menu")) {
      //Kullanıcı Menü sayfasındaysa elementlerin children durumu değiştiğinden koşul kullanıyoruz.
      //Menü sayfasında değil. "Anasayfa" veya "Ürünler" sayfasında.
      switch (isSale) {
        case true:
          //İndirimli Ürün
          productImgPath =
            product.firstElementChild.children[1].firstElementChild.getAttribute(
              "src"
            );
          convertedProductImgPath = productImgPath
            .replace("../", "")
            .replace("../", "");
          productName = product.firstElementChild.children[2].textContent;
          productDesc = product.firstElementChild.children[3].textContent;
          productOldPrice =
            product.firstElementChild.children[4].firstElementChild.children[0]
              .textContent;
          productPrice =
            product.firstElementChild.children[4].firstElementChild.children[1]
              .textContent;

          localStorage.setItem("productImgPath", convertedProductImgPath);
          localStorage.setItem("productName", productName);
          localStorage.setItem("productDesc", productDesc);
          localStorage.setItem("productOldPrice", productOldPrice);
          localStorage.setItem("productPrice", productPrice);
          // loc
          //   ? (window.location.href = "../product/index.html")
          //   : (window.location.href = "./product/index.html");
          switch (loc) {
            case "home":
              window.location.href = "./product/index.html";
              break;
            case "shop":
              window.location.href = "../product/index.html";
              break;
            case "menu":
              window.location.href = "../product/index.html";
              break;
            case "category":
              window.location.href = "../../product/index.html";
              break;
          }
          break;
        case false:
          //İndirimsiz Ürün
          productImgPath =
            product.firstElementChild.children[0].firstElementChild.getAttribute(
              "src"
            );
          convertedProductImgPath = productImgPath
            .replace("../", "")
            .replace("../", "");
          productName = product.firstElementChild.children[1].textContent;
          productDesc = product.firstElementChild.children[2].textContent;
          productPrice =
            product.firstElementChild.children[3].firstElementChild.children[0]
              .textContent;

          localStorage.setItem("productImgPath", convertedProductImgPath);
          localStorage.setItem("productName", productName);
          localStorage.setItem("productDesc", productDesc);
          localStorage.setItem("productPrice", productPrice);
          switch (loc) {
            case "home":
              window.location.href = "./product/index.html";
              break;
            case "shop":
              window.location.href = "../product/index.html";
              break;
            case "menu":
              window.location.href = "../product/index.html";
              break;
            case "category":
              window.location.href = "../../product/index.html";
              break;
          }
          break;
      }
    } else {
      //Menü sayfasında
      var priceCount =
        product.firstElementChild.firstElementChild.children[1].lastElementChild
          .children.length;
      priceCount == 2 ? (isSale = true) : (isSale = false);
      switch (isSale) {
        //İndirimli Ürün
        case true:
          productImgPath =
            product.firstElementChild.firstElementChild.children[0].getAttribute(
              "src"
            );
          convertedProductImgPath = productImgPath
            .replace("../", "")
            .replace("../", "");
          productName =
            product.firstElementChild.firstElementChild.children[1]
              .firstElementChild.textContent;
          productDesc =
            product.firstElementChild.firstElementChild.children[1].children[1]
              .textContent;
          productOldPrice =
            product.firstElementChild.firstElementChild.children[1]
              .lastElementChild.firstElementChild.textContent;
          productPrice =
            product.firstElementChild.firstElementChild.children[1]
              .lastElementChild.lastElementChild.textContent;
          localStorage.setItem("productImgPath", convertedProductImgPath);
          localStorage.setItem("productName", productName);
          localStorage.setItem("productDesc", productDesc);
          localStorage.setItem("productOldPrice", productOldPrice);
          localStorage.setItem("productPrice", productPrice);
          switch (loc) {
            case "home":
              window.location.href = "./product/index.html";
              break;
            case "shop":
              window.location.href = "../product/index.html";
              break;
            case "menu":
              window.location.href = "../product/index.html";
              break;
            case "category":
              window.location.href = "../../product/index.html";
              break;
          }
          break;
        case false:
          //İndirimsiz Ürün
          productImgPath =
            product.firstElementChild.firstElementChild.children[0].getAttribute(
              "src"
            );
          convertedProductImgPath = productImgPath
            .replace("../", "")
            .replace("../", "");
          productName =
            product.firstElementChild.firstElementChild.children[1]
              .firstElementChild.textContent;
          productDesc =
            product.firstElementChild.firstElementChild.children[1].children[1]
              .textContent;
          productPrice =
            product.firstElementChild.firstElementChild.children[1]
              .lastElementChild.firstElementChild.textContent;
          localStorage.setItem("productImgPath", convertedProductImgPath);
          localStorage.setItem("productName", productName);
          localStorage.setItem("productDesc", productDesc);
          localStorage.setItem("productPrice", productPrice);
          switch (loc) {
            case "home":
              window.location.href = "./product/index.html";
              break;
            case "shop":
              window.location.href = "../product/index.html";
              break;
            case "menu":
              window.location.href = "../product/index.html";
              break;
            case "category":
              window.location.href = "../../product/index.html";
              break;
          }
          break;
      }
      console.log(
        product.firstElementChild.firstElementChild.children[1].lastElementChild
          .children.length
      );
    }

    //Kullanıcı eğer shop veya menu sayfalarındaysa bir üst directorye çıkıp product'a yönlendirilecek aksi halde anasayfada demektir. Bu durumda da direkt olarak product sayfasına yönlendirilir.

    //İndirimsiz ürünün bilgilerini almak

    // const productName = product.firstElementChild.children[2].innerHTML;
    // const productName = product.firstElementChild.children[2].innerHTML;
  });
});
