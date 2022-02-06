two=document.getElementById('two');
one=document.getElementById('one');
container= document.getElementsByClassName('container');
container[0].style.height=two.getBoundingClientRect().height + 'px';
showButton=document.getElementById('showButton');
hideButton=document.getElementById('hideButton');
function displayOne()
{
    two.style.position='absolute';
    two.style.left='50%';
    one.style.width='50%';
    one.style.position='fixed';
    showButton.style.width='0px';
    hideButton.style.display='block';
}
function hideOne()
{
    one.style.width='0px';
    two.style.left='0px';
    hideButton.style.display='none';
    showButton.style.width='40px';

} 

if(container[0].getBoundingClientRect().width <= 715)
{
  window.onscroll = function(event) {
    hideOne();
  };
}
