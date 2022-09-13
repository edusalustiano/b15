function mostra2(){
 
    if(document.getElementById('mb').style.display == "none"){

        document.getElementById('mb').style.display = "black";
        document.getElementById('ma').style.display = "none";

    }else{document.getElementById('mb').style.display = "none";
    

    }if(document.getElementById('mb').style.display === "block"){
        document.getElementById('cinema').style.display = "none";
        document.getElementById("demo").src="";
      }else{
        document.getElementById('cinema').style.display = "block";
      }

}