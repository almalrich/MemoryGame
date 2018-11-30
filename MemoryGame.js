let cartes1;/*my variable*/
let cartesId1;
let cartes2;
let cartesId2;
let paires = 0;
let click = 0;


let Tab = function (array) {
    let IndexCourant = array.length;

    let ValeurTemporaire, IndexAleatoire;
    while (0 != IndexCourant) /* randomn loop Math to have a randomn index */ {
        IndexAleatoire = Math.floor(Math.random() * IndexCourant);

        IndexCourant -= 1;
        ValeurTemporaire = array[IndexCourant];

        array[IndexCourant] = array[IndexAleatoire];

        array[IndexAleatoire] = ValeurTemporaire;
    }
    return array;/*to have all enter of tab*/
};/* img variable*/
let Img = ["AsDePiques.png", "valetDePique.png", "CavalierDePique.jpg",

    "dameDePique.png", "roiDePique.png", "AsDePiques.png",

    "valetDePique.png", "CavalierDePique.jpg", "dameDePique.png",

    "roiDePique.png"];

//reminder function
Tab(Img);

let ImageTableau = Tab(Img.slice());

/* listen click and compare*/
for (let i = 0; i < Img.length; i++) {

    document.getElementById('Img' + i).addEventListener("click",

        function Clique() {

            if (click == 0) {
                /*defined one card*/
                document.getElementById("Img" + i).innerHTML = "<img src='" + Img[i] + "'>";
                cartes1 = Img[i];
                cartesId1 = "Img" + i;
                click++;

            } else {
                /*defined second card*/
                if (click < 2) {
                    document.getElementById("Img" + i).innerHTML = "<img src='" + Img[i] + "'>";
                    cartes2 = Img[i];
                    cartesId2 = "Img" + i;
                    click++;
                    /*compare the pair of cards*/
                    if (cartes1 == cartes2) {
                        if (cartesId1 != cartesId2) {
                            document.getElementById(cartesId1).style.visibility = "hidden";
                            document.getElementById(cartesId2).style.visibility = "hidden";
                            click = 0;
                            cartes1 = null;
                            cartes2 = null;
                            paires++;
                            /*when user make 5pairs is win*/
                            if (paires == 5) {
                                document.getElementById("totall").innerHTML = "Bravo vous avez gagné!!! en :";

                                document.getElementById("tem").innerHTML = minute + ":" + seconde;
                            }
                            /*if not he loose*/
                            if (paires < 5) {
                                document.getElementById("totall").innerHTML = "désolé vous avez perdu...."
                            }
                            document.getElementById("totall").style.marginLeft = 40 + "%";
                            document.getElementById("totall").style.fontSize = 30 + "px";

                            /* if user double click*/
                        } else {
                            console.log("Vous avez double cliquez");
                            document.getElementById(cartesId1).innerHTML = "<img src =" + 'hs.jpg' + ">";
                            document.getElementById(cartesId2).innerHTML = "<img src =" + 'hs.jpg' + ">";
                            click = 0;
                        }
                        /* time to click in second card before the first return itself*/
                    } else {
                        setTimeout(function () {
                                console.log("cartesdifferentes");
                                document.getElementById(cartesId1).innerHTML = "<img src =" + 'hs.jpg' + ">";
                                document.getElementById(cartesId2).innerHTML = "<img src =" + 'hs.jpg' + ">";
                                click = 0;
                                cartes1 = null;
                                cartes2 = null;
                            }, 1000
                        );

                    }

                }

            }


        }
    );
}
/* make a timer in game and write it*/
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


/*function to make two blocks (one block/one none) and when click the button block become none and this one none make block*/

document.getElementById("ok").addEventListener("click", function () {
    if (document.getElementById('ok').innerHTML == 'démarrer') {
        document.getElementById('ok').innerHTML = 'Résultats';
        temps();
    } else {
        document.getElementById('ok').innerHTML = 'démarrer';
        clearTimeout();
        let test = document.getElementById("total");

        let test_2 = document.getElementById("totall");


        if (test.style.display === "block") {


            test.style.display = "none";


            test_2.style.display = "block";

        }
    }
});

/*function and button reset */

document.getElementById("reset").addEventListener("click", function () {
        location.reload()
    }
);
let g;
let zero = function () {
    if (g = 5) {
        return "5";
    }


}

export {zero}

