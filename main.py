def settRød(Verdi: number):
    pins.analog_write_pin(AnalogPin.P1, Verdi)

def on_button_pressed_a():
    global Grønn
    Grønn += 1
    if Grønn > 4:
        Grønn = 0
    pins.analog_write_pin(AnalogPin.P0, Grønn * 256)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Rød
    Rød += 1
    if Rød > 4:
        Rød = 0
    pins.analog_write_pin(AnalogPin.P1, Rød * 256)
input.on_button_pressed(Button.B, on_button_pressed_b)

Grønn = 0
Rød = 0
Rød = 0
Grønn = 4
pins.analog_write_pin(AnalogPin.P0, Grønn * 256)
settRød("abc", Rød)