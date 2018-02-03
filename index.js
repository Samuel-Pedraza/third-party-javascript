var myHtmlForm = "<form action='https://formspree.io/samdpedraza@gmail.com' method='POST'><input type='text' name='name'><input type='email' name='_replyto'><input type='hidden' name='myip'><input type='hidden' name='url' value='" + window.location.href + "'><input type='submit' value='Send'> </form>";

document.getElementsByTagName("body")[0].innerHTML = myHtmlForm;