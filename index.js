var myscript = "function getIP(json) { document.getElementsByTagName('head')[0].innerHTML = 'My public IP address is: ' + json.ip; }"

var myHtmlForm = "<script>" + myscript + "</\script><form action='https://formspree.io/samdpedraza@gmail.com' method='POST'><input type='email' name='_replyto' placeholder='email'><br><textarea name='specify' placeholder='Specify a particulary product on this page'></textarea><input type='hidden' name='myip' onload='getIP(json).value'><input type='hidden' name='url' value='" + window.location.href + "'><br><input type='submit' value='Send'></form><script type='application/javascript' src='https://api.ipify.org?format=jsonp&callback=getIP'></\script>";

document.getElementsByTagName("body")[0].innerHTML = myHtmlForm;