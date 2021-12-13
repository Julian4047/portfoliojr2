const bdLevelH = [{
        id: 0,
        img: "./img/js.jpg",

    },
    {
        id: 1,
        img: "./img/css.png",

    },
    {
        id: 3,
        img: "./img/html5.png",

    },
    {
        id: 4,
        img: "./img/ai.jpg",

    },

];
bdLevelH.forEach(function(infoh) {
    document.write('<img class="tool" id="tool-' + infoh.id + '" src="' + infoh.img + '"></img>');
});