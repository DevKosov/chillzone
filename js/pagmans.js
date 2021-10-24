
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

let isGolden = 2;
let numbah2;
const point2D2 = {
    "X" : 0,
    "Y" : 0
};

let zonePepegaHtml2 = document.getElementById('zoneDePepega');

function spawnDaPepegas() {

    let dd3 = 0;
    numbah2 = getRandomnumbah2(0,1000);
    if (numbah2 == isGolden){
        console.log("isGolden");

        getpoint2D2(point2D2);

        const isGoldenPepega = <a id="goldenpepega" target="_blank" href="https://www.youtube.com/watch?v=JH642hpJtFs" style={{position:"absolute",top: point2D2.Y + 'px', right: point2D2.X + "px"}} class="goldenPepega"><img src="photos/golden.png" alt="pepega"/></a>;
        
        ReactDOM.render(
            isGoldenPepega,
            zonePepegaHtml2
          );
          document.getElementById("goldenpepega").style.animation = " 10000ms pepegaRotation forwards"; 

        setTimeout(spawnDaPepegas,10000);
    }else{
        console.log("isNotGolden");
        getpoint2D2(point2D2);
        dd3 = 0;

      /*   if (dd3 == 0){
            const normalPepega2 = <a id="pepega2" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{position:"absolute",top: point2D2.Y + 'px', right: point2D2.X + "px"}} class="pepega"><img src="photos/pepega.png" alt="pepega"/></a>;
        }else{
            const normalPepega2 = <a id="pepega" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{position:"absolute",top: point2D2.Y + 'px', right: point2D2.X + "px"}} class="pepega"><img src="photos/pepega.png" alt="pepega"/></a>;
            dd3 = 0;
        } */
            const normalPepega2 = <a id="pepega" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{position:"absolute",top: point2D2.Y + 'px', right: point2D2.X + "px"}} class="pepega"><img src="photos/pepega.png" alt="pepega"/></a>;

        dd3 = 1;
        
        ReactDOM.render(
            normalPepega2,
            zonePepegaHtml2
          );

          document.getElementById("pepega").style.animation = " 3000ms pepegaRotation forwards";

        /* document.getElementById('pepega').addEventListener('animationend', () => {
            spawnDaPepegas();
        }); */
        setTimeout(spawnDaPepegas,3000);
    }
}
spawnDaPepegas();