var button= document.getElementById('count');
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTMl=L=counter.toString();
}