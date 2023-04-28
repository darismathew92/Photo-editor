
const canvas= document.getElementById('canvas');
const ctx=canvas.getContext('2d');

const reader = new FileReader();
var img = new Image();



const uploadImage = e => {
	reader.onload = () => {
		img.onload=()=>{
			canvas.width=img.width;
			canvas.height=img.height;
			ctx.drawImage(img,0,0,canvas.width, canvas.height);
		};
		img.src = reader.result;
	};
	reader.readAsDataURL(e.target.files[0])
};




//range slider for hue change

function change(){
    var sat= document.getElementById("satSlider").value;
	var hue= document.getElementById("hueSlider").value;
	var cr= document.getElementById("crSlider").value;
	var bri= document.getElementById("brSlider").value;
	var brl= document.getElementById("blrSlider").value;

	ctx.filter ='hue-rotate('+hue+'deg) brightness('+bri+'%) blur('+brl+'px) saturate('+sat+') contrast('+cr+'%)';
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
    


// // download

const imageLoader = document.getElementById('selectedImage');
imageLoader.addEventListener('change',uploadImage);

function download(){
	const image = canvas.toDataURL();
	const link = document.createElement('a');
	link.href = image;
	link.download = 'image.png';
	link.click();
}

document.querySelector('#he').addEventListener('click',download);


//zoom
function setZoom(zoom,el) {
      
	transformOrigin = [1,1];
	  el = el || instance.getContainer();
	  var p = ["webkit", "moz", "ms", "o"],
		  s = "scale(" + zoom + ")",
		  oString = (transformOrigin[0] * 50) + "% " + (transformOrigin[1] *50) + "%";

	  for (var i = 0; i < p.length; i++) {
		  el.style[p[i] + "Transform"] = s;
		  el.style[p[i] + "TransformOrigin"] = oString;
	  }

	  el.style["transform"] = s;
	 el.style["transformOrigin"] = oString;
	
}

//setZoom(5,document.getElementsByClassName('container')[0]);

function showVal(a){
 var zoomScale = Number(a)/10;
 setZoom(zoomScale,document.getElementsByClassName('imghold')[0])
}