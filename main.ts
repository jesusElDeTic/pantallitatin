input.onButtonPressed(Button.A, function () {
    if (pantalla < 3) {
        pantalla += 1
    } else {
        pantalla = 1
    }
})
let valorObtenido = 0
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
makerbit.lcdMakeCharacter(LcdChar.c2, makerbit.lcdCharacterPixels(`
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    . . . . .
    . . . . .
    `))
makerbit.lcdMakeCharacter(LcdChar.c3, makerbit.lcdCharacterPixels(`
    . . # # .
    . # # # .
    # # # # #
    . . . . .
    . # . # .
    . . # . .
    # . . . #
    . . . # .
    `))
makerbit.lcdMakeCharacter(LcdChar.c4, makerbit.lcdCharacterPixels(`
    . # # . #
    . # # . .
    . # # . #
    . # # . .
    # # # # .
    # # # # .
    # # # # .
    . # # . .
    `))
makerbit.lcdMakeCharacter(LcdChar.c5, makerbit.lcdCharacterPixels(`
    # . # . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    `))
makerbit.lcdMakeCharacter(LcdChar.c6, makerbit.lcdCharacterPixels(`
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    `))
basic.forever(function () {
    if (pantalla == 1) {
        makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos17))
        makerbit.showStringOnLcd1602("Luz: ", makerbit.position1602(LcdPosition1602.Pos19), 5)
        valorObtenido = pins.map(
        input.lightLevel(),
        0,
        255,
        0,
        100
        )
    } else if (pantalla == 2) {
        makerbit.lcdShowCharacter1602(LcdChar.c2, makerbit.position1602(LcdPosition1602.Pos17))
        makerbit.showStringOnLcd1602("Temperatura:  ", makerbit.position1602(LcdPosition1602.Pos19), 6)
        valorObtenido = pins.map(
        input.temperature(),
        0,
        255,
        0,
        100
        )
    } else {
        makerbit.lcdShowCharacter1602(LcdChar.c3, makerbit.position1602(LcdPosition1602.Pos17))
        makerbit.showStringOnLcd1602("Sonido: ", makerbit.position1602(LcdPosition1602.Pos19), 6)
        valorObtenido = pins.map(
        input.soundLevel(),
        0,
        255,
        0,
        100
        )
    }
    makerbit.showStringOnLcd1602("" + (valorObtenido), makerbit.position1602(LcdPosition1602.Pos26), 4)
    for (let index = 0; index <= 16; index++) {
        makerbit.lcdShowCharacter1602(LcdChar.c5, index)
    }
    for (let index = 0; index <= 16; index++) {
        valorObtenido += -6.25
        if (valorObtenido > 0) {
            makerbit.lcdShowCharacter1602(LcdChar.c6, index)
        }
    }
    for (let index = 0; index <= 16; index++) {
        valorObtenido += -6.25
        if (valorObtenido > 0) {
            makerbit.lcdShowCharacter1602(LcdChar.c6, index)
        } else {
            makerbit.lcdShowCharacter1602(LcdChar.c5, index)
        }
    }
})
