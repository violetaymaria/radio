radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        basic.showArrow(ArrowNames.West)
    } else if (1 == receivedNumber) {
        basic.showArrow(ArrowNames.East)
    } else if (2 == receivedNumber) {
        basic.showArrow(ArrowNames.West)
    } else if (3 == receivedNumber) {
        basic.showArrow(ArrowNames.East)
    }
})
radio.setGroup(6)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(0)
        basic.showArrow(ArrowNames.East)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(2)
        basic.showArrow(ArrowNames.East)
    } else if (input.logoIsPressed()) {
        radio.sendNumber(3)
        basic.showArrow(ArrowNames.West)
    } else if (input.isGesture(Gesture.Shake)) {
        radio.sendNumber(4)
        basic.showArrow(ArrowNames.East)
    }
})
