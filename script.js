//dark mode toggle 
const body = document.body;
const header= document.querySelector('header');
let darkMode = localStorage.getItem('darkMode');
const darktoggler = document.querySelector('.dark-mode-toggle');
const darkTogglerIcon = document.querySelector('.dark-toggle-icon');

function enableDarkMode(){
    body.classList.add(('dark-theme'));
    localStorage.setItem('darkMode', 'enabled');
    header.style.backgroundImage = "url(images/Backgrounddark.svg)";
    darkTogglerIcon.classList.add('fa-sun');
    darkTogglerIcon.classList.remove('fa-moon');
}
function disabledDarkMode (){
    body.classList.remove(('dark-theme'));
    localStorage.setItem('darkMode', null)
    header.style.backgroundImage = "url(images/Background.svg)";
    darkTogglerIcon.classList.add('fa-moon');
    darkTogglerIcon.classList.remove('fa-sun');
}
if (darkMode === 'enabled'){
    enableDarkMode();
}
darkTogglerIcon.addEventListener('click', (e)=>{
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    }
    else{
        disabledDarkMode ();
    }
})

 // menu button toggle
function toggleMenu () {
    const menu = document.querySelector("#menu-wrapper");
    menu.classList.toggle("show-menu");
}
function btnToggle () {
    const menuBtn = document.getElementById("menu-bar");
    menuBtn.addEventListener("click", toggleMenu);
}
btnToggle ()

// custom data array 
const latestAuctions = [
    {
        id: 1,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "3.85",
        avatar : ["09", "06", "08"],
        time: "1:41",
        likes: "30"
    },
    {
        id: 2,
        title: "Tellus duis neque fringilla pulvinar gravida",
        price: "4.2",
        avatar : ["09", "06", "08"],
        time: "20:41",
        likes: "10"
    },
    {
        id: 3,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "7.2",
        avatar : ["09", "06", "08"],
        time: "15:11",
        likes: "70"
    },
    {
        id: 4,
        title: "Mattis at diam lorem nisl nam sed sociis",
        price: "10.21",
        avatar : ["09", "06", "08"],
        time: "7:01",
        likes: "16"
    },
    {
        id: 5,
        title: "Diam purus sagittis nisl erat mauris",
        price: "41.22",
        avatar : ["09", "06", "08"],
        time: "3:21",
        likes: "20"
    },
    {
        id: 6,
        title: "Senectus adipiscing nascetur accumsan etiam",
        price: "4.2",
        avatar : ["09", "06", "08"],
        time: "2:41",
        likes: "43"
    },
    {
        id: 7,
        title: "Dui accumsan leo vestibulum ornare eu",
        price: "6.2",
        avatar : ["09", "06", "08"],
        time: "9:41",
        likes: "19"
    },
    {
        id: 8,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "3.85",
        avatar : ["09", "06", "08"],
        time: "1:41",
        likes: "30"
    },
    {
        id: 9,
        title: "Tellus duis neque fringilla pulvinar gravida",
        price: "4.2",
        avatar : ["09", "06", "08"],
        time: "20:41",
        likes: "10"
    },
    {
        id: 10,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "7.2",
        avatar : ["09", "06", "08"],
        time: "15:11",
        likes: "70"
    },
    {
        id: 11,
        title: "Mattis at diam lorem nisl nam sed sociis",
        price: "10.21",
        avatar : ["09", "06", "08"],
        time: "7:01",
        likes: "16"
    },
    {
        id: 12,
        title: "Diam purus sagittis nisl erat mauris",
        price: "41.22",
        avatar : ["09", "06", "08"],
        time: "3:21",
        likes: "20"
    },
    {
        id: 13,
        title: "Senectus adipiscing nascetur accumsan etiam",
        price: "4.2",
        avatar : ["09", "06", "08"],
        time: "2:41",
        likes: "43"
    },
    {
        id: 14,
        title: "Dui accumsan leo vestibulum ornare eu",
        price: "6.2",
        avatar : ["09", "06", "08"],
        time: "9:41",
        likes: "19"
    },
    {
        id: 15,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "3.85",
        avatar : ["09", "06", "08"],
        time: "1:41",
        likes: "30"
    },
    {
        id: 16,
        title: "Tellus duis neque fringilla pulvinar gravida",
        price: "4.2",
        avatar : ["09", "06", "08"],
        time: "20:41",
        likes: "10"
    },
    {
        id: 17,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "7.2",
        avatar : ["09", "06", "08"],
        time: "15:11",
        likes: "70"
    },
    {
        id: 18,
        title: "Mattis at diam lorem nisl nam sed sociis",
        price: "10.21",
        avatar : ["09", "06", "08"],
        time: "7:01",
        likes: "16"
    },
    {
        id: 19,
        title: "Diam purus sagittis nisl erat mauris",
        price: "41.22",
        avatar : ["09", "06", "08"],
        time: "3:21",
        likes: "20"
    }
];

// load live auction
function loadAuction () {
    const latestAuctionDiv = document.getElementById("live-auction-card-wrapper");
    latestAuctions.map((latestAuction) => {
        const latestAuctionCard = document.createElement("div");
        latestAuctionCard.classList.add("live-auction-card");
        latestAuctionCard.innerHTML = 
                `   
                    <div class="live-auction-card-img-div">
                    <img src="images/big/img (${latestAuction.id}).png" alt="latest-img-${latestAuction.id}" />
                    </div>
                    <div class="live-auction-card-text-div">
                        <h3 class="h6">${latestAuction.title}</h3>
                        <p><span class="h7 price-span" >${latestAuction.price} ETH</span></p>
                    </div>
                    <div class="time-div">
                        <span><i class='bx bx-stopwatch' ></i></span>
                        <span>${latestAuction.time} min left</span>
                    </div>
                    <div class="divider">
                    </div>
                    <div class="bid-div">
                        <div class="bid-avater">
                            <div><img src="images/avatars/${latestAuction.avatar[0]}.png" alt="avater"/></div>
                            <div><img src="images/avatars/${latestAuction.avatar[1]}.png" alt="avater"/></div>
                            <div><img src="images/avatars/${latestAuction.avatar[2]}.png" alt="avater"/></div>
                            <p>35 people are bidding</p>
                        </div>
                        <div class="like-div">
                            <button><img src="images/icons/Heart Icon.svg" alt="like"></button>
                            <span>${latestAuction.likes}</span>
                        </div>
                    </div>
                `;
        latestAuctionDiv.appendChild(latestAuctionCard);
    });
}
loadAuction ()

//load hottest sale
function loadHottestSale() {
    const hottestSaleDiv = document.getElementById("hottest-card-wrapper");
    latestAuctions.map((hottestSale)=> {
        const hottestSaleCard = document.createElement("div");
        hottestSaleCard.classList.add("hottest-card");
        hottestSaleCard.innerHTML =
            `
                <div class="hottest-card-img-div">
                    <img src="images/big/img (${hottestSale.id}).png" alt="latest-img-${hottestSale.id}" />
                </div>
                <div class="hottest-card-text-div">
                    <h3 class="h7">${hottestSale.title}</h3>
                </div>
                <div class="time-price-div">
                    <div class="time-div">
                        <span><i class='bx bx-stopwatch' ></i></span>
                        <span>${hottestSale.time}</span>
                    </div>
                    <p><span class="h8 price-span">${hottestSale.price} ETH</span></p>
                </div>
                <div class="divider hot-divider">
                </div>
                <div class="bid-div">
                    <div class="bid">
                        <p>35 people are bidding</p>
                    </div>
                    <div class="like-div">
                        <button><i class="fa-regular fa-heart fa-beat"></i></button>
                    </div>
                </div>
            `
        hottestSaleDiv.appendChild(hottestSaleCard);
    });
}
loadHottestSale();

//load popular auction
function loadpopularAuction() {
    const popularAuctionDiv = document.getElementById("popular-auction-card-wrapper");
    latestAuctions.map((popularAuction)=> {
        const popularAuctionCard = document.createElement("div");
        popularAuctionCard.classList.add("popular-card");
        popularAuctionCard.innerHTML =
            `
                <div class="popular-card-img-div">
                    <img src="images/big/img (${popularAuction.id}).png" alt="latest-img-${popularAuction.id}" />
                </div>
                <div class="popular-card-text-div">
                    <h3 class="h7">${popularAuction.title}</h3>
                </div>
                <div class="time-price-div">
                    <div class="time-div">
                        <span><i class='bx bx-stopwatch' ></i></span>
                        <span>${popularAuction.time}</span>
                    </div>
                    <p><span class="h8 price-span">${popularAuction.price} ETH</span></p>
                </div>
                <div class="divider hot-divider">
                </div>
                <div class="bid-div">
                    <div class="bid">
                        <p>35 people are bidding</p>
                    </div>
                    <div class="like-div">
                        <button><i class="fa-regular fa-heart fa-beat"></i></button>
                    </div>
                </div>
            `
        popularAuctionDiv.appendChild(popularAuctionCard);
    });
}
loadpopularAuction()

//lad top nft 
function loadtopNft() {
    const topNftDiv = document.getElementById("top-nft-card-wrapper");
    latestAuctions.map((topNft)=> {
        const topNftCard = document.createElement("div");
        topNftCard.classList.add("top-nft-card");
        topNftCard.innerHTML =
            `
            <div class="top-nft-left-col">
                <img src="images/big/img (${topNft.id}).png" alt="latest-img-${topNft.id}" />
            </div>
            <div class="top-nft-right-col">
                <div class="top-nft-card-text-div">
                    <h3 class="h7">${topNft.title}</h3>
                </div>
                <div class="time-price-div">
                    <div class="time-div">
                        <span><i class='bx bx-stopwatch' ></i></span>
                        <span>${topNft.time}</span>
                    </div>
                    <p><span class="h8 price-span">${topNft.price} ETH</span></p>
                </div>
                <div class="bid-like-div">
                    <div class="bid">
                        <p>35 people are bidding</p>
                    </div>
                    <div class="like-div">
                        <button><i class="fa-regular fa-heart fa-beat"></i></button>
                    </div>
                </div>
            </div>
            `
        topNftDiv.appendChild(topNftCard);
    });
}
loadtopNft();

//load scrolling eth image
function scrollImage () {
    const scrollDiv = document.querySelector("#scrolling-eth-div");
    latestAuctions.map ((item) => {
        const scrollImageDiv = document.createElement("div");
        scrollImageDiv.classList.add("scrolling-div");
        scrollImageDiv.style.backgroundImage = `url("images/scrolls/img (${item.id}).png")`;
        scrollDiv.appendChild(scrollImageDiv);
    });
}
scrollImage();



// hottest card carousel
function getSlideArray(slideContainer) {
    const slideContainerChildren = document.querySelector(slideContainer).children;
    const slideArray = Array.from(slideContainerChildren);
    return slideArray;
}
function getSlideWidth(slide) {
    slide = document.querySelector(slide);
    const slideWidth = slide.getBoundingClientRect().width;
    return  slideWidth;
}
function getSlidePosition(slideWidth, index) {
    return (slideWidth + 20) * index + "px";
}
function getBtn(btn) {
    btn = document.querySelector(btn);
    return btn;
}
function loadCarousel (slideContainer, slide, nextBtn, previousBtn) {
    const slideArray = getSlideArray(slideContainer);
    const slideWidth = getSlideWidth(slide);
    const nxtBtn = getBtn(nextBtn);
    const prevBtn = getBtn(previousBtn);
    let currentIndex = 0;

    nxtBtn.addEventListener('click', () => {
        currentIndex++;
        const slidePosition = getSlidePosition(slideWidth, currentIndex);
        if (currentIndex >= slideArray.length) {
            return;
        }
        slideArray[currentIndex].style.opacity = "1";
        slideArray.forEach((item) => {
            item.style.transform = ` translateX(-${slidePosition}`;
        });
    });
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        const slidePosition = getSlidePosition(slideWidth, currentIndex);
        if (currentIndex < 0 ) {
            return;
        }
        slideArray[currentIndex -1].style.opacity = "1";
        slideArray.forEach((item) => {
            item.style.transform = ` translateX(-${slidePosition})`;
            
        });
    });
}

loadCarousel ('#hottest-card-wrapper', '.hottest-card', '.hottest-card-next-btn', '.hottest-card-previous-btn');
loadCarousel ('#popular-auction-card-wrapper', '.popular-card', '.popular-card-next-btn', '.popular-card-previous-btn');
// console.log (document.querySelector('.popular-card').attributes)