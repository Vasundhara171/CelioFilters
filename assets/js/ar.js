// AFRAME.registerComponent('photomode', {
//     init: function ()
// 	{
// 		const container = document.getElementById('photoModeContainer')
// 		const image = document.getElementById('photoModeImage')
// 		const shutterButton = document.getElementById('shutterButton')
// 		const closeButton = document.getElementById('closeButton')
//         console.log( )
// 		// Container starts hidden so it isn't visible when the page is still loading
// 		container.style.display = 'block'

// 		closeButton.addEventListener('click', () =>
// 		{
// 			container.classList.remove('photo')
// 			setTimeout(() =>
// 			{
// 				// Tell the restart-camera script to stop watching for issues
// 				window.dispatchEvent(new Event('ensurecameraend'))
// 			}, 1000)
// 		})

// 		shutterButton.addEventListener('click', () =>
// 		{
// 			// Emit a screenshotrequest to the xrweb component
// 			this.el.sceneEl.emit('screenshotrequest')

// 			// Show the flash while the image is being taken
// 			container.classList.add('flash')
// 		})

// 		this.el.sceneEl.addEventListener('screenshotready', e =>
// 		{
//             console.log(e)
// 			// Hide the flash
// 			container.classList.remove('flash')

// 			// If an error occurs while trying to take the screenshot, e.detail will be empty.
// 			// We could either retry or return control to the user
// 			if (!e.detail)
// 			{
// 				return
// 			}

// 			// e.detail is the base64 representation of the JPEG screenshot
// 			image.src = 'data:image/jpeg;base64,' + e.detail

// 			// Show the photo
// 			container.classList.add('photo')

// 			// Tell the restart-camera script to start watching for issues
// 			window.dispatchEvent(new Event('ensurecamerastart'))
// 		})
// 	}
//   });


function ar() {
  window.print()
}

var i = 10;
function timer(){
  if (--i < 0) 
  {
    document.getElementsByTagName('h1')[0].style.display="none"
    //document.getElementsByTagName('retake')[0].style.display="none"
     return ar();
  }

  setTimeout(function(){
      document.getElementsByTagName('h1')[0].innerHTML = i;
    timer()
  }, 1000);
}
timer()

setTimeout(()=>{
document.getElementById('retake').style.display="block"
},12000)
