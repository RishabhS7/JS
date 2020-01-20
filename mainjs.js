var x,y,z;
x=10;
y=6;
z=x+y;

function handle(){
    
//    document.querySelector('#btn').addEventListener('click',(e)=>{
        //e.preventDefault()
        document.getElementById('demo').innerHTML='Font size is bigger now';
        document.getElementById('demo').style.fontSize='40px';
        document.getElementById('demo1').style.display='none';
//})
}
        
    


function handle1(){
    
    document.querySelector('#btn1').addEventListener('click',(e)=>{
        e.preventDefault()
        document.getElementById('demo').innerHTML='Font size goes smaller';
        document.getElementById('demo').style.fontSize='10px';
        document.getElementById('demo1').style.display='block';
        document.getElementById('demo2').innerHTML=z;
       // document.write(4+10); will delete all existing html should ony be used for testing
    })

}
function ans(p1,p2){
    return p1*p2;
}
var person={
    firstname:"Rishabh",
    lastname:"Singh",
    id:"5566",
    fullName : function(){
    return this.firstname + " " + this.lastname;
}
};
alert(person.firstname);

//document.getElementById('demo2').innerHTML=ans(4,3);
function handle3(){
    document.getElementById('demo3').innerHTML=ans(7,8);
    alert("its working");
    document.getElementById('demo5').innerHTML=person.fullName();
    //document.getElementById('demo5').innerHTML = person.fullName();

}


//I am creting an object

var car = {type:"Maruti",model:"500",color:"white"};
//document.getElementById('demo4').innerHTML=z;

document.getElementById('demo4').innerHTML="The car type is" + car.type;


//Common HTML events
/*onchange - an HTML element has been changed
  onclick -  the user clicks an HTML element
  onmouseover - the user moves the mouse over an HTML element
  onmouseout - the user moves the mouse away from html element
  onkeydown  - the user pushes a keyboard key
  onload - the browser has finished loading page
  */

  



 function handle4() {
    var str = document.getElementById("demo7").innerHTML; 
    var txt = str.replace("Banana","W3Schools");
    document.getElementById("demo7").innerHTML = txt;
  }
  //delete fruits[0]; deletes fruit at array number 0

  //fruits.splice(2,0,"Lemon","Kiwi");
  // var myChilder = my.concat(myBoys);//concats  2 arrayscan concat more than 2 elements too
  //arrname.sort();// sorts the elements of 
  // arrname.reverse();revrse the order of the elements

  function handle5(){
      var d = new Date();
      document.getElementById("demo10").innerHTML = d;
  }


  function handle6(){
  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
  }
}
  document.getElementById("demo11").innerHTML = "Today is " + day;


  class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

mycar = new Car("Ford");
document.getElementById('demo13').innerHTML = mycar.present();
 