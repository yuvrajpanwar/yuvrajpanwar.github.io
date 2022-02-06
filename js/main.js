"use strict"
const two=document.getElementById('two');
const one=document.getElementById('one');
const container= document.getElementsByClassName('container');
container[0].style.height=two.getBoundingClientRect().height + 'px';
const showButton=document.getElementById('showButton');
const hideButton=document.getElementById('hideButton');
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
