//1. [DOM] Add a background color 'yellow' and add a bottom border to the header 'Fiery Restaurant': solid, 5px and black color

//Step1: Use 'getElementById' to get the header and store it in a variable. 
//Note: Class name of header is 'headerTitle'.
var title = document.getElementById('headerTitle');


title.style.backgroundColor = "yellow";
title.style.borderBottom = "solid 2px #000";


//................lab 1 has done..........................


//2. [DOM] For all added items if it is veg then put the text color as green otherwise red

//Step1: Get all the Added items using 'getElementsByClassName'. 
//Note class name of the li items is 'list-group-item'
var items = document.getElementsByClassName('list-group-item')

//Step2: Itearate through each item and check if it contains "Veg". 
//If not contains "Veg" set the text color as "green" otherwise set it as "red"

for(var i=0; i<items.length; i++){
    if(items[i].textContent.includes("Veg")){
        //set colour to green
        items[i].style.color="green";
    }
    else{
        //set colour to red
        items[i].style.color="red";
    }
}



//.............lab 2 has done...........................

//3. [DOM] Make sure user should add and remove item

//Step1: Use 'getElementById' to get the form whose id is 'addForm'. 
//And also get the ul list of added items whose id is 'items'.
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


//form submit event
form.addEventListener('submit', addItem);
//delete event
// form.removeEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);


function addItem(ev){
    ev.preventDefault();

    //Step2: Get the input value from input tag whose id is 'newitem'.
    var newItem = document.getElementById('newitem').value;

    //creare li element
    var li = document.createElement('li');
    //Add class
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    //adding delelte button

    //Step3: Create the delete button with class names "btn btn-danger float-right btn-sm delete"
    var deleteBtn = document.createElement('button');
    deleteBtn.className="btn btn-danger float-right btn-sm delete";

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    //assigning price
    //Step4: Similarly create span for price with class name "float-right" and 
    //id "price-item" add default price of 180 to the item. 
    //Set the style of span as 'margin-right: 100px;'. 
    // var price=
    var price = document.createElement('span');
    price.className = "float-right";
    price.id = "price-item";
    price.style="margin-right: 100px";
    
    price.appendChild(document.createTextNode('180'));
    li.appendChild(price);
    
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



//...................lab-3 has done.......................

//4. [DOM] Use query selector to change to the background of odd place items as lightgray

//Step1: Get all the odd place items in variable 'oddItems' in Added Items using querySelector.
var oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
//Note the li class name of items is 'list-group-item'

//Step2: Iterate through above list and set the background color as 'lightgray'.
for(var i=0; i<oddItems.length; i++){
   // oddItems[i].style="background: lightgray";
   
      oddItems[i].style.backgroundColor = "lightgray";
   
   //write the code here
}

//........................lab-4 has done.....................