// console.dir(document)

// console.log(document.domain)

// var items = document.getElementsByClassName('list-group-item')
// items[2].style.backgroundColor = "green";

// for(var i = 0;i<items.length;i++)
// {
//     items[i].style.fontWeight = "bold"
//     items[i].style.color = "red"
// }

// GETELEMENTBYCLASSNAME
// var items =  document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'yellow';

// for(var i = 0;i<items.length;i++)
// {
//     items[i].style.backgroundColor = 'black'
// }


// GETELEMENTBYTAGNAME

// var li =  document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// // li[1].textContent = 'Hello2';

// for(var i = 0;i<li.length;i++)
// {
//     li[i].style.backgroundColor = 'lightpink'
// }

// li[4].style.fontWeight = 'bold';
// li[4].style.backgroundColor = 'yellow';

//QUERYSELECTOR //

// var second_item = document.querySelector('.list-group-item:nth-child(2)');

// second_item.style.backgroundColor = "green"

// var third_item = document.querySelector('.list-group-item:nth-child(3)');

// third_item.remove()


//QUERYSELECTORALL //

// var odd = document.querySelectorAll('li:nth-child(odd)')


// for(var i = 0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = "green"
// }

// var second_item = document.querySelectorAll('li:nth-child(even)')
// second_item[0].style.fontWeight = "bold"
// second_item[0].style.color = "green"


//TRAVERSING THE DOM//

var itemList = document.querySelector('#items')
// //parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode)

//childNodes
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// //FirstChild
// console.log(itemList.firstChild);
// //FirstElementChild
// itemList.firstElementChild.textContent = 'Hello2'

// //LastChild
// console.log(itemList.lastChild);
// //LastElementChild
// itemList.lastElementChild.textContent = 'Hello2'

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previouseElementSibling
// console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent = 'Hello World'

//CREATEELEMENT

//Create a div
var newDiv = document.createElement('div');

//Add class
newDiv.className= 'hello';

//Add id
newDiv.id= 'hello1';

//Add attr
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDivText= document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// console.log(newDivText)

container.insertBefore(newDiv, h1)
newDiv.style.fontSize = '30px'