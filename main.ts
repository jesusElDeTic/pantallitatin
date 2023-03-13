input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.BacklightOff()
    basic.pause(500)
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.ShowString("hola caracola", 0, 0)
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
basic.forever(function () {
	
})
