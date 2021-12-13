const bdLevelL = [{
        id: 0,
        img: "./img/react.jpg",

    },
    {
        id: 1,
        img: "./img/figma.png",

    },
    {
        id: 2,
        img: "./img/mysql.jpg",

    },
    {
        id: 3,
        img: "./img/mongodb.svg",

    },
    {
        id: 4,
        img: "./img/tailwind.jpg",
    },
];
bdLevelL.forEach(function(infol) {
    document.write('<img class="tool" id="tool-' + infol.id + '" src="' + infol.img + '"></img>');
});