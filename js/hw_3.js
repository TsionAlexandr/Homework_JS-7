 // // Задача 1.

let u = document.body.querySelector("ul");
let e = u.children.length;
let arr = [
     document.createElement("li"),
     document.createElement("li"),        
];

arr.forEach((li) => {
     li.classList.add("new-item");
     li.textContent = "item " + (e++ + 1);
     u.appendChild(li);
});



 // // Задача 2.

 document.body.querySelectorAll("li a").forEach((a) => {
     let z = document.createElement("strong");
     z.textContent = " strong";
     a.appendChild(z);
 });


// // Задача 3.

let b = document.createElement("img");

b.src ="https://imgix.ranker.com/user_node_img/50027/1000522410/original/classic-wolverine-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces";
b.alt ="wolverine";

document.body.prepend(b);


 // // Задача 4.

let m = document.body.querySelector("mark");
m.classList.add("green");
m.append("green");



