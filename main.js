
 //🔍 HINT: THis is an example of how to rotate the hand!
// - You should use setInterval.
// how do we use set interwal?

//select the hand
const hand = document.querySelector(".hand");
//set up the function to move the hand


function moveHand(){
    var dt = new Date( ).getSeconds();    
    var deg = dt*6;
    hand.style.transform = `rotate(${deg}deg)`
    console.log("second")
    console.log(dt);
}


//set up interval to start running the function 
setInterval (moveHand, 1000);
//set stop interval after sixty seconds


const min = document.querySelector("#min");
//set up the function to move the hand


function moveMin(){
    var dtm = new Date( ).getMinutes();    
    var mDeg = dtm*6;
    min.style.transform = `rotate(${mDeg}deg)`
    console.log("min")
    console.log(dtm);
}


//set up interval to start running the function 
setInterval (moveMin, 1000);

const hour = document.querySelector("#hour");
//set up the function to move the hand


function moveHour(){
    var dth = new Date( ).getHours();    
    var hDeg = dth*30;
    hour.style.transform = `rotate(${hDeg}deg)`
    console.log("hour")
    console.log(dth);
}


//set up interval to start running the function 
setInterval (moveHour, 1000);


