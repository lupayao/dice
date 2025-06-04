input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    music.setVolume(255)
})
