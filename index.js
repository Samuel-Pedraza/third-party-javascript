
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (request.readyState < 4) {
    return;
  }
  if (request.status !== 200) {
    return;
  }
  if (request.readyState === 4) {
    successCallback();
    lookupIPlocation.open("GET", "https://freegeoip.net/json/" + successCallback(), true);
    console.log("https://freegeoip.net/json/" + successCallback());
	lookupIPlocation.send();
  }
};

request.open("GET", "https://api.ipify.org/", true);
request.send();

var lookupIPlocation = new XMLHttpRequest();

lookupIPlocation.onreadystatechange = function(){
  if (request.readyState < 4) {
    return;
  }
  if (request.status !== 200) {
    return;
  }
  if (request.readyState === 4) {
    returnMyLocation();
  }
}

function successCallback() {
  return request.response;
};

returnMyLocation = function() {
  document.getElementById("myip").value = JSON.parse(lookupIPlocation.response).zip_code;
};


var myHtmlForm = "<form action='https://formspree.io/samdpedraza@gmail.com' method='POST'><h4>Quick Quote</h4><input type='email' name='_replyto' placeholder='email'><br><input type='text' name='qty' placeholder='specify quantity'><textarea name='specify' placeholder='Specify a particulary product on this page'></textarea><input type='hidden' id='myip' name='myip' value=''><input type='hidden' name='url' value='" + window.location.href + "'><br><input type='submit' value='Send'></form><script type='application/javascript' src='https://api.ipify.org?format=jsonp&callback=getIP'></\script>";

document.getElementById('498598754783429084329085897579hsdfahbfskr3uh3289498fehnesnfanfwe89').innerHTML = myHtmlForm;