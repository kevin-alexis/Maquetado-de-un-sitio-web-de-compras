const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const arrowEmailIcon = document.querySelector(".navbar-arrow");

const burguerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartAside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

let isShoppingCartAsideOpen;

/* toggle = intercambiar */
emailMenu.addEventListener("click", toggleDesktopMenu);

burguerMenuIcon.addEventListener("click", toggleMobileMenu);

shoppingCartIcon.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu(){
    isShoppingCartAsideOpen = !shoppingCartAside.classList.contains("inactive");

    if(isShoppingCartAsideOpen == true){
        shoppingCartAside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
    
    if(arrowEmailIcon.style.rotate=="0deg"){
        arrowEmailIcon.style.rotate = "90deg";
    }
    else{
        arrowEmailIcon.style.rotate = "0deg";
    }
}

function toggleMobileMenu(){
    isShoppingCartAsideOpen = !shoppingCartAside.classList.contains("inactive");

    if(isShoppingCartAsideOpen == true){
        shoppingCartAside.classList.add("inactive");
    }
    
    mobileMenu.classList.toggle("inactive");

}

function toggleShoppingCart(){
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");

    if(isDesktopMenuOpen == true){
        desktopMenu.classList.add("inactive");
    }

    if(isMobileMenuOpen == true){
        mobileMenu.classList.add("inactive");
    }

    shoppingCartAside.classList.toggle("inactive");
}


const productList = [];

productList.push({
    name: "Xbox Series S",
    price: 500,
    image: "https://images.pexels.com/photos/12339571/pexels-photo-12339571.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
});

productList.push({
    name: "Iphone 7",
    price: 300,
    image: "https://cdn.pixabay.com/photo/2016/10/24/14/42/iphone-7-plus-1766257_1280.png",
});

productList.push({
    name: "Headphones",
    price: 50,
    image: "https://cdn.pixabay.com/photo/2020/04/19/16/33/headphones-5064411_1280.jpg",
});

productList.push({
    name: "USB",
    price: 10,
    image: "https://cdn.pixabay.com/photo/2015/07/20/19/50/usb-853230_1280.png",
});

productList.push({
    name: "Computer",
    price: 1000,
    image: "https://cdn.pixabay.com/photo/2013/07/12/15/04/monitor-149362_1280.png",
});

/* 
<!-- <div class="product-card">
                <img src="https://images.pexels.com/photos/12339571/pexels-photo-12339571.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="">
                <div class="product-info">
                    <div>
                        <p>$500,00</p>
                        <p>Xbox Series S</p>
                    </div>
                    <figure>
                        <img src="./Icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>  
            </div> -->
   */          

function renderProducts(array){
    for(product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfofigure = document.createElement("figure");
        const iconCart = document.createElement("img");
        iconCart.setAttribute("src", "./Icons/bt_add_to_cart.svg");
    
        /*Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.*/
    
        productInfoDiv.append(productPrice, productName);
    
        productInfofigure.appendChild(iconCart);
    
        productInfo.append(productInfoDiv, productInfofigure);
    
        productCard.append(productImage, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);