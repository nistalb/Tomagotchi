# Tomagotchi
a simple Tomagotchi game

# Description
An eumulator for the Tamagotchi games of the 1990s.  The game features a Tamagotchi pet that will go through lifecycles based on time; the lifecycles are baby, child, teen, adult, and dead.  During each lifecycle, except dead, the pet must be fed, put to sleep, and entertained. These functions will be performed by pushing buttons on the game pendant.  

![Wireframe](https://github.com/nistalb/Tomagotchi/blob/main/images/img_1254.jpg)



# User Story

The user will navigate to the website and there will be an empty frame with a start button.
When the user pushes the start button a notice screen will appear that asks the user to enter the name of the pet.  After entering the name of hte pet a screen will notify the user that a pet of the given name has been born.

After 3 seconds the message goes away and we see the baby tomagotchi.  The baby will have stats: hunger, sleepiness, and boredom, that are all initialized at zero; status will be on a scale from 1 - 10.  Three buttons on the bottom of the game container will allow the baby to be fed, entertained, and put to bed.  The baby will require tending for one of the statuses every 60 seconds.  

After 2 minutes of playing the screen will change to a message announcing that the baby will become a child.  After 3 seconds the message goes away and we see the child tomagotchi.  The child will need the same buttons as the baby, feed, entertain, and put to bed.  The child will require tending for one of the statuses every 70 seconds.

After 2 minutes of playing the screen will change to a message announcing that the child will become a teenager.  The teenager will require tending for one of the statuses every 80 seconds.  

After 2 minutes of playing the screen will change to a message announcing that the teenager will become an adult.   The teenager will require tending for one of the statuses every 90 seconds.  

After 2 minutes as an adult the tomagotchi will die.  The image of the tomagotchi will be replaced with the text notifying the user of the death and then an image of the dead tomagotchi will be shown along with a reset button.

The tamagotchi will also die if any of the status indicators reach 10.


# Technologies

This game utilizes HTML, CSS, javascript, goole fonts, and jquery. 

# Approach Taken

A functional approach was taken for this game.  This was done to allow the project to be broken down into small functional pieces.

# Next Steps

Create the game using OOP.  The current state of the javascript app lends itself to object oriented programming.
