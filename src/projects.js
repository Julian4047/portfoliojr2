const bdProjects = [{
        id: 7,
        img: "/img/8.jpg",
        url: "https://shoesshop.vercel.app/"
    },
    {
        id: 8,
        img: "/img/9.jpg",
        url: "https://wereriver.vercel.app/"
    },
    {
        id: 22,
        img: "./img/sb.jpg",
        url: "https://savebooks.vercel.app/"
    },
    {
        id: 33,
        img: "/img/nuc.jpg",
        url: "https://nucbafullstackjs.vercel.app/"
    },
    {
        id: 4,
        img: "/img/5.jpg",
        url: "https://saveyourbooks.vercel.app/"
    },
    {
        id: 5,
        img: "/img/6.jpg",
        url: "index.html"
    },


];
bdProjects.forEach(function(infop) {
    document.write('<a class="s2card" href="' + infop.url + '" id="card-' + infop.id + '"><style>#card-' + infop.id + ' {background-image: url(' + infop.img + ');background-size: cover;background-position:center;}</style></a>');
});