console.log("/////TASK_1/////");
const categoryList = document.querySelectorAll("#categories .item");


console.log("Number of categories: " + categoryList.length)
categoryList.forEach(element => {
  console.log("Category: "+ element.querySelector('h2').innerText);
  console.log("Elements: "+element.querySelectorAll("ul li").length);
});
console.log("/////////////////");