radio.onReceivedNumber(function (receivedNumber) {
    jelerősség = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (jelerősség <= -45 && jelerősség >= -54) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    }
})
let jelerősség = 0
radio.setGroup(1)
radio.setTransmitPower(7)
