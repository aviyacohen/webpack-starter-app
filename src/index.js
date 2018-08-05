import _ from 'lodash';
import './style.css';
import puppy from './images/puppy.jpg';
import print from './print.js';

function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    let img = document.createElement('img');
    img.setAttribute('data-attribution', 'By Golden Trvs Gol twister - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=18521767');
    img.src = puppy;
    
    let btn = document.createElement('button');
    btn.innerHTML = 'print';
    btn.onclick = print;


    element.appendChild(img);
    element.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());