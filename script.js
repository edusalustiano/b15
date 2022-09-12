function mostra(id){
 
   

    if(document.getElementById(id).style.display == "block"){

        document.getElementById(id).style.display = "none";


    }else{document.getElementById(id).style.display = "block";

    }if(document.getElementById('ma').style.display === "block"){
        document.getElementById('cinema').style.display = "none";
        document.getElementById("demo").src="";
      }else{
        document.getElementById('cinema').style.display = "block";
      }

}
function bta(){

     document.getElementById("demo").src="a vingaça de scar.mp4";
     document.getElementById('ma').style.display = "none";
     document.getElementById('cinema').style.display = "block";

}
    

function bte(){
    document.getElementById("demo").src="videos/caçando ava bravo.mp4";
}

function bti(){
    document.getElementById("demo").src="videos/corpo fechado.mp4";
}
function bto(){
    document.getElementById("demo").src="videos/filme_blood.mp4" ;  
}

function btu(){
    document.getElementById("demo").src="videos/retorno a base.mp4" ;
}

function btb(){
    document.getElementById("demo").src="videos/verções de um crime.mp4";
}

function btc(){
    document.getElementById("demo").src="videos/video_sin_sity.mp4";
}

function btd(){
    document.getElementById("demo").src="videos/Revolta.mp4";
}

function bt1(){
    document.getElementById("demo").src="videos/até a morte.mp4";
}

function bt2(){
    document.getElementById("demo").src="videos/código imperador.mp4";
}

function bt3(){
    document.getElementById("demo").src="videos/sequestro.mp4";
}

function bt4(){
    document.getElementById("demo").src="videos/fera.mp4";
}
