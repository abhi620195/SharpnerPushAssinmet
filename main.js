function saveToLocalstorage(event)
{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    let myObj = 
    {
        name,
        email
    }
    
    localStorage.setItem(myObj.email,JSON.stringify(myObj));
    showUserOnScreen(myObj)
    // console.log(myObj_deserialized)
}

function showUserOnScreen(myObj)
{
    const parentElem = document.getElementById('listOfitems')
    parentElem.innerHTML = `${myObj.name} - ${myObj.email}`
}