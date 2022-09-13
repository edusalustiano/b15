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

     document.getElementById("demo").src="https://video-private-assets.canva.com/VAFMG2V94IQ/v/91c3df4ddd.mp4?exp=1663114560000&cf-ck=i7-_UZjIvhQb8TDPZQmwA1Mqhnakrw20Q4Q3PalCLnU&cf-sig=Os820VP2l_T2QxkqaYSmLbAZDTHEHPg5_OPoRvW_zEk&cf-sig-kid=CO7cCjZ_YiI=&sig=8r0yBunQhUdpUFSlaMbZ-HQitaN5x5D5bLu84WXHoJ0&sig-kid=GzFgFdhXD-Q=";
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
