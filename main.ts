let score_a = 0
let running = false
let end = 0
let start = 0
let false_start = false
let score_b = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + (score_a))
    proportionalFont.showString("POINTS", 200)
})
input.onButtonPressed(Button.A, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        proportionalFont.showNumber(end - start, 150)
        basic.showString("MS")
        if (end - start < 350) {
            score_a += 1
        }
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
        score_a += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    running = false
    false_start = false
    basic.pause(1000 + randint(0, 2000))
    if (!(false_start)) {
        start = input.runningTime()
        running = true
        led.stopAnimation()
        basic.clearScreen()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(end - start)
        basic.showString("MS")
        if (end - start < 350) {
            score_b += 1
        }
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . # . #
            . . . . .
            `)
        score_b += -1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("" + (score_b))
    proportionalFont.showString("POINTS", 200)
})
