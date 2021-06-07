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
        ponts()
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
function ponts () {
    if (end - start > 350) {
        score_a += 0
    }
    if (end - start < 250) {
        score_a += 3
    }
    if (end - start < 180) {
        score_a += 4
    }
    if (end - start < 100) {
        score_a += 2
    }
    if (end - start < 50) {
        score_a += 4
    }
}
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
function ponts2 () {
    if (end - start > 350) {
        score_b += 0
    }
    if (end - start < 250) {
        score_b += 3
    }
    if (end - start < 180) {
        score_b += 4
    }
    if (end - start < 100) {
        score_b += 2
    }
    if (end - start < 50) {
        score_b += 4
    }
}
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
        ponts2()
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
