var text=".";
var delay=50;
var currentChar=1;
var destination="[not defined]";

function type()
{
  if (!document.getElementById)
    return;

  var dest = document.getElementById(destination);
  if (!dest)
    return;

  dest.innerHTML = text.substr(0, currentChar);
  currentChar++
  if (currentChar <= text.length)
  {
    setTimeout("type()", delay);
  }
}

function startTyping(textParam, delayParam, destinationParam)
{
  text=textParam;
  delay=delayParam;
  currentChar=1;
  destination=destinationParam;
  type();
}
