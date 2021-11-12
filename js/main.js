"use strict"
//Handler for siderbar actions
import sidebarHandler from './helpers/sidebar.js'
//Language Database
import {Languages}  from './helpers/data.js'
//Tools Database
import {Tools} from './helpers/data.js'
//Beginner Database
import {Beginner} from './helpers/data.js'
//Best Lang Database
import {Best} from './helpers/data.js'
let micIcon;
let cardContainer;
window.onload = ()=>{
    //Getting Card Container
    //This is for search results. They are going to be appended here.
    cardContainer = document.querySelector(".card-container");
   
    //Speech Synthesis Set up
    let msg = new SpeechSynthesisUtterance();
    sidebarHandler();

    //Microphone Icon handling
    micIcon = document.querySelector(".mic-icon");
    micIcon.addEventListener("click",function(){
       micIcon.classList.toggle("listenning");
       micIcon.classList.add("listennings");
        recognition.start();
    })
    //Setting up Speech Recognition
    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition =  new SpeechRecognition();
    //Listening and converting speech to text
    recognition.addEventListener('result',function(e){
        const text = e.results[0][0].transcript;
        console.log(text)
        //Actions for each phrase
      switch(text.toLowerCase()){
          case "hello jeffrey":{
              msg.text = "Hello Master!"
              window.speechSynthesis.speak(msg);
              break;
          }
          case "how are you":{
            msg.text = "im doing great "
            window.speechSynthesis.speak(msg);
            break;
          }
          case "show languages":{
            msg.text = "showing languages"
            window.speechSynthesis.speak(msg);
            cardCreator(Languages);

            break;
          }
          case "do you like programming":{
            msg.text = "Programming is fun, I love it"
            window.speechSynthesis.speak(msg);
            break;
          }
          case "show technologies":{
            msg.text = "showing technologies"
            window.speechSynthesis.speak(msg);
              cardCreator(Tools);
            break;
          }
          case "show beginner":{
            msg.text = "showing beginner resources"
            window.speechSynthesis.speak(msg);
              cardCreator(Beginner);
            break;
          }
          case "what time is it":{
           const d = new Date();
           msg.text = d.getHours() + ":" + d.getMinutes();
           window.speechSynthesis.speak(msg);
           cardCreator(Beginner);
            break;
          }
          case "show best language":{
            msg.text ="There is no such thing as a best language. You have to be the best! I believe in all of you, you will become a great developer"
            window.speechSynthesis.speak(msg);
            cardCreator(Best);
            break;
           }
           case "you're a great friend jeffrey":
          {
            msg.text= "Aw thank you. You are going to make me cry"
            window.speechSynthesis.speak(msg)
            break;
          }
          case "make a joke":{
              msg.text =" Knock Knock"
              window.speechSynthesis.speak(msg)
              break;
          }
          case "who is there":{
            msg.text ="ONLY KGB ASKS QUESTIONS. Slaps your face"
            window.speechSynthesis.speak(msg)
            const img = document.createElement("img")
            img.setAttribute("src", "assets/images/kgb.png")
            cardContainer.appendChild(img)
            break;
        }
      }
    })
    recognition.addEventListener('end',function(e){
       micIcon.classList.toggle("listenning");
    })
    
    
   
}


function cardCreator(arr){
    cardContainer.innerHTML="";
    console.log("hi")
    arr.forEach(el => {
        //Custom Card
        const card = document.createElement("div")
        card.classList.add("custom-card");
        card.classList.add("col-12");
        card.classList.add("col-md-4");

        //Image
        const imgBox = document.createElement("div")
        imgBox.classList.add("img-box");
        const img = document.createElement("img")
        img.setAttribute("src",el.image);
        imgBox.appendChild(img);
        //Text
        const textBox = document.createElement("div")
        textBox.classList.add("text-box");
        const h1 = document.createElement("h1")
        h1.textContent = el.name;
        const p = document.createElement("p");
        p.textContent = el.info;
        textBox.appendChild(h1);
        textBox.appendChild(p);
        card.appendChild(imgBox);
        card.appendChild(textBox)
        cardContainer.appendChild(card);
    });
}