'use strict';

var block = document.querySelector('.boddy-1');
document.querySelector('.spanny-1').addEventListener('mouseover', function() {
  block.style.background = '#fff4d6';
  this.addEventListener('mouseout', function() {
    block.style.background = '';
  });
});
