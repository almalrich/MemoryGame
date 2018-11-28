let cartes1;
let cartesId1;
let cartes2;
let cartesId2;
let paires = 0;
let click = 0;

alert("démarrer");
let Tab = function (array) {
    let IndexCourant = array.length;

    let ValeurTemporaire, IndexAleatoire;
    while (0 != IndexCourant) {
        IndexAleatoire = Math.floor(Math.random() * IndexCourant);

        IndexCourant -= 1;
        ValeurTemporaire = array[IndexCourant];

        array[IndexCourant] = array[IndexAleatoire];

        array[IndexAleatoire] = ValeurTemporaire;
    }
    return array;
};
let Img = ["AsDePiques.png", "valetDePique.png", "CavalierDePique.jpg",

    "dameDePique.png", "roiDePique.png", "AsDePiques.png",

    "valetDePique.png", "CavalierDePique.jpg", "dameDePique.png",

    "roiDePique.png"];


Tab(Img);

let ImageTableau = Tab(Img.slice());

function machin() {
    return 5;
}


for (let i = 0; i < Img.length; i++) {

    document.getElementById('Img' + i).addEventListener("click",

        function Clique() {

            if (click == 0) {

                document.getElementById("Img" + i).innerHTML = "<img src='" + Img[i] + "'>";
                cartes1 = Img[i];
                cartesId1 = "Img" + i;
                click++;

            } else {

                if (click < 2) {
                    document.getElementById("Img" + i).innerHTML = "<img src='" + Img[i] + "'>";
                    cartes2 = Img[i];
                    cartesId2 = "Img" + i;
                    click++;

                    if (cartes1 == cartes2) {
                        if (cartesId1 != cartesId2) {
                            console.log("cartesidentiques");
                            document.getElementById(cartesId1).style.visibility = "hidden";
                            document.getElementById(cartesId2).style.visibility = "hidden";
                            click = 0;
                            cartes1 = null;
                            cartes2 = null;
                            paires++;

                            if (paires == 5) {
                                alert("bravo!")
                            }
                            {
                                document.getElementById("tem").innerHTML = minute + ":" + seconde;
                            }
                        } else {
                            console.log("Vous avez double cliquez");
                            document.getElementById(cartesId1).innerHTML = "<img src =" + 'hs.jpg' + ">";
                            document.getElementById(cartesId2).innerHTML = "<img src =" + 'hs.jpg' + ">";
                            click = 0;
                        }

                    } else {
                        setTimeout(function () {
                                console.log("cartesdifferentes");
                                document.getElementById(cartesId1).innerHTML = "<img src =" + 'hs.jpg' + ">";
                                document.getElementById(cartesId2).innerHTML = "<img src =" + 'hs.jpg' + ">";
                                click = 0;
                                cartes1 = null;
                                cartes2 = null;
                            }, 500
                        );

                    }

                }

            }

        }
    );
}

let seconde = "00";
let minute = "00";


function temps() {
    {
        document.getElementById("temps").innerHTML = minute + ":" + seconde;
        seconde++;
        setTimeout(temps, 1000);


        if (seconde == 60) {
            minute++;
            seconde = 0;
        }

    }

}


temps();


document.getElementById("ok").addEventListener("click", function () {

    let test = document.getElementById("total");
    let test_2 = document.getElementById("totall");


    if (test.style.display === "block") {

        console.log(test.style.display);
        test.style.display = "none";

        console.log("lolo");


        test_2.style.display = "block";
        console.log('fggfg');
    }

});





