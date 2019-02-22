!function(e){var n={};function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(o,s,function(n){return e[n]}.bind(null,s));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(0);function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,n,t){return n&&s(e.prototype,n),t&&s(e,t),e}var i=function(){function e(){o(this,e),this.scoreField=document.createElement("span")}return a(e,[{key:"render",value:function(e){this.scoreField.classList.add("board__score"),e.appendChild(this.scoreField),this.scoreField.innerHTML="0"}}]),e}(),r=function(){function e(){o(this,e),this.field=document.createElement("div"),this.fieldClass="board__field"}return a(e,[{key:"render",value:function(e){this.field.classList.add(this.fieldClass),e.appendChild(this.field)}}]),e}(),c=function(){function e(){o(this,e),this.board=document.createElement("div"),this.boardClass="board"}return a(e,[{key:"render",value:function(e){this.board.classList.add(this.boardClass);for(var n=1;n<=600;){(new r).render(this.board),n++}e.appendChild(this.board)}}]),e}();t(1);var l=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.directions="up",this.length=3,this.body=[{x:15,y:7},{x:15,y:8},{x:15,y:9}]};t(2);var u=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=Math.floor(30*Math.random()),this.y=Math.floor(20*Math.random())};t(3);function h(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameOverScreen=document.createElement("div"),this.gameOverMsg0="",this.gameOverMsg1="",this.gameOverMsg2=""}var n,t,o;return n=e,(t=[{key:"show",value:function(){var e=document.querySelector("body");this.gameOverScreen.classList.add("game-over__screen"),this.gameOverScreen.innerHTML='<div class="game-over__box"><h1 class="game-over__heading">Game over</h1>'+'<p class="game-over__msg">'.concat(this.gameOverMsg0,"</p>")+'<p class="game-over__msg">'.concat(this.gameOverMsg1,"</p>")+'<p class="game-over__msg">'.concat(this.gameOverMsg2,"</p>")+'<button class="game-over__button"><span><i class="game-over__button-angle fas fa-angle-double-right fa-xs"></i></span>play again<i class="game-over__button-angle fas fa-angle-double-left fa-xs"></i></button></div>',e.appendChild(this.gameOverScreen)}},{key:"hide",value:function(){this.gameOverScreen.classList.contains("game-over__screen")&&this.gameOverScreen.remove()}}])&&h(n.prototype,t),o&&h(n,o),e}();function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var v=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.snake=new l,this.score=0,this.on=!0,this.fields=document.querySelectorAll(".board__field"),this.gameOverScreen=new d}var n,t,o;return n=e,(t=[{key:"index",value:function(e,n){return e+30*n}},{key:"showScore",value:function(){document.querySelector(".board__score").innerHTML=this.score}},{key:"isFoodInsideSnake",value:function(){for(;this.fields[this.index(this.food.x,this.food.y)].classList.contains("snake");)this.food=new u}},{key:"showFood",value:function(){this.food=new u,this.isFoodInsideSnake();var e=this.index(this.food.x,this.food.y);this.fields[e].classList.add("food")}},{key:"showSnake",value:function(){var e=this,n=this.snake.body.map(function(n){return e.index(n.x,n.y)});document.querySelectorAll(".snake").forEach(function(e){return e.classList.remove("snake")}),n.forEach(function(n){e.fields[n].classList.add("snake")})}},{key:"moveSnake",value:function(){var e;switch(this.snake.directions){case"right":e={x:this.snake.body[0].x+1,y:this.snake.body[0].y};break;case"left":e={x:this.snake.body[0].x-1,y:this.snake.body[0].y};break;case"up":e={x:this.snake.body[0].x,y:this.snake.body[0].y-1};break;case"down":e={x:this.snake.body[0].x,y:this.snake.body[0].y+1}}this.snake.body.unshift(e),this.snake.body.pop(),this.gameOver(),this.on&&(this.showSnake(),this.checkFoodCollision())}},{key:"turnSnake",value:function(e){switch(e.key){case"ArrowRight":case"ArrowLeft":("down"===this.snake.directions||"up"===this.snake.directions)&&this.changeDirection(e.key);break;case"ArrowUp":case"ArrowDown":("right"===this.snake.directions||"left"===this.snake.directions)&&this.changeDirection(e.key)}}},{key:"feedSnake",value:function(){var e,n=this.snake.body.length-1,t=this.snake.body.length-2;this.snake.body[n].x===this.snake.body[t].x&&(e=this.snake.body[n].y>this.snake.body[t].y?{x:this.snake.body[n].x,y:this.snake.body[n].y+1}:{x:this.snake.body[n].x,y:this.snake.body[n].y-1}),this.snake.body[n].y===this.snake.body[t].y&&(e=this.snake.body[n].x<this.snake.body[t].x?{x:this.snake.body[n].x-1,y:this.snake.body[n].y}:{x:this.snake.body[n].x+1,y:this.snake.body[n].y}),this.snake.body.push(e)}},{key:"changeDirection",value:function(e){switch(e){case"ArrowRight":this.snake.directions="right";break;case"ArrowLeft":this.snake.directions="left";break;case"ArrowUp":this.snake.directions="up";break;case"ArrowDown":this.snake.directions="down"}}},{key:"checkFoodCollision",value:function(){this.food.x===this.snake.body[0].x&&this.food.y===this.snake.body[0].y&&(this.feedSnake(),this.score++,this.showScore(),this.hideFood(),this.food=new u,this.showFood())}},{key:"hideFood",value:function(){document.querySelectorAll(".food").forEach(function(e){return e.classList.remove("food")})}},{key:"checkSelfCollision",value:function(){for(var e=1;e<this.snake.body.length;e++)if(this.snake.body[e].x===this.snake.body[0].x&&this.snake.body[e].y===this.snake.body[0].y)return console.log("kolizja"),!0}},{key:"checkWallCollision",value:function(){return this.snake.body[0].x>29||this.snake.body[0].x<0||this.snake.body[0].y>19||this.snake.body[0].y<0}},{key:"showGameOverScreen",value:function(){this.gameOverScreen.show()}},{key:"printGameOverMsg",value:function(){this.score>=5&&(this.gameOverScreen.gameOverMsg0="Congratulations!",this.checkSelfCollision()&&(this.gameOverScreen.gameOverMsg2="You ate your own tail though. Not cool."),this.checkWallCollision()&&(this.gameOverScreen.gameOverMsg2="You hit a wall though. Ouch.")),this.score?1===this.score?this.gameOverScreen.gameOverMsg1="You got 1 point.":this.score>1&&(this.gameOverScreen.gameOverMsg1="You got ".concat(this.score," points.")):this.gameOverScreen.gameOverMsg1="You got 0 points? Really?"}},{key:"hideGameOverScreen",value:function(){this.gameOverScreen.hide(),console.log("chowam screen")}},{key:"gameOver",value:function(){(this.checkWallCollision()||this.checkSelfCollision())&&(this.on=!1,clearInterval(this.moveInterval),this.printGameOverMsg(),this.showGameOverScreen())}},{key:"start",value:function(e){var n,t=this;switch(e){case"level-1":n=200;break;case"level-2":n=100;break;case"level-3":n=50}this.showScore(),this.moveInterval=setInterval(function(){t.moveSnake()},n)}}])&&f(n.prototype,t),o&&f(n,o),e}();t(4);function y(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.welcomeScreen=document.createElement("div"),this.welcomeMsg0="Choose your level",this.welcomeMsg1="",this.welcomeMsg2="",this.counter=3}var n,t,o;return n=e,(t=[{key:"show",value:function(){var e=document.querySelector("body");this.welcomeScreen.classList.add("welcome__screen"),this.welcomeScreen.innerHTML='<div class="welcome__box"><h1 class="welcome__heading">Ready to play ?</h1>'+'<p class="welcome__msg">'.concat(this.welcomeMsg0,"</p>")+'<p class="welcome__msg">'.concat(this.welcomeMsg1,"</p>")+'<p class="welcome__msg">'.concat(this.welcomeMsg2,"</p>")+'<button id="level-1" class="welcome__start-button"><span><i class="welcome__button-angle fas fa-angle-double-right fa-xs"></i></span>level 1<i class="welcome__button-angle fas fa-angle-double-left fa-xs"></i></button><button id="level-2" class="welcome__start-button"><span><i class="welcome__button-angle fas fa-angle-double-right fa-xs"></i></span>level 2<i class="welcome__button-angle fas fa-angle-double-left fa-xs"></i></button><button id="level-3" class="welcome__start-button"><span><i class="welcome__button-angle fas fa-angle-double-right fa-xs"></i></span>level 3<i class="welcome__button-angle fas fa-angle-double-left fa-xs"></i></button></div>',e.appendChild(this.welcomeScreen)}},{key:"hide",value:function(){this.welcomeScreen.classList.contains("welcome__screen")&&this.welcomeScreen.remove()}},{key:"showCounter",value:function(){var e=this;this.welcomeScreen.innerHTML='<div class="welcome__box">'+'<div class="welcome__counter">'.concat(this.counter,"</div>")+"</div>";var n=setInterval(function(){e.counter--,e.welcomeScreen.innerHTML='<div class="welcome__box">'+'<div class="welcome__counter">'.concat(e.counter,"</div>")+"</div>",0===e.counter&&(clearInterval(n),document.querySelector(".welcome__counter").innerHTML="start!")},1e3)}}])&&y(n.prototype,t),o&&y(n,o),e}();t(5);document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("app"),n=new m;n.show(),(new i).render(e),(new c).render(e),document.addEventListener("click",function(e){if(e.target.matches(".welcome__start-button")){var t=e.target.id;n.showCounter(),setTimeout(function(){n.hide(),b(t)},4e3)}}),document.addEventListener("click",function(e){e.target.matches(".game-over__button")&&location.reload()}),document.addEventListener("keydown",function(e){" "===e.key&&(document.querySelector(".welcome__screen")&&!document.querySelector(".welcome__counter")&&(n.showCounter(),setTimeout(function(){n.hide(),b(id)},4e3)),document.querySelector(".game-over__screen")&&location.reload())})});var b=function(e){var n=new v;document.addEventListener("keydown",function(e){n.turnSnake(e)}),n.showSnake(),n.showFood(),n.start(e)}}]);