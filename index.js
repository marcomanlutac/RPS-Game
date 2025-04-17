function play(playerChoice){
    const choices = ['rock', 'paper', 'scissor']
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = ''
    let choices_print = ''

    if (playerChoice === computerChoice){
        result = `It's a tie!`
        choices_print = `Both choose ${playerChoice}`
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice == 'rock') ||
        (playerChoice === 'scissor' && computerChoice == 'paper')
    ) {
        result = `You won!`
        choices_print = `${playerChoice} beats ${computerChoice}`
    } else{
        result = `You Lost!`
        choices_print = `${computerChoice} beats ${playerChoice}`
    }

        document.getElementById("result").innerHTML = result
        document.getElementById("prompt").innerHTML = choices_print

    }