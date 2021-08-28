input.onButtonPressed(Button.A, function () {
    answer = "" + text_list[2] + text_list[0] + text_list[4] + text_list[1] + text_list[3] + text_list[5] + text_list[6] + text_list[7] + text_list[8] + text_list[9]
    basic.showString(answer)
})
let answer = ""
let text_list: string[] = []
text_list = [
"want ",
"dog ",
"I ",
"and ",
"a ",
"a ",
"cat ",
"and ",
"a ",
"snake "
]
