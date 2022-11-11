//1
// const allElements = document.querySelectorAll('li.item');
// console.log(`Number of categories: ${allElements.length}`);

// for (const element of allElements) {
//     console.log(`Category: ${element.firstElementChild.textContent}`);
//     console.log(`Elements: ${element.querySelectorAll("li").length}`);
// }

2

allElements.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
})
