var en,l4,coins=0,next,lives=3,l3,des=0,time=60,l1
function preload(){
   //ball
   ba=loadImage('ball.png')
   //quiz

   qu=loadImage('quiz.png')

   b=loadImage('back.png')
   ke=loadImage('Key.png')
   lb1=loadImage('Background.png')
   //tiles
   t1=loadImage('atile (10).png')
   pl1=loadImage('plate1.png')

   ld=createSprite(-1000,-10,250,250);ld.shapeColor='green'
   //emojs
 em1=loadAnimation('sm.png')
em2=loadAnimation('sm2.png') 
em3=loadAnimation('sm3.png')
em4=loadAnimation('sm4.png')
//coins
coin=loadImage('coin.png')
//potion
potion=loadImage('potion.png')
//throns
thron=loadImage('thorns1.png')
thron2=loadImage('thorns2.png')
//hearts
h=loadImage('heart.png')
hb=loadImage('heartbr.png')
//enemies
en1=loadImage('ene.png')
en2=loadImage('enemy1.png')
en3=loadImage('ene3.png')
//envelope
env=loadImage('en.png')
//spring
sp=loadAnimation('sp1.png')
spani=loadAnimation('sp1.png','sp2.png','sp3.png')
}
function setup(){
createCanvas(1510,690)

play=createButton('Play')
play.position(730,350)
play.style('background-color','red')
play.style('font-size','30px')

b1=createSprite(800,200)
b1.addImage(lb1)
b1.scale=0.3
b1.visible=false
//tiles
ti1=createSprite(250,700)
ti1.addImage(t1)
ti1.scale=1.1
ti1.visible=false

ti2=createSprite(800,700)
ti2.addImage(t1)
ti2.scale=1.1
ti2.visible=false

ti3=createSprite(1350,700)
ti3.addImage(t1)
ti3.scale=1.1
ti3.visible=false

ti4=createSprite(800,300)
ti4.addImage(pl1)
ti4.scale=0.5
ti4.visible=false
//key
gk=createSprite(800,200)
gk.addImage(ke)
gk.scale=0.05
gk.visible=false

//door
door=createSprite(340,270,300,600)
door.shapeColor='red'
door.visible=false
door1=createSprite(14000,270,300,600)
door1.shapeColor='red'
 door2=createSprite(700,-5000,19000,300)
 door2.shapeColor='red'

//hearts
he=createSprite(100,650)
he.addImage(h)
he.scale=0.2
he.visible=false
he2=createSprite(200,650)
he2.addImage(h)
he2.scale=0.2
he2.visible=false
he3=createSprite(300,650)
he3.addImage(h)
he3.scale=0.2
he3.visible=false

hbr=createSprite(100,650)
hbr.addImage(hb)
hbr.scale=0.2
hbr.visible=false
hbr2=createSprite(200,650)
hbr2.addImage(hb)
hbr2.scale=0.2
hbr2.visible=false
hbr3=createSprite(300,650)
hbr3.addImage(hb)
hbr3.scale=0.2
hbr3.visible=false

//emojs
em=createSprite(100,540)
em.addAnimation('em',em1)

em.scale=1.3
em.visible=false
//ig(invisible ground)
ig1=createSprite(760,570,1550,10)
ig1.visible=false
ig2=createSprite(800,300,260,60)
ig2.visible=false
 ig3=createSprite(2800,300,400,40)
  ig3.visible=false
  ig4=createSprite(2800,200,400,40)
  ig4.visible=false
   ig5=createSprite(400,940,140,10);
    ig5.visible=false
    ig6=createSprite(13000,420,80,20)
    ig6.visible=false
//point
po=createSprite(270,450,200,1000)
po.visible=false
po1=createSprite(1400,450,20,1000)
po1.visible=false
po2=createSprite(100,20000,19900,20)
po2.visible=false



//coins
coin1=createSprite(1000,500)
coin1.addImage(coin)
coin1.scale=0.3
coin1.visible=false

coin2=createSprite(1200,500)
coin2.addImage(coin)
coin2.scale=0.3
coin2.visible=false

coin4=createSprite(12000,500)
coin4.addImage(coin)
coin4.scale=0.3
// coin4.visible=false

coin5=createSprite(10200,500)
coin5.addImage(coin)
coin5.scale=0.3
coin6=createSprite(2000,400)
coin6.addImage(coin)
coin6.scale=0.3
coin7=createSprite(3000,300)
coin7.addImage(coin)
coin7.scale=0.3
coin8=createSprite(4000,150)
coin8.addImage(coin)
coin8.scale=0.3
coin9=createSprite(5000,150)
coin9.addImage(coin)
coin9.scale=0.3
coin10=createSprite(6000,150)
coin10.addImage(coin)
coin10.scale=0.3
coin12=createSprite(14000,100)
coin12.addImage(coin)
coin12.scale=0.3
coin13=createSprite(12000,380)
coin13.addImage(coin)
coin13.scale=0.3
// coin5.visible=false


coin3=createSprite(800,500)
coin3.addImage(coin)
coin3.scale=0.3
coin3.visible=false

//stand
stand1=createSprite(2400,200,400,60)
stand1.shapeColor='brown'
stand2=createSprite(2400,300,400,60)
stand2.shapeColor='brown'



//potions
pot=createSprite(2030,225)
pot.addImage(potion)
pot.scale=0.25

//quiz
quiz=createSprite(1510/2,690/2)
quiz.addImage(qu)
quiz.scale=1.5
quiz.visible=false

//thron
th1=createSprite(4000,255)
th1.addImage(thron)
th1.scale=0.3

//enemy
ene1=createSprite(13000,1000095)
ene1.addImage(en1)
ene1.scale=0.34

ene2=createSprite(-500,500)
ene2.addImage(en2)
ene2.scale=0.08

//envelope
env1=createSprite(12000,475)
env1.addImage(env)
env1.scale=0.2

//spring
spr=createSprite(2000,495)
spr.addAnimation('s',sp)
spr.scale=1.5

inp=createInput('')
inp.position(670,450)
 inp.value('')
inp.hide()

submit=createButton('SUBMIT')
submit.style('background-color','lightgreen')
submit.position(1510/2.19,500)
submit.hide()

paddle=createSprite(2700,370,280,400)
paddle.shapeColor='purple'
step1=createSprite(7000,180,280,20)
step2=createSprite(12000,190,100,100)
pa2=createSprite(12000,200,100,100)
pa2.shapeColor='lightblue'

ball=createSprite(14010,430)
ball.addImage(ba)
ball.scale=0.05
enemy3=createSprite(14000,480)
enemy3.addImage(en3)
enemy3.scale=0.2

thr2=createSprite(3080,510)
thr2.addImage(thron2)
thr2.scale=0.7
thr2.rotation+=180
thr3=createSprite(5025,310)
thr3.addImage(thron2)
thr3.scale=0.4
thr3.rotation+=90

sta1=createSprite(3000,350,200,30)



}

function draw(){
background(b)
 em.collide(ig1)
 em.collide(ig2)
em.collide(ig3)
em.collide(step1)
em.collide(paddle)
em.collide(pa2)
em.collide(step2)
em.collide(ig4)
em.collide(sta1)
em.collide(ld)


play.mousePressed(()=>{
     play.hide();
       level1()
     
})
em.velocityX=0

if(keyDown('right')&&em.x<1450&&em.visible==true){
   em.velocityX=7;
   em.rotation+=5
}
if(keyDown('left')&&em.x>60&&em.visible==true){
    em.velocityX=-7;
    em.rotation-=5
 }
sta1.width-=1
sta1.shapeColor='blue'
if(sta1.width<10){sta1.width=200}

 if(em.isTouching(door1)&&gk.x>=10000){
    em.velocityX=5
  
 }
 
 if(em.isTouching(sta1)&&keyDown('space')){em.velocityY=-15}

// console.log(ig6.y)
   step1.shapeColor='purple'
   step2.shapeColor='lightblue'

    if(em.isTouching(gk)&&next){ door1.shapeColor='green';  door1.depth = em.depth;
    door1.depth+=1; }
    
   if(em.isTouching(gk)&&l3){
     level4()
     gk.x=10000
}  
// po2.visible=true

 if(keyDown('space')&&em.y>=500){
    em.velocityY=-17
 }
 if((em.collide(ig2)||(em.collide(step1)||(em.collide(paddle))))&&keyDown('space')){
     em.velocityY=-13
 }
 if((em.collide(step2)||(em.collide(pa2)))&&keyDown('space')){
   em.velocityY=-13
}
 if((em.isTouching(stand2))&&keyDown('space')){

   em.velocityY=-10
}
 
 em.velocityY=em.velocityY+0.4

 if(em.isTouching(gk)){
     gk.x=10000
 }

 if(gk.x>=10000){door.shapeColor='green';
  door.depth = em.depth;
  door.depth+=1;
  if(em.isTouching(door)){
   if(em.isTouching(po)&&(!next)){em.velocityX=0;em.velocityY=0;level2()
   alert('AVOID THE THRONS AND DRINK THE POTION TO CHANGE YOUR CHARACTER')}
}
 }
 
 if(em.collide(ld)){ 
    
   com=createSprite(200,200,200000,2000000)
   com.shapeColor='lightgreen'
    en=true
    em.x=1000000
    if(com.shapeColor='lightgreen'){
      ld.visible=false
      em.destroy()
      but=createButton('PLAY AGAIN')
      but.position(1510/2,620)
      but.mousePressed(()=>{
         location.reload()

      })}
   
  
 }
 
 if(em.isTouching(po1)){level3()}

  if(em.isTouching(ig5)){
  lives-=1
  if(lives==2){
   he.visible=false
   hbr.visible=true
   em.y=540
   alert('You losed one life....so now you have 2 more life')
  }
  if(lives==1){
   he2.visible=false
   hbr2.visible=true
   em.y=540
   alert('You losed one life....so now you have 1 more life')
  }
  if(lives==0){
   he3.visible=false
   hbr3.visible=true
   em.y=540
   alert('no more lives..this is your last life')
  }
  if(lives==-1){
   location.reload()
   alert('Oh no! you lose')
  }}
//   if(em.isTouching(ig6)){ene1.x=10000;coins+=50;ene1.velocityX=0;ig6.velocityX=0;ig6.x=10000}
  if(em.isTouching(ene1)){
   lives-=1
   em.x=200;
   ene1.x=1200
   if(lives==2){
    he.visible=false
    hbr.visible=true
    em.y=540
    alert('You losed one life....so now you have 2 more life')
   }
   if(lives==1){
    he2.visible=false
    hbr2.visible=true
    em.y=540
    alert('You losed one life....so now you have 1 more life')
   }
   if(lives==0){
    he3.visible=false
    hbr3.visible=true
    em.y=540
    alert('no more lives..this is your lost')
   }
   if(lives==-1){
    location.reload()
    alert('Oh no! you lose')
   }
  }
  
console.log(des)
  if(ball.isTouching(em)&&(!en)){
   lives-=1
   em.x=100;
   ball.x=1410

   if(lives==2){
    em.x=100
    he.visible=false
    hbr.visible=true
    alert('You losed one life....so now you have 2 more life')
   }
   if(lives==1){
    em.x=100
    he2.visible=false
    hbr2.visible=true
    alert('You losed one life....so now you have 1 more life')
   }
   if(lives==0){
    em.x=100
    he3.visible=false
    hbr3.visible=true
    alert('no more lives..this is your lost')
   }
   if(lives==-1){
    location.reload()
    alert('Oh no! you lose')
   }
  }
  if(!l3){
  ene1.velocityY=0}
  if(ene1.x<20){ene1.velocityX=5}if(ene1.x>1450){ene1.velocityX=-5}
 if(em.isTouching(coin1)){
    coin1.x=20000;coins++
 }
 if(em.isTouching(coin2)){
   coin2.x=20000;coins++
}
if(em.isTouching(coin3)){
   coin3.x=20000;coins++
}
if(em.isTouching(coin4)){
   coin4.x=20000;coins++
}
if(em.isTouching(coin5)){
   coin5.x=20000;coins++
}
if(em.isTouching(coin6)){
   coin6.x=20000;coins++
   des++
}if(em.isTouching(coin7)){
   coin7.x=20000;coins++
   des++

}
if(em.isTouching(coin8)){
   coin8.x=20000;coins++
   des++
   
}
if(em.isTouching(coin9)){
   coin9.x=20000;coins++
   // des=true
   des++

}
if(em.isTouching(coin10)){
   coin10.x=20000;coins++
   // des=true
   des++

}

if(em.isTouching(coin12)){
   coin12.x=20000;coins++
   des=true
   des++

}
if(em.isTouching(coin13)){
   coin13.x=20000;coins++
   des=true
   des++

}
if((em.isTouching(ene2)||em.isTouching(thr2)||em.isTouching(thr3))&&(!en)){ lives-=1
   em.x=100;
   ball.x=1410

   if(lives==2){
    em.x=100
    he.visible=false
    hbr.visible=true
    alert('You losed one life....so now you have 2 more life')
   }
   if(lives==1){
    em.x=100
    he2.visible=false
    hbr2.visible=true
    alert('You losed one life....so now you have 1 more life')
   }
   if(lives==0){
    em.x=100
    he3.visible=false
    hbr3.visible=true
    alert('no more lives..this is your lost')
   }
   if(lives==-1){
    location.reload()
    alert('Oh no! you lose')
   }}
   
console.log(em.scale)

if(em.isTouching(pot)){
  var rand=Math.round(random(1,4))
 em.addAnimation('emo2',em2)
 em.addAnimation('emo3',em3)
 em.addAnimation('emo4',em4)
  if(rand==1){
   em.changeAnimation('emo2',em2)
   em.scale=0.35
   pot.x=10000

  }
  if(rand==2){
     em.changeAnimation('emo3',em3)
     em.scale=0.35
   pot.x=10000
  }
  if(rand==3){
   em.changeAnimation('emo4',em4)
   em.scale=0.35
 pot.x=10000
}
  console.log(rand)
}
 door1.visible=true

// em.debug=true
 em.setCollider("circle",0,0)
 env1.velocityY=-2
 if(env1.y<50){env1.velocityY=4}
 if(env1.y>450){env1.velocityY=-4}
 answer=inp.value()
 submit.mousePressed(()=>{
   if(answer=='THE MAP'||answer=='A MAP'||answer=='MAP'){
   gk.x=800;gk.y=300
   quiz.destroy()
   submit.hide()
   inp.hide()
   }})
  
  if(em.isTouching(env1)){
   env1.x=10000
   inp.show()
  quiz.visible=true
   submit.show()
  }

  if(em.isTouching(ig6)){em.velocityY=-20}

  //move to level4

  if(ene2.y<20){
     ene2.velocityY=4
  }
  if(ene2.y>450){
   ene2.velocityY=-4
}
if(ball.isTouching(paddle)){
   ball.x=1410
}
console.log(time)
drawSprites()
if(l1&&(!en)){
textSize(50)
fill('black')

text ('🤑:'+coins,100,100)}
if(en){
textSize(100)
fill('orange')
text ('🤑:'+coins,1510/2,100)
text ('❤️:'+lives,1510/2,310)
textSize(130)
fill('yellow')
text('YOU WON 🎊🎉',400,480)
textSize(40)
fill ('blue')
text('Want to play one more time?Click on the button below to play again',200,600)

}
}

function level1(){
   alert('TAKE THE KEY TO REACH THE NEXT LEVEL..YOU CAN GO TO THE NEXT LEVEL ONCE THE DOOR HAS CHANGED INTO GREEN COLOR.FOR THAT YOU SHOULD TAKE THE KEY')
 l1=true 
b1.visible=true
ti1.visible=true
ti2.visible=true
ti3.visible=true
ti4.visible=true
em.visible=true
gk.visible=true
door.visible=true
coin1.visible=true
coin2.visible=true
coin3.visible=true
he.visible=true
he2.visible=true
he3.visible=true
po1.x=10000
ene1.y=100000

}

function level2(){
   b1.visible=true
ti1.visible=true
ti2.visible=true
ti3.visible=true
ti4.destroy()
door.x=10000
door1.x=1400; 
ig3.x=400
ig4.x=900
em.y=540
 stand2.x=400
 stand1.x=900
 pot.x=230
 th1.x=400
 gk.x=1000
 gk.y=100
next=true
coin1.x=800
coin2.x=1100
coin4.x=300
coin3.x=800
coin1.y=160
coin2.y=160
coin5.x=350
coin5.y=200
ig5.y=260
ene1.x=10000
ene1.velocityX=0
ene1.y=100000
ig2.destroy()
po1.x=1400
}

function level3(){
   alert('In this level there is no door.If you touched the key itself you will be able to reach the next bonus level.Try to catch the envelope floating in the sky and submit the answer for that question')
   l3=true
   em.x=200;
   b1.visible=true
   ti1.visible=true
   ti2.visible=true
   ti3.visible=true
   next=false
   door1.destroy()
   ene1.x=1200
   ene1.velocityX=-5
   env1.x=1300
   spr.x=1300
   spr.y=400
   stand1.x=10000
   ig4.x=10000
   ig6.x=1300
   po1.x=10000
   po2.y=20
   ene1.y=495
}

function level4(){
   alert('This is the bonus level.If you want to win this game then you must find the door which is invisible.Let me give you a clue .The door is in any of the corner of the screen.Will you win this game?If you want more points then you can collect the coins aswell.Do your best ')
   l4=true
   em.x=100;
   b1.visible=true
   ti1.visible=true
   ti2.visible=true
   ti3.visible=true
   door2.destroy()
   ene1.destroy()
   stand2.x=10400
   ig3.x=1400
   stand2.y=120
    ene2.x=1000
    ene2.velocityY=-4
   pot.x=10000
   spr.x=10000
   th1.x=10000
   ig5.destroy()
 ig3.destroy()
paddle.x=700
step1.x=700
step2.x=1200;
pa2.x=1200
 ig6.x=10000
 ball.x=1410;
ball.velocityX=-5
 thr2.x=380
 thr3.x=525
 enemy3.x=1400
 sta1.x=300
 coin1.destroy()
 coin2.destroy()
 coin3.destroy()
 coin4.destroy()
 coin5.destroy()
 coin6.x=200
 coin7.x=300
 coin8.x=400
 coin9.x=500
 coin10.x=600
 coin12.x=1400
 coin13.x=1200
 ld.x=0
}

function end(){
   b1.destroy()
   em.destroy()
   coin6.destroy()
   coin7.destroy()
   coin8.destroy()
   coin9.destroy()
   coin10.destroy()
   coin12.destroy()
   coin13.destroy()
   ti1.destroy()
   enemy3.destroy()
   ball.destroy()
   paddle.destroy()
   step2.destroy()
   step1.destroy()
   thr2.destroy()
   thr3.destroy()
   sta1.destroy()
   pa2.destroy()
   ti2.destroy()
   ti3.destroy()
}