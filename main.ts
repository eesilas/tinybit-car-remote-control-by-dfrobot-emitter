radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    } else if (receivedNumber == 14) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    } else if (receivedNumber == 10) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    } else if (receivedNumber == 8) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else if (receivedNumber == 12) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    } else if (receivedNumber == 14) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
})
input.onButtonPressed(Button.B, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
})
radio.setGroup(121)
basic.showIcon(IconNames.Angry)
Tinybit.RGB_Car_Big(Tinybit.enColor.White)
Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 80)
Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 80)
Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 80)
Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 80)
basic.forever(function () {
	
})
