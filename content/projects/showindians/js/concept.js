function highlightSpan(spanTitle)
{
var spans = document.getElementsByTagName("span");
//take away color
  for (var i = 0; i < spans.length; ++i)
  {
    spans[i].style.backgroundColor = "transparent";
  }
//add color
for (var i = 0; i < spans.length; ++i)
  {
  if (spans[i].getAttribute('title') == spanTitle)
  { 
    spans[i].style.backgroundColor = "#ebaf76";
    } 
  }

}