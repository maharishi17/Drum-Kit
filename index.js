var hero=document.querySelectorAll(".drum").length;

for(var i=0; i<hero ;i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var car=this.innerHTML;
        san(car);
        animation(car);
    });

}


document.addEventListener("keypress", function(event){
    san(event.key);
    animation(event.key);
});


function san(hot){
    switch (hot) {
        case "w":
            var ram= new Audio("sounds/1.mp3");
            ram.play();
            break;

            case "a":
            var fad= new Audio("sounds/2.mp3");
            fad.play();
            break;

            case "s":
            var jam=new Audio("sounds/3.mp3");
            jam.play(); 
            break;

            case "d":
            var juk=new Audio("sounds/4.mp3");
            juk.play();
            break;

            case "j":
            var hum=new Audio("sounds/5.mp3");
            hum.play();
            break;

            case "k":
            var oop=new Audio("sounds/6.mp3");
            oop.play();
            break;

            case "l":
            var qwe=new Audio("sounds/7.mp3");
            qwe.play();
            break;
    
        default:console.log(hot);
            
    }
}



function animation(current){

    var jarr=document.querySelector("."+current);

    jarr.classList.add("pressed");


    setTimeout (function(){
        jarr.classList.remove("pressed");
    },100);

 


}