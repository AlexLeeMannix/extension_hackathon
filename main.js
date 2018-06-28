
let textNodeTags = ["h1","h2","h3","h4","h5","h6","p","li","span","strong","a"]

let targetedNodes = [];
for(let i = 0; i < textNodeTags.length; i++){
   let temp = document.querySelectorAll(textNodeTags[i]);

    for(let k = 0; k < temp.length;k++){
        // console.log(temp[k].innerHTML)
    temp[k].innerHTML = temp[k].innerHTML.replace(/\bdog\b/g,'doger');
    temp[k].innerHTML = temp[k].innerHTML.replace(/\bDog\b/g,'doger');
    temp[k].innerHTML = temp[k].innerHTML.replace(/\bdogs\b/g,'nyanDoge');
    temp[k].innerHTML = temp[k].innerHTML.replace(/\bDogs\b/g,'nyanDoge');


    temp[k].innerHTML = temp[k].innerHTML.replace(/\bcat\b/g,'satan');
    temp[k].innerHTML = temp[k].innerHTML.replace(/\bCat\b/g,'demonCreatures');
    temp[k].innerHTML = temp[k].innerHTML.replace(/\bcats\b/g,'nyanCats');
    temp[k].innerHTML = temp[k].innerHTML.replace(/\bCats\b/g,'nyanCats');

    }
}


// let test = document.querySelectorAll("body");

// test.forEach(element => element.parentNode.removeChild(element))

// let everything = document.createElement("body");
// let text = document.createElement("h1");
// text.innerText = "YOU AIN'T SUPPOSED TO BE HERE";
// let doge = document.createElement("img");
// doge.setAttribute("src","http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/3dDoge.gif");

// let html = document.querySelector("html");

// everything.appendChild(text);
// everything.appendChild(doge);

// html.appendChild(everything);
