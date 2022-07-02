player1_score=0;
player2_score=0;

function submit(){
 name1=document.getElementById("number1").value;
 name2=document.getElementById("number2").value;
 
 localStorage.setItem("number1",name1);
 localStorage.setItem("number2",name2);

 document.getElementById("first number").style.display=none;
 document.getElementById("second number").style.display=none;

 headingp="<h2 id='headingp'>"+name1+"x"+name2+"</h2>";
 inputbox="<input id='input-box' type='text'></input>";
 row=headingp+inputbox;
 document.getElementById("hello").innerHTML = row;
}


