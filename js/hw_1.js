// // Задача 1.

let a = document.body.querySelector('p').textContent; 

console.log(`${a}`);



// // Задача 3.


let getTextFromUl = (ul) => {
    let l = Array.prototype.slice.call(ul.querySelectorAll("a"));
    return l.map((a) => {return a.textContent});
};

let u = document.body.querySelector("ul");
let l = getTextFromUl(u);

console.log(l);



// // Задача 4.


let x = '';

document.body.querySelector('div article p').childNodes.forEach((node) => {
    x += node.nodeType === 3 ?"-text-" : node.outerHTML;
});

document.body.querySelector('div article p').innerHTML = x;    
