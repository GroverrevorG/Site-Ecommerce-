// Navbar
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon= document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
const postProductsLink = document.querySelector(".navigation li:nth-child(3) a");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Página Principal
const imageButtons = document.querySelectorAll('.image-button');
const displayedImage = document.getElementById('displayed-image');

imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imagePath = button.getAttribute('data-image');
        displayedImage.src = imagePath;
    });
});


// Página de produtos
// Pesquisa card
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const cards = document.querySelectorAll(".card");
    const noResultsMessage = document.getElementById("no-results-message"); 
    
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        let foundResults = false; 

        cards.forEach(card => {
            const cardTitle = card.querySelector("h2").textContent.toLowerCase();

            if (cardTitle.includes(searchTerm)) {
                card.style.display = "block";
                foundResults = true; 
            } else {
                card.style.display = "none";
            }
        });

        if (!foundResults) {
            noResultsMessage.style.display = "block"; 
        } else {
            noResultsMessage.style.display = "none"; 
        }
    });
});

//modal

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const closeButton = document.querySelector(".close-button");
    const buyButton = document.querySelector(".buy-button");

    const cardInfo = [
        {
            title: "Hatsune",
            description: "R$ 156,00",
            image: "img/figure-hatsune.jpg"
        },
    
        {
            title: "Edward Elric",
            description: "R$ 138,90",
            image: "img/figure-edward.webp"
        },

        {
            title: "Shanks",
            description: "R$ 197,67",
            image: "img/figure-shanks.webp"
        },

        {
            title: "Luffy",
            description: "R$ 230,43",
            image: "img/figure-luffy.webp"
        },

        {
            title: "Nami treasure",
            description: "R$ 178,70",
            image: "img/figure-nami.jpg"
        },

        //Segunda fileira
        {
            title: "Himiko Toga",
            description: "R$ 161,99",
            image: "img/figure-Himiko.jpg"
        },

        {
            title: "Naruto",
            description: "R$ 310,10",
            image: "img/figure-naruto.jpg"
        },

        {
            title: "Hashibira",
            description: "R$ 253,00",
            image: "img/figure-hashibira.jpeg"
        },

        {
            title: "Ochaco",
            description: "R$ 135,50",
            image: "img/figure-ochaco.jpg"
        },

        {
            title: "Shigaraki",
            description: "R$ 178,90",
            image: "img/figure-Shigaraki.webp"
        },

        // Terceira fileira
        {
            title: "Hatsune Miku",
            description: "R$ 101,99",
            image: "img/figure-hatsuneMiku.jpg"
        },

        {
            title: "Albedo",
            description: "R$ 282,43",
            image: "img/figure-albedo.webp"
        },

        {
            title: "Itachi Uchiha",
            description: "R$ 148,90",
            image: "img/figure-itachi.jpg"
        },

        {
            title: "Hatsune Miku",
            description: "R$ 152,50",
            image: "img/figure-hatsuneDiva.jpg"
        },

        {
            title: "Berserker",
            description: "R$ 238,90",
            image: "img/figure-berserker.jpeg"
        },

           // Quarta fileira
           {
            title: "Narmaya",
            description: "R$ 190,80",
            image: "img/figure-narmaya.jpg"
        },

        {
            title: "Shimakaze",
            description: "R$ 100,00",
            image: "img/figure-shimakaze.jpg"
        },

        {
            title: "Shanks",
            description: "R$ 149,90",
            image: "img/figure-shanksVol2.jpg"
        },

        {
            title: "Roronoa Zoro",
            description: "R$ 200,10",
            image: "img/figure-roronoa.jpg"
        },

        {
            title: "Hatsune Miku",
            description: "R$ 218,90",
            image: "img/figure-hatsune-diva.jpg"
        },
    ];

    cards.forEach((card, index) => {
        card.addEventListener("click", function() {
            modalTitle.textContent = cardInfo[index].title;
            modalDescription.textContent = cardInfo[index].description;
            modalImage.src = cardInfo[index].image;

            modal.style.display = "flex"; 
        });
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none"; 
        const successMessage = document.querySelector(".success-message");
        successMessage.style.display = "none";
    });

    buyButton.addEventListener("click", function() {
        const successMessage = document.querySelector(".success-message");
        successMessage.style.display = "block"; 
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; 
        }
    });
});



//Modal2




document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById("cart-icon");
    const confirmationModal = document.querySelector(".modal2");
    const closeButton = confirmationModal.querySelector(".close");

    cartIcon.addEventListener("click", function(event) {
        event.preventDefault();
        confirmationModal.style.right = "0"; 
    });

    closeButton.addEventListener("click", function() {
        confirmationModal.style.right = "-300px"; 
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const buyButtonModal2 = document.querySelector("#modal .buy-button");
    const modal2 = document.querySelector(".modal2");
    const closeButton2 = document.querySelector(".close-button2");
    const productsContainer = document.getElementById("products-container");
    const totalPriceText = document.querySelector(".total-price");
    

    const selectedProducts = []; 

    buyButtonModal2.addEventListener("click", function() {
        const modalTitle = document.getElementById("modal-title").textContent;
        const modalDescription = document.getElementById("modal-description").textContent;
        const modalImageSrc = document.getElementById("modal-image").getAttribute("src");
       

        const product = {
            title: modalTitle,
            description: modalDescription,
            imageSrc: modalImageSrc,
            price: parseFloat(modalDescription.replace("R$ ", "").replace(",", "."))
        };
        

        selectedProducts.push(product); 

        updateModal2Content(); 
       
    });

    closeButton2.addEventListener("click", function() {
        modal2.style.right = "-300px"; 
    });

    function updateModal2Content() {
        const productsHTML = selectedProducts.map(product => `
            <div class="product">
                <h2>${product.title}</h2>
                <img src="${product.imageSrc}" alt="" style="width: 150px; max-height: 150px;">
                <p>${product.description}</p>
            </div>
        `).join('');

        productsContainer.innerHTML = productsHTML;

        const totalPrice = selectedProducts.reduce((total, product) => total + product.price, 0);
        totalPriceText.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;

        modal2.style.right = "0";
    }
});


// Modal de sucesso
const firstModal = document.querySelector('.modal2');
const buyButton = firstModal.querySelector('.buy-button-modal2');
const successModal = document.querySelector('#success-modal');
const closeButton = successModal.querySelector('.close-success-modal');

function openSuccessModal() {
    successModal.style.display = 'block';
}

function closeSuccessModal() {
    successModal.style.display = 'none';
}

buyButton.addEventListener('click', openSuccessModal);

closeButton.addEventListener('click', closeSuccessModal);
