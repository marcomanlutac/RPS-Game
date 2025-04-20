let pscore = 0
let cscore = 0

function play(playerChoice){
    const choices = ['rock', 'paper', 'scissor']
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ''
    let player_choices_print = ''
    let comp_choice_print = ''

    if (playerChoice === computerChoice){
        result = `It's a tie!`
        player_choices_print = `Player picked: ${playerChoice}`
        comp_choice_print = `Computer picked: ${computerChoice}`
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice == 'rock') ||
        (playerChoice === 'scissor' && computerChoice == 'paper')
    ) {
        result = `Player Won!`
        player_choices_print = `Player picked: ${playerChoice}`
        comp_choice_print = `Computer picked: ${computerChoice}`
        pscore += 1
    } else{
        result = `Computer Won!`
        player_choices_print = `Player picked: ${playerChoice}`
        comp_choice_print = `Computer picked: ${computerChoice}`
        cscore += 1
    }
        document.getElementById("result").innerHTML = result
        document.getElementById("choice1").innerHTML = player_choices_print
        document.getElementById("choice2").innerHTML = comp_choice_print
        document.getElementById("pscore").innerHTML = pscore
        document.getElementById("cscore").innerHTML = cscore

    }
