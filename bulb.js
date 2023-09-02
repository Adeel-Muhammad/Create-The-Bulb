const btn1= document.getElementById("btn1");
const btn2= document.getElementById("btn2");
const btn3= document.getElementById("btn3");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3= document.getElementById("img3");


btn1.addEventListener("click",chnageColor1);


function chnageColor1(){

    if(btn1.textContent.includes("on")){

        btn1.textContent="turn off";
    img1.src="./Images/60 watt orange bulb.webp";

    }

    else{


        btn1.textContent="turn on";
    img1.src="./Images/bulb1 off.avif";
    }

    
    

}

btn2.addEventListener("click",chnageColor2);

function chnageColor2(){
    if(btn2.textContent.includes("on")){

        btn2.textContent="turn off";
    img2.src="./Images/60 watt green bulb.jpg"

    }

    else{


        btn2.textContent="turn on";
    img2.src="./Images/bulb1 off.avif";
    }



}
btn3.addEventListener("click",chnageColor3);

function chnageColor3(){

    if(btn3.textContent.includes("on")){

        btn3.textContent="turn off"
    img3.src="./Images/60 watt purple bulb.jpg";

    }

    else{


        btn3.textContent="turn on";
    img3.src="./Images/bulb1 off.avif";
    }


}