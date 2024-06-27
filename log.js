// create div container 

var container = document.createElement('div');//creating container like div //

container.style.width ='300px';//adding container width

container.style.padding = '20px';  //adding container padding  

container.style.borderRadius = '6px'; //adding container border radius

container.style.backgroundColor = 'white'; //adding container backgroundcolor

document.body.appendChild(container);  //we are giving the code written in the body to container


// Heading name using h2 tg

var heading = document.createElement('h2'); //creating heading tag

heading.textContent = 'Login';  //the text content of the head tag name is Login

heading.style.textAlign = 'center';  //we gave textalign style to come in content center

container.appendChild(heading);   //we are giving the code written in the container  to heading



// user lable & input values (username)

var userlable = document.createElement('label'); //creating label

userlable.textContent = 'UserName'; //the text content of the tag name is username

userlable.style.color = 'blue';  //the username color is blue

userlable.style.fontSize = '18px'; // the username fontsize is 18px

container.appendChild(userlable); // we are giving the code written in the container to userlable




var userinput = document.createElement('input');  //creating input 

userinput.type = 'text'; //creating type text

userinput.style.width = '100%'; //we give it 100% of width 

userinput.style.height = '25px'; //we give it 25px of height 

userinput.style.outline = 'none'; //we give it none of outline

userinput.style.margin = '15px 0'; //we give it 15px of margin

container.appendChild(userinput); // we are giving the code written in the container to userinput




// user lable & input values (password)

var passlable = document.createElement('label'); //creating label 

passlable.textContent = 'Password'; //the text content of the tag name is password

passlable.style.color = 'blue'; //adding blue color

passlable.style.fontSize = '18px'; //adding fontsize

container.appendChild(passlable);  // we are giving the code written in the container to passlable




var passinput = document.createElement('input'); //creating input 

passinput.type = 'password'; //creating type password
 
passinput.style.width = '100%';  //we give it 100% of width

passinput.style.height = '25px'; //we give it 25px of height

passinput.style.outline = 'none'; //we give it none of outline

passinput.style.marginTop = '15px'; //we give it 15px of margintop

container.appendChild(passinput); // we are giving the code written in the container to passinput





// create login button 

var btn = document.createElement('button'); //creating button

btn.textContent = 'login'; //we give login text

btn.style.width = '100%'; //we give it 100% of width

btn.style.height = '30px'; //we give it 30px of height

btn.style.fontSize = '18px'; //we give it 18px of fontsize

btn.style.textTransform = 'uppercase'; //we give it uppercase

btn.style.backgroundColor = 'blue'; //we give it blue  of bgcolor

btn.style.color = 'pink'; //we give it pink of color

btn.style.border = 'none'; //we give it none of border

btn.style.borderRadius = '6px'; //we give it 6px of border radius

btn.style.cursor = 'pointer'; //we give it pointer to curser

btn.style.marginTop = '15px'; //we give 15px of margintop

container.appendChild(btn); // we are giving the code written in the container to button

// now add the event for this login page.

btn.addEventListener('click', function(){
    var username = userinput.value;
    var password = passinput.value;

    if (username === 'ammu' && password === 'byreddy'){
        alert('log in successful');
    }
    else{
        alert('Incorrect username & password');
    }
});

