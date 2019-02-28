!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var i=function(){function e(){o(this,e),this.field=document.createElement("div")}return a(e,[{key:"render",value:function(e){this.field.classList.add("board__field"),e.appendChild(this.field)}}]),e}(),r=function(){function e(){o(this,e),this.board=document.createElement("div"),this.scoreField=document.createElement("div"),this.pauseIcon=document.createElement("span")}return a(e,[{key:"render",value:function(){var e=document.getElementById("app");this.pauseIcon.classList.add("board__pause-icon"),this.scoreField.classList.add("board__score"),this.scoreField.innerHTML="0",this.board.classList.add("board");for(var t=1;t<=600;){(new i).render(this.board),t++}e.appendChild(this.pauseIcon),e.appendChild(this.scoreField),e.appendChild(this.board)}}]),e}();n(1);var c=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.directions="up",this.length=3,this.body=[{x:15,y:7},{x:15,y:8},{x:15,y:9}]};n(2);var l=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=Math.floor(30*Math.random()),this.y=Math.floor(20*Math.random())};n(3);function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameOverScreen=document.createElement("div"),this.gameOverMsg0="",this.gameOverMsg1="",this.gameOverMsg2=""}var t,n,o;return t=e,(n=[{key:"show",value:function(){var e=document.querySelector("body");this.gameOverScreen.classList.add("game-over__screen"),this.gameOverScreen.innerHTML='<div class="game-over__box"><h1 class="game-over__heading">Game over</h1>'+'<p class="game-over__msg">'.concat(this.gameOverMsg0,"</p>")+'<p class="game-over__msg">'.concat(this.gameOverMsg1,"</p>")+'<p class="game-over__msg">'.concat(this.gameOverMsg2,"</p>")+'<button class="game-over__button"><span><i class="game-over__button-angle fas fa-angle-double-right fa-xs"></i></span>play again<i class="game-over__button-angle fas fa-angle-double-left fa-xs"></i></button></div>',e.appendChild(this.gameOverScreen)}},{key:"hide",value:function(){this.gameOverScreen.classList.contains("game-over__screen")&&this.gameOverScreen.remove()}}])&&u(t.prototype,n),o&&u(t,o),e}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.snake=new c,this.score=0,this.on=!0,this.fields=document.querySelectorAll(".board__field"),this.gameOverScreen=new h,this.paused=!1}var t,n,o;return t=e,(n=[{key:"index",value:function(e,t){return e+30*t}},{key:"showScore",value:function(){document.querySelector(".board__score").innerHTML=this.score}},{key:"isFoodInsideSnake",value:function(){for(;this.fields[this.index(this.food.x,this.food.y)].classList.contains("snake");)this.food=new l}},{key:"showFood",value:function(){this.food=new l,this.isFoodInsideSnake();var e=this.index(this.food.x,this.food.y);this.fields[e].classList.add("food")}},{key:"showSnake",value:function(){var e=this,t=this.snake.body.map(function(t){return e.index(t.x,t.y)});document.querySelectorAll(".snake").forEach(function(e){return e.classList.remove("snake")}),t.forEach(function(t){e.fields[t].classList.add("snake")})}},{key:"moveSnake",value:function(){var e;switch(this.snake.directions){case"right":e={x:this.snake.body[0].x+1,y:this.snake.body[0].y};break;case"left":e={x:this.snake.body[0].x-1,y:this.snake.body[0].y};break;case"up":e={x:this.snake.body[0].x,y:this.snake.body[0].y-1};break;case"down":e={x:this.snake.body[0].x,y:this.snake.body[0].y+1}}this.snake.body.unshift(e),this.snake.body.pop(),this.gameOver(),this.on&&(this.speedUp(),this.showSnake(),this.checkFoodCollision())}},{key:"turnSnake",value:function(e){switch(e.key){case"ArrowRight":case"ArrowLeft":("down"===this.snake.directions||"up"===this.snake.directions)&&this.changeDirection(e.key);break;case"ArrowUp":case"ArrowDown":("right"===this.snake.directions||"left"===this.snake.directions)&&this.changeDirection(e.key)}}},{key:"feedSnake",value:function(){var e,t=this.snake.body.length-1,n=this.snake.body.length-2;this.snake.body[t].x===this.snake.body[n].x&&(e=this.snake.body[t].y>this.snake.body[n].y?{x:this.snake.body[t].x,y:this.snake.body[t].y+1}:{x:this.snake.body[t].x,y:this.snake.body[t].y-1}),this.snake.body[t].y===this.snake.body[n].y&&(e=this.snake.body[t].x<this.snake.body[n].x?{x:this.snake.body[t].x-1,y:this.snake.body[t].y}:{x:this.snake.body[t].x+1,y:this.snake.body[t].y}),this.snake.body.push(e)}},{key:"changeDirection",value:function(e){switch(e){case"ArrowRight":this.snake.directions="right";break;case"ArrowLeft":this.snake.directions="left";break;case"ArrowUp":this.snake.directions="up";break;case"ArrowDown":this.snake.directions="down"}}},{key:"checkFoodCollision",value:function(){this.food.x===this.snake.body[0].x&&this.food.y===this.snake.body[0].y&&(this.feedSnake(),this.score++,this.showScore(),this.hideFood(),this.food=new l,this.showFood())}},{key:"hideFood",value:function(){document.querySelectorAll(".food").forEach(function(e){return e.classList.remove("food")})}},{key:"checkSelfCollision",value:function(){for(var e=1;e<this.snake.body.length;e++)if(this.snake.body[e].x===this.snake.body[0].x&&this.snake.body[e].y===this.snake.body[0].y)return!0}},{key:"checkWallCollision",value:function(){return this.snake.body[0].x>29||this.snake.body[0].x<0||this.snake.body[0].y>19||this.snake.body[0].y<0}},{key:"showGameOverScreen",value:function(){this.gameOverScreen.show()}},{key:"printGameOverMsg",value:function(){this.score>=5&&(this.gameOverScreen.gameOverMsg0="Congratulations!",this.checkSelfCollision()&&(this.gameOverScreen.gameOverMsg2="You ate your own tail though. Not cool."),this.checkWallCollision()&&(this.gameOverScreen.gameOverMsg2="You hit a wall though. Ouch.")),this.score?1===this.score?this.gameOverScreen.gameOverMsg1="You got 1 point.":this.score>1&&(this.gameOverScreen.gameOverMsg1="You got ".concat(this.score," points.")):this.gameOverScreen.gameOverMsg1="You got 0 points? Really?"}},{key:"hideGameOverScreen",value:function(){this.gameOverScreen.hide()}},{key:"speedUp",value:function(){var e=this,t=[];switch(this.level){case 1:t=[180,160,140,120,100];break;case 2:t=[90,80,70,60,50]}[10,20,30,40,50].forEach(function(n,o){e.score===n&&(clearInterval(e.moveInterval),e.speed=t[o],e.start())})}},{key:"setLevel",value:function(e){switch(e){case"level-1":this.level=1,this.speed=200;break;case"level-2":this.level=2,this.speed=100}}},{key:"showPause",value:function(){document.querySelector(".board__pause-icon").innerHTML=this.paused?"&#10073;&#10073;":""}},{key:"pause",value:function(e){" "===e.key&&(this.paused=!this.paused,this.paused?clearInterval(this.moveInterval):this.start(),this.showPause())}},{key:"gameOver",value:function(){(this.checkWallCollision()||this.checkSelfCollision())&&(this.on=!1,clearInterval(this.moveInterval),this.printGameOverMsg(),this.showGameOverScreen())}},{key:"start",value:function(){var e=this;this.moveInterval=setInterval(function(){e.moveSnake()},this.speed)}}])&&d(t.prototype,n),o&&d(t,o),e}();n(4);function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.welcomeScreen=document.createElement("div"),this.welcomeMsg0="Choose your level",this.counter=3}var t,n,o;return t=e,(n=[{key:"show",value:function(){var e=document.querySelector("body");this.welcomeScreen.classList.add("welcome__screen"),this.welcomeScreen.innerHTML='<div class="welcome__box"><h1 class="welcome__heading">Ready to play ?</h1>'+'<p class="welcome__msg">'.concat(this.welcomeMsg0,"</p>")+'<button id="level-1" class="welcome__start-button active"><span><i class="welcome__button-angle fas fa-angle-double-right fa-xs"></i></span>level 1<i class="welcome__button-angle fas fa-angle-double-left fa-xs"></i></button><button id="level-2" class="welcome__start-button"><span><i class="welcome__button-angle fas fa-angle-double-right fa-xs"></i></span>level 2<i class="welcome__button-angle fas fa-angle-double-left fa-xs"></i></button></div>',e.appendChild(this.welcomeScreen)}},{key:"hide",value:function(){this.welcomeScreen.classList.contains("welcome__screen")&&this.welcomeScreen.remove()}},{key:"showCounter",value:function(){var e=this;this.welcomeScreen.innerHTML='<div class="welcome__box">'+'<div class="welcome__counter">'.concat(this.counter,"</div>")+"</div>";var t=setInterval(function(){e.counter--,e.welcomeScreen.innerHTML='<div class="welcome__box">'+'<div class="welcome__counter">'.concat(e.counter,"</div>")+"</div>",0===e.counter&&(clearInterval(t),document.querySelector(".welcome__counter").innerHTML="start!")},500)}}])&&v(t.prototype,n),o&&v(t,o),e}();n(5);document.addEventListener("DOMContentLoaded",function(){var e=new y;e.show(),(new r).render(),document.addEventListener("click",function(n){if(n.target.matches(".welcome__start-button")){var o=n.target.id;e.showCounter(),setTimeout(function(){e.hide(),t(o)},2e3)}n.target.matches(".game-over__button")&&location.reload()}),document.addEventListener("keydown",function(n){var o=document.querySelector(".welcome__screen"),s=document.querySelector(".welcome__counter"),a=document.querySelector(".game-over__screen"),i=document.querySelectorAll(".welcome__start-button");if(o&&!s&&("ArrowRight"!==n.key&&"ArrowLeft"!==n.key||i.forEach(function(e){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})," "===n.key||"Enter"===n.key)){var r=document.querySelector(".welcome__start-button.active").getAttribute("id");e.showCounter(),setTimeout(function(){e.hide(),t(r)},2e3)}a&&(" "!==n.key&&"Enter"!==n.key||location.reload())});var t=function(e){var t=new f;document.addEventListener("keydown",function(e){t.pause(e),t.turnSnake(e)}),t.showSnake(),t.showFood(),t.setLevel(e),t.start()}})}]);