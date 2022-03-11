basic.forever(function () {
    dataStreamer.writeNumberArray([input.acceleration(Dimension.X), input.acceleration(Dimension.Y), input.acceleration(Dimension.Z)])
    dataStreamer.writeLine()
    basic.pause(100)
})
