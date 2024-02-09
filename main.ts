function settRød (Verdi: number) {
    if (Verdi > 0) {
        pins.analogWritePin(AnalogPin.P1, 2 ** (Verdi + 7))
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
    }
    for (let indeks = 0; indeks <= 4; indeks++) {
        led.plot(4, 3)
    }
}
input.onButtonPressed(Button.A, function () {
    Grønn += 1
    if (Grønn > 3) {
        Grønn = 0
    }
    settGrønn(Grønn)
})
function settGrønn (Verdi: number) {
    if (Verdi > 0) {
        pins.analogWritePin(AnalogPin.P0, 2 ** (Verdi + 7))
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
    for (let indeks = 0; indeks <= 4; indeks++) {
        if (indeks * 2 - 3 <= Grønn * 2 - 1) {
            led.plot(0, 4 - indeks)
        } else {
            led.unplot(0, 4 - indeks)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    Rød += 1
    if (Rød > 3) {
        Rød = 0
    }
    settRød(Rød)
})
let Grønn = 0
let Rød = 0
Rød = 0
Grønn = 3
settGrønn(Grønn)
