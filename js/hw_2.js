// // Задача 1.

document.body.querySelector("ul").classList.add("list");



// // Задача 2.

document.body.querySelector("ul ~ a").id = "link";


// // Задача 3.

document.body.querySelectorAll("ul li").forEach((li, i) => {
    if (!(i%2)) {
        li.classList.add("item");
    }
});


// // Задача 4.

document.body.querySelectorAll("a").forEach((a) => {
    a.classList.add("custom-link");
});
