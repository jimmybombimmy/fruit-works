// a class that takes a callback function in its constructor
// can observer multiple elements or entries at the same time
// it will run anytime the visivibility of the observed items changes
const observer = new IntersectionObserver((entries) => {
    // loop over all the entries
    entries.forEach((entry) => {
        console.log(entry)
        // use a conditional to check if the entry is intersection
        if (entry.isIntersecting) {
            // add show class
            entry.target.classList.add('show');
        } else {
            // remove when not intersecting
            entry.target.classList.remove('show');
        }
    });
});
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

var blurFadeHeight = 10;
var navBlurAmount = 4;

// var blurHeight = document.getElementsByClassName("navbar-blur-fade")[0].setAttribute("style", "height: " + blurFadeHeight + "px;");
document.getElementsByClassName("navbar")[0].setAttribute("style", "backdrop-filter: blur(" + navBlurAmount + "px)");
document.getElementsByClassName("navbar-blur-fade")[0].setAttribute("style", "backdrop-filter: blur(" + navBlurAmount + "px)");

var blurFadeReduce = navBlurAmount;

//Below is my gradual blur
//It's called shit because it looks shit
// function shit() {
//     for (var i = 0; i<blurFadeHeight; i++) {
//         var divide = navBlurAmount / blurFadeHeight
//         blurFadeReduce = Math.round((blurFadeReduce + divide) * 100) / 100;
//         var blurFadeReduce2 = Math.round((blurFadeReduce - navBlurAmount) * 100) / 100;
//         console.log(blurFadeReduce);

//     const newNode = document.createElement("div");
//     newNode.setAttribute("class", "blurFade");
//     newNode.setAttribute("style", "backdrop-filter: blur(" + blurFadeReduce2 + "px); height: 1px;");
//     const textNode = document.createTextNode("")
//     newNode.prepend(textNode);
//     const list = document.getElementsByClassName("navbar-blur-fade")[0];
//     list.insertBefore(newNode, list.children[0]);

// }
// }
//tutorial used for above https://www.w3schools.com/jsref/met_node_insertbefore.asp & https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_insertbefore


function shit() {
    for (var i = 0; i<blurFadeHeight; i++) {
        var divide = 50 / blurFadeHeight
        blurFadeReduce = Math.round((blurFadeReduce + divide) * 100) / 100;
        var blurFadeReduce2 = Math.round((blurFadeReduce - navBlurAmount) * 100) / 100;
        console.log(blurFadeReduce);

    const newNode = document.createElement("div");
    newNode.setAttribute("class", "blurFade");
    newNode.setAttribute("style", "opacity: " + blurFadeReduce2 + "%; height: 1px;");
    const textNode = document.createTextNode("")
    newNode.prepend(textNode);
    const list = document.getElementsByClassName("navbar-blur-fade")[0];
    list.insertBefore(newNode, list.children[0]);

}
}
shit();

