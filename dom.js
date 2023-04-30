// console.dir(document)

// console.log(document.domain)

var items = document.getElementsByClassName('list-group-item')
items[2].style.backgroundColor = "green";

for(var i = 0;i<items.length;i++)
{
    items[i].style.fontWeight = "bold"
    items[i].style.color = "red"
}