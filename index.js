// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = '<h1>Subscriptions on social Platforms<h1>';

appDiv.style.textAlign = "center";
appDiv.style.fontSize = "0.5rem";
appDiv.style.padding = "0.4em";

// console.log(appDiv);

//Working with the subscription section
const mainWork = document.querySelector(".main_content");

//First create a title for social Platform
const title = document.createElement("h3");

//Pass in the text
title.innerText = "Youtube";

//Add a class to it
title.className = "head_text";

//create img tag for an icon
const icon = document.createElement("img");

//Provide a class for it
icon.className = "icon_img";

//Then set its attribute
icon.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkk9r86LY1vBhI4WWIoyyvOvJnPH_K4muHHFaxiNYHP11E9SWT3hv4ggpQWSmq7dTXMY&usqp=CAU");

//****END OF ICON SECTION****/

//Creating youtube likes section
const youtube = document.createElement("div");

//Give it className
youtube.className = "counter";

//Give it an attribute
youtube.setAttribute("data-target", "2500000");

//Add inner text to it
youtube.innerText = 0;

//Then we append the elements to the main div
mainWork.appendChild(title);
mainWork.appendChild(icon);
mainWork.appendChild(youtube);

//*** */  END OF YOUTUBE SECTION DETAILS******//

// Twitter section///
//First create a title for social Platform
const titleTwit = document.createElement("h3");

//Pass in the text
titleTwit.innerText = "Twitter";

//Add a class to it
titleTwit.className = "twit_text";

//create img tag for an icon
const iconTwit = document.createElement("img");

//Provide a class for it
iconTwit.className = "icon_img";

//Then set its attribute
iconTwit.setAttribute("src", "https://image.pngaaa.com/706/15706-middle.png");

//****END OF ICON SECTION****/

//Creating youtube likes section
const twitter = document.createElement("div");

//Give it className
twitter.className = "counter";

//Give it an attribute
twitter.setAttribute("data-target", "4500000");

//Add inner text to it
twitter.innerText = 0;

//Then we append the elements to the main div
mainWork.appendChild(titleTwit);
mainWork.appendChild(iconTwit);
mainWork.appendChild(twitter);

//Working with the counter ///
const counters = document.querySelectorAll(".counter");
const speed = 3000;


counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    //The higher the speed the slower the inc
    const inc = target / speed;

    //check if count reaches target
    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      
      //set timeout function to run in ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  }

  updateCount();
})






