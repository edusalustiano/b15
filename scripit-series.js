
   
function mostra3(){ 

    
    if(document.getElementById('series').style.display == "block"){

        document.getElementById('series').style.display = "none";
       

    }else{document.getElementById('series').style.display = "block";
            document.getElementById('filmes').style.display = "none";

    }if(document.getElementById('series').style.display === "block"){
        document.getElementById('cinema').style.display = "none";
        document.getElementById("demo").src="";
      }else{
        document.getElementById('cinema').style.display = "block";
      }

}