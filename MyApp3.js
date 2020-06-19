function Calucation (){
	var EnglishMarks=parseInt(document.getElementById("ENG").value);
    var MathMarks=parseInt(document.getElementById("Maths").value);
	var PhysicsMarks =parseInt(document.getElementById("PHYS").value);
	var ScienceMarks=parseInt(document.getElementById("Sci").value);
	var HindiMarks=parseInt(document.getElementById("HIN").value); 
	var Total=EnglishMarks+MathMarks+PhysicsMarks+ScienceMarks+HindiMarks;
	document.getElementById("Total").innerHTML=Total;
	var Percent=(Total/500)*100;
	document.getElementById("Percent").innerHTML=Percent;

	
	if(Percent>=80 && Percent<=100)
	{
		var grade=document.getElementById("Grade")
		    grade.style.color="Green" 
			grade.innerHTML="A One";
	}
	
	else if(Percent>=70 && Percent <80){
		
		var grade=document.getElementById("Grade")
	
		grade.style.color="Blue";
		grade.innerHTML="B";
	}
	else if(Percent >=60 && Percent <70){
		var grade=document.getElementById("Grade")
		grade.style.color="lightblue";
		grade.innerHTML="C";
	}
	else if (Percent>=0 && Percent<60){
		var grade=document.getElementById("Grade")
		grade.style.color="Red";
		grade.innerHTML="F"
	}
