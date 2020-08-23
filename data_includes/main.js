PennController.ResetPrefix(null); // Initiates PennController
AddHost("https://github.com/goldengua/TimedPictureSelection/tree/master/chunk_includes/");
// Start typing your code here
 // Initiates PennController

// Start typing your code here

Sequence( "welcome" , randomize("experiment") , "send" , "final" )
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will first see four different kinds of arrows. </p>")
    ,
    newText("<p>Quickly swipe through corresponding keys as suggested by the pictures with directional arrows.</p>")
    ,
    newText("<p>For the first picture, you should swipe keys<strong>A, S, D</strong>. Observe the four pictures and get yourself familiar with swiping on keyboard.</p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
    ,
    newImage("1","asd.png")
         .size(100,100)
    ,
    newImage("2","zse.png")
         .size(100,100)
    ,
    newImage("3","qse.png")
         .size(100,100)
    ,
    newImage("4","qsx.png")
         .size(100,100)
    ,
    newCanvas(200,200)
         .add(   0 , 0 , getImage("1") )
         .add(   100 , 0 , getImage("2") )
         .add(   0 , 100 , getImage("3") )
         .add(   100 , 100 , getImage("4") )
         .print()
    ,
    newTextInput("inputID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("inputID") )
)
.log( "ID" , getVar("ID") )
Template( variable =>
    newTrial( "experiment" ,
    newAudio('bgm',"drumloop_65.wav")
        .play()
    ,
    newText("fixation",'+')
        .print()
    ,
    newTimer("wait", 800)
        .start()
        .wait()
    ,
    getText('fixation')
        .remove()
    ,

    newImage("gesture", variable.ImageFile1)
        .size(200,200)
        .print()
    ,
    newTimer("wait", 800)
        .start()
        .wait()
    ,
    getImage('gesture')
        .remove()
    ,
    newAudio("tone", variable.AudioFile)
        .play()
    ,
    newImage("gesture_key",variable.ImageFile2)
        .size(200,200)
    ,
    newCanvas("key",200,200)
        .add(   0 , 0 , getImage("gesture_key") )
        .print()
    ,
    newKey('first',variable.key1)
        .log()
        .wait()
    ,
    newKey('second',variable.key2)
        .log()
        .wait()
    ,
    newKey('third',variable.key3)
        .log()
        .wait()
    ,
    getCanvas("key")
        .remove()
    ,
    newText("continue","Press space bar to continue;")
        .print()
    ,
    newKey('space',' ')
         .wait()
  )
  .log( "ID"     , getVar("ID")    )
  .log( "Item"   , variable.Item   )
  .log( "Group"  , variable.Group  )
)
var startx, starty;

//获得角度
function getAngle(angx, angy) {
  return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起点终点返回方向 1向上滑动 2向下滑动 3向左滑动 4向右滑动 0点击事件
function getDirection(startx, starty, endx, endy) {
var angx = endx - startx;
var angy = endy - starty;
var result = 0;

//如果滑动距离太短
if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
    return result;
}

var angle = getAngle(angx, angy);
if (angle >= -135 && angle <= -45) {
    result = 1;
} else if (angle > 45 && angle < 135) {
    result = 2;
} else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    result = 3;
} else if (angle >= -45 && angle <= 45) {
    result = 4;
}
return result;
}
document.addEventListener("touchestart", function(e){
  startx = e.touches[0].pageX;
  starty = e.touches[0].pageY;
}, false);
document.addEventListener("touchend", function(e) {
  var endx, endy;
  endx = e.changedTouches[0].pageX;
  endy = e.changedTouches[0].pageY;
  var direction = getDirection(startx, starty, endx, endy);
  switch (direction) {
    case 0:
        alert("点击！");
        break;
    case 1:
        alert("向上！");
        break;
    case 2:
        alert("向下！");
        break;
    case 3:
        alert("向左！");
        break;
    case 4:
        alert("向右！");
        break;
    default:
        alert("点击！");
        break;
    }
  }, false);
SendResults( "send" )
newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.pcibex.net/' href='_blank'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)
