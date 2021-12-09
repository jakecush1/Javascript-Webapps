

    let images=["https://web02.scwebsrv.com/web102/final%20project/root/images/floating/floating_large.png",
            "https://web02.scwebsrv.com/web102/final%20project/root/images/sail/sail_large.png",
            "https://web02.scwebsrv.com/web102/final%20project/root/images/band/band_large.png",
            "https://web02.scwebsrv.com/web102/final%20project/root/images/daver/daver_large.png",
            "https://web02.scwebsrv.com/web102/final%20project/root/images/hunterv/hunterv_large.png",
            "https://web02.scwebsrv.com/web102/final%20project/root/images/ybcboat/ybcboat_large.png",
            "https://web02.scwebsrv.com/web102/final%20project/root/images/young/young_large.png",
            "https://web02.scwebsrv.com/web102/final%20project/root/images/float/float_large.png",

]
   
    let paused = true
    let interval ;
    i=0;

    function slide(){

        if(i <= images.length-1){
            let myPicture = document.getElementsByClassName("changeMe");
            myPicture[0].src = images[i];
            i++;

        }
        
        else {
            i=0;
            slide();
        }
    }

//setInterval(slide,1000)



    function toggleSlide(){
        if (paused){
            interval = setInterval(slide, 2000);
            paused = false
        }
        else {
        clearInterval(interval);
        paused = true
        }
    }
    
toggleSlide()

    