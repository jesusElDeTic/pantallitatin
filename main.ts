input.onButtonPressed(Button.A, function () {
    if (pantalla < 3) {
        pantalla += 1
    } else {
        pantalla = 1
    }
    makerbit.showStringOnLcd1602("" + (pantalla), makerbit.position1602(LcdPosition1602.Pos8), 6)
})
let pantalla = 0
pantalla = 1
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
    # . # . #
    # . # . #
    # . # . #
    . . . . .
    . # # # .
    . # # # .
    . . # . .
    . . # . .
    `))
basic.forever(function () {
    serial.writeLine("Luz: " + input.lightLevel())
    serial.writeLine("Temperatura" + input.temperature())
    serial.writeLine("Sonido" + "Mundo")
    basic.pause(500)
    if (pantalla == 1) {
        makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos17))
        makerbit.showStringOnLcd1602("Luz: ", makerbit.position1602(LcdPosition1602.Pos19), 6)
        makerbit.showStringOnLcd1602("" + (pins.map(
        input.lightLevel(),
        0,
        255,
        0,
        100
        )), makerbit.position1602(LcdPosition1602.Pos28), 4)
        makerbit.showStringOnLcd1602("%", makerbit.position1602(LcdPosition1602.Pos32), 6)
    } else if (pantalla == 2) {
        makerbit.lcdShowCharacter1602(LcdChar.c2, makerbit.position1602(LcdPosition1602.Pos17))
        makerbit.showStringOnLcd1602("Temperatura:  ", makerbit.position1602(LcdPosition1602.Pos19), 6)
        makerbit.showStringOnLcd1602("" + (pins.map(
        input.temperature(),
        0,
        255,
        0,
        100
        )), makerbit.position1602(LcdPosition1602.Pos28), 4)
        makerbit.showStringOnLcd1602("%", makerbit.position1602(LcdPosition1602.Pos32), 6)
    } else {
        makerbit.lcdShowCharacter1602(LcdChar.c3, makerbit.position1602(LcdPosition1602.Pos17))
        makerbit.showStringOnLcd1602("Sonido: ", makerbit.position1602(LcdPosition1602.Pos19), 6)
        makerbit.showStringOnLcd1602("" + (pins.map(
        input.soundLevel(),
        0,
        255,
        0,
        100
        )), makerbit.position1602(LcdPosition1602.Pos28), 4)
        makerbit.showStringOnLcd1602("%", makerbit.position1602(LcdPosition1602.Pos32), 6)
    }
})
