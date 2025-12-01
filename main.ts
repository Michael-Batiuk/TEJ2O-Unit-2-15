/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Batiuk
 * Created on: Dec 2025
 * This program does Nested Loops
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let loopCounter2 = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// a button
input.onButtonPressed(Button.A, function () {

    basic.clearScreen()
    loopCounter = 0
    loopCounter2 = 0
    sprite = game.createSprite(0, 0)

    while (loopCounter2 < 4) {
        loopCounter = 0
        while (loopCounter < 4) {
            basic.pause(500)
            sprite.move(1)
            loopCounter = loopCounter + 1
        }
            sprite.turnRight(90)
            loopCounter2 = loopCounter2 + 1
    }
    basic.pause(500)
    sprite.delete()
    basic.showIcon(IconNames.Happy)

})
