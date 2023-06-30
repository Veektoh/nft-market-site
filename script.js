
// menu button toggle
function toggleMenu () {
    menu = document.querySelector("#menu-wrapper");
    menu.classList.toggle("show-menu");
}
function btnToggle () {
    menuBtn = document.getElementById("menu-bar");
    menuBtn.addEventListener("click", toggleMenu);
}
btnToggle ()

// Latest live auction

const latestAuctions = [
    {
        id: 1,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "3.25",
        avatar : ["09", "06", "08"],
        time: "1:41",
        likes: "30"
    },
    {
        id: 2,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
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
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "10.21",
        avatar : ["09", "06", "08"],
        time: "7:01",
        likes: "16"
    },
    {
        id: 5,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "41.22",
        avatar : ["09", "06", "08"],
        time: "3:21",
        likes: "20"
    },
    {
        id: 6,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "4.2",
        avatar : ["09", "06", "08"],
        time: "2:41",
        likes: "43"
    },
    {
        id: 7,
        title: "Tristique diam a, enim, eros tellus. Viverra etiam",
        price: "6.2",
        avatar : ["09", "06", "08"],
        time: "9:41",
        likes: "19"
    }
];

// load live auction
function loadAuction () {
    latestAuctionDiv = document.getElementById("live-auction-card-wrapper");
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
                        <span><img src="images/icons/Timer Icon.svg" alt="Timer icon"></span>
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
    hottestSaleDiv = document.getElementById("hottest-card-wrapper");
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
                        <span><img src="images/icons/Timer Icon.svg" alt="Timer icon"></span>
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
    popularAuctionDiv = document.getElementById("popular-auction-card-wrapper");
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
                        <span><img src="images/icons/Timer Icon.svg" alt="Timer icon"></span>
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
    topNftDiv = document.getElementById("top-nft-card-wrapper");
    latestAuctions.map((topNft)=> {
        const topNftCard = document.createElement("div");
        topNftCard.classList.add("top-nft-card");
        topNftCard.innerHTML =
            `
            <div class="top-nft-left-col">
                <img src="images/big/img (${topNft.id}).png" alt="latest-img-${topNft.id}" />
            </div>
            <div class="top-nft-right-col">
                <div class="hottest-card-text-div">
                    <h3 class="h7">${topNft.title}</h3>
                </div>
                <div class="time-price-div">
                    <div class="time-div">
                        <span><img src="images/icons/Timer Icon.svg" alt="Timer icon"></span>
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
    scrollDiv = document.querySelector("#scrolling-eth-div");
    latestAuctions.map ((item) => {
        scrollDivClass = document.querySelector(".scrolling-div");
        const scrollImageDiv = document.createElement("div");
        scrollImageDiv.classList.add("scrolling-div");
        scrollDivClass.style.backgroundImage = "url(/images/scrolls/img (1).png)";
    })
    console.log(scrollDivClass.style)
}

scrollImage();