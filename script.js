var myImage = document.getElementById("pics");

var imageArray = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,2000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};









