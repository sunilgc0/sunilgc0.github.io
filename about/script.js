var socialMedia = {
  facebook : 'http://facebook.com/sunilgc89',
  twitter: 'http://twitter.com/sunilgc',
  Linkedin: 'https://www.linkedin.com/in/sunilgc'
};

var socialList = function() {
  var  output = '<ul>', 
    myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output+= '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output+= '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia);