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
    newText("<p>In this experiment, you will have to report which of two pictures matches a description.</p>")
    ,
    newText("<p>Press the <strong>F</strong> key for the picture on the left, or the <strong>J</strong> key for the picture on the right.</p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
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
    newAudio("tone", variable.AudioFile)
        .play()
    ,

    newImage("gesture", variable.PluralImageFile)
        .size(200,200)
    ,

    newCanvas(450,200)
        .add(   0 , 0 , getImage("gesture") )
        .print()
    ,
    newSelector()
        .add( getImage("gesture"))
        .shuffle()
        .keys("F" )
        .log()
        .wait()
    ,

    newTimer(500)
        .start()
        .wait()
  )
  .log( "ID"     , getVar("ID")    )
  .log( "Item"   , variable.Item   )
  .log( "Group"  , variable.Group  )
)
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
