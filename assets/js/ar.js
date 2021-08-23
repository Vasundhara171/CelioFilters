
   var i = 10;

   var image = document.querySelector('#snap');
    var take_photo_btn = document.querySelector('#take-photo');
    var delete_photo_btn = document.querySelector('#delete-photo');
    var download_photo_btn = document.querySelector('#download-photo');
   
    take_photo_btn.addEventListener("click", function (e) {
        e.preventDefault();
       
    var downloadTimer = setInterval(function(){
        if(i <= 0){
            i=10
          clearInterval(downloadTimer);
         document.getElementsByTagName('h1')[0].style.display="none"
              var video = document.querySelector('video');
              var snap = takeSnapshot(video);
            
              image.setAttribute('src', snap);
              image.classList.add('visible');
              
              delete_photo_btn.classList.remove("disabled");
              download_photo_btn.classList.remove("disabled");
            
              download_photo_btn.href = snap;
        } else {
            document.getElementsByTagName('h1')[0].style.display = "block";
            document.getElementsByTagName('h1')[0].innerHTML = i;
        }
        i -= 1;
      }, 1000);

       
    });
   
    delete_photo_btn.addEventListener("click", function(e){
        e.preventDefault();
      
        image.setAttribute('src', "");
        image.classList.remove("visible");
     
        delete_photo_btn.classList.add("disabled");
        download_photo_btn.classList.add("disabled");
    });
   

    function takeSnapshot(video) {
        var resizedCanvas = document.createElement("canvas");
        var resizedContext = resizedCanvas.getContext("2d");
        var width = video.videoWidth;
        var height = video.videoHeight;
        var aScene = document.querySelector("a-scene").components.screenshot.getCanvas("perspective");
        if (width && height) {
           
            resizedCanvas.width = width;
            resizedCanvas.height = height;
           
            resizedContext.drawImage(video, 0, 0, width, height);
           
            if (width > height) {
           
                resizedContext.drawImage(aScene, 0, 0, width, height);
            } else {
               
                var scale = height / width;
                var scaledWidth = height * scale;
                var marginLeft = (width - scaledWidth) / 2;
                resizedContext.drawImage(aScene, marginLeft, 0, scaledWidth, height);
            }
            return resizedCanvas.toDataURL('image/png');
        }
    }
  
    
      
    //   setTimeout(()=>{
    //   document.getElementById('retake').style.display="block"
    //   },12000)








