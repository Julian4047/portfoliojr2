const bdLevelM = [{
        id: 0,
        img: "./img/bootstrap.svg",

    },
    {
        id: 1,
        img: "./img/ae.png",

    },
    {
        id: 2,
        img: "./img/node.png",

    },

];
bdLevelM.forEach(function(infom) {
    document.write('<img class="tool" id="tool-' + infom.id + '" src="' + infom.img + '"></img>');
});