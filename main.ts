Environment.ledBrightness(AnalogPin.P3, false)
Environment.ledBrightness(AnalogPin.P4, false)
Environment.ledBrightness(AnalogPin.P6, true)
Environment.ledBrightness(AnalogPin.P7, true)
Environment.ledBrightness(AnalogPin.P9, false)
basic.forever(function () {
    if ((0 as any) == (1 as any)) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            Environment.ledBrightness(AnalogPin.P3, false)
            Environment.ledBrightness(AnalogPin.P4, false)
            Environment.ledBrightness(AnalogPin.P6, true)
            Environment.ledBrightness(AnalogPin.P7, true)
            Environment.ledBrightness(AnalogPin.P9, false)
            if (input.pinIsPressed(TouchPin.P2)) {
                music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                Environment.ledBrightness(AnalogPin.P3, true)
                Environment.ledBrightness(AnalogPin.P4, false)
                Environment.ledBrightness(AnalogPin.P6, false)
                Environment.ledBrightness(AnalogPin.P7, false)
                Environment.ledBrightness(AnalogPin.P9, true)
            }
        }
    }
})
