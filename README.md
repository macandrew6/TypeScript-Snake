### ts-snake
* cd to `example/` and open index.html

Create this app using typescript.

Good luck!

documenting the process:
  starts building board:
  created a board iterating through a 10x10 grid
  rendered the squares on a canvas using fillRect with row/col data form the grid
  filled all the squares black
  connects board with game inside the requestAnimationFrame loop
  clears the rectangle and draws the board

  starts building snake:
  starts with an x & y coordinate
  draws a snake starting at defined x & y coordinate with a fillRect at 30x30 pixel
  writes an update function to move the x & y coordinate every 10 frames
  initiates a directional instance variable
  writes a changeDirection function to change the direction of the snake based on key directional inputs
  makes the borders infinite in the update function

  next problem: (make the snake body)
    sets up an instance variable that is an array of coordinates
    main problem.. how to update the coordinates so that it follows the head
    1. 

