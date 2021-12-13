const bdCertificates = [{
        id: 0,
        name: "Web designer - Nucba",
        img: "./img/nucba.jpg",
        url: "https://www.linkedin.com/in/juliannicolasrivero/detail/treasury/education:716964221/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAAChCovwBJhE14xIT8VWag5UhFlfx2LSi49E%2C1635474362983)&section=education%3A716964221&treasuryCount=3"
    },
    {
        id: 1,
        name: "Learn JavaScript - CodeCademy",
        img: "./img/code.jpg",
        url: "https://www.codecademy.com/profiles/julianRivero8525364735"
    },
    {
        id: 2,
        name: "Introducción a API REST - EDteam",
        img: "./img/edteam.png",
        url: "https://ed.team/u/julianrivero/curso/api-rest"
    },
    {
        id: 3,
        name: "Learn React - CodeCademy",
        img: "./img/code.jpg",
        url: "https://www.codecademy.com/profiles/julianRivero8525364735"
    },
];
bdCertificates.forEach(function(infobdce) {
    document.write('<fieldset><legend>' + infobdce.name + '</legend><a class="s2card" href="' + infobdce.url + '" id="card-' + infobdce.id + '"><style>#card-' + infobdce.id + ' {background-image: url(' + infobdce.img + ');background-size: cover;background-position:center;);}</style></a></fieldset>');
});