var posTop=0;
var posLeft=0;

if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion',function(evt){
            accelerationX=evt.accelerationIncludingGravity.x;
            accelerationY=evt.accelerationIncludingGravity.y;            console.log(accelerationX);

            var circulo = document.getElementById("circulo");

            if(accelerationX>2){
                posLeft+=5;
            } else if(accelerationX<-2) {
                posLeft-=5;
            }
            
            if(accelerationY>2){
                posTop+=5;
            } else if(accelerationY<-2) {
                posTop-=5;
            }            
            circulo.style.left= (posLeft+"px");
            circulo.style.top= (posTop+"px");

            //accelerationY=evt.accelerationIncludingGravity.y;
            //accelerationZ=evt.accelerationIncludingGravity.z;
        },false);   
} else {
    console.log("no soporta");
}