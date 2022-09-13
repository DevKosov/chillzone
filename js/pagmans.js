
//zone de SPAWN :
let maxHeight2 = Math.floor(window.innerHeight - (window.innerHeight*0.2));
let maxWidth2 = Math.floor(window.innerWidth - (window.innerWidth*0.2));
let minWidth2 = Math.floor(window.innerWidth*0.2);
let minHeight2 = Math.floor(window.innerHeight*0.2);

window.addEventListener('resize', function(){
    maxHeight2 = Math.floor(window.innerHeight - (window.innerHeight*0.2));
    maxWidth2 = Math.floor(window.innerWidth - (window.innerWidth*0.2));
    minWidth2 = Math.floor(window.innerWidth*0.2);
    minHeight2 = Math.floor(window.innerHeight*0.2);
    console.log("minH:",minHeight2,"maxH:",maxHeight2);
    console.log("minW:",minWidth2,"maxW:",maxWidth2);
});
console.log("minH:",minHeight2,"maxH:",maxHeight2);
console.log("minW:",minWidth2,"maxW:",maxWidth2);

//choisir un point sur la zone :

function getRandomnumbah2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomnumbah2(minWidth2,maxWidth2))
function getpoint2D2(point2){
    point2.X = getRandomnumbah2(minWidth2, maxWidth2);
    point2.Y = getRandomnumbah2(minHeight2, maxHeight2);
    return point2;
}

let isGolden = 1;
let isPlatinium = 3;
let numbah2;
let numbah;
const point2D2 = {
    "X" : 0,
    "Y" : 0
};

let zonePepegaHtml2 = document.getElementById('zoneDePepega');

function spawnDaPepegas() {
    numbah = getRandomnumbah2(0, 10000);
    numbah2 = getRandomnumbah2(0, 1000);
    if (numbah == isPlatinium) {
        ReactDOM.unmountComponentAtNode(zonePepegaHtml2);

        console.log("isPlatinium");

        getpoint2D2(point2D2);

        const isPlatiniumPepega = <a id="platiniumPepega" target="_blank" href="https://www.youtube.com/watch?v=_EnC2Ut_lHE&ab_channel=TikTokFunny" style={{ position: "absolute", top: point2D2.Y + 'px', right: point2D2.X + "px" }} class="goldenPepega"><img src="chillzone/photos/platinium.png" alt="pepega" /></a>;

        ReactDOM.render(
            isPlatiniumPepega,
            zonePepegaHtml2
        );
        document.getElementById("platiniumPepega").classList.add("animationplatinium");

        setTimeout(spawnDaPepegas, 30000);

    } else if (numbah2 == isGolden) {
        
        ReactDOM.unmountComponentAtNode(zonePepegaHtml2);

        console.log("isGolden");

        getpoint2D2(point2D2);

        const isGoldenPepega = <a id="goldenpepega" target="_blank" href="https://www.youtube.com/watch?v=JH642hpJtFs" style={{ position: "absolute", top: point2D2.Y + 'px', right: point2D2.X + "px" }} class="goldenPepega"><img src="chillzone/photos/golden.png" alt="pepega" /></a>;

        ReactDOM.render(
            isGoldenPepega,
            zonePepegaHtml2
        );
        document.getElementById("goldenpepega").classList.add("animationgolden");

        setTimeout(spawnDaPepegas, 10000);
    } else {
        console.log("isNotGolden");
        getpoint2D2(point2D2);
        ReactDOM.unmountComponentAtNode(zonePepegaHtml2);

        const normalPepega2 = <a id="pepega" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ position: "absolute", top: point2D2.Y + 'px', right: point2D2.X + "px" }} class="pepega"><img src="chillzone/photos/pepega.png" alt="pepega" /></a>;

        ReactDOM.render(
            normalPepega2,
            zonePepegaHtml2
        );

        document.getElementById("pepega").classList.add("animation");
        setTimeout(spawnDaPepegas, 3000);
    }
}
spawnDaPepegas();