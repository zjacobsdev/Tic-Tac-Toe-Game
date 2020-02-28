let board = ["", "", "", "", "", "", "", "", ""]
let e = 0
let canPlay = true;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

];

document.querySelectorAll('.grid').forEach (item => {
    item.addEventListener('click', event => {
        if(!canPlay){ return; }
        let eventId = event.target.getAttribute('id')
        let eventValue = event.target.getAttribute('value')
        event.target.classList.add('noClick')
        console.log(eventId)
        console.log(eventValue);

        if (e === 0 ){

            // console.log(document.querySelector(`.`+ eventId))
            document.querySelector(`#`+ eventId).innerHTML = "x"


        }

        if ( e % 2 === 0){
            // console.log(document.querySelector(`.`+ eventId))

            document.querySelector(`#`+ eventId ).innerHTML = "x"
            board[eventValue] = "x"
            compareValues()
        }else{
            // console.log(document.querySelector(`.`+ eventId))

            document.querySelector(`#`+ eventId).innerHTML = "o"
            board[eventValue] = "o"
            compareValues()
        }
           e++

        if (e === 9){
          console.log("Game Over");
          document.querySelector(".winMessage").innerHTML = "Game Over"
            // alert ('Game Over')
        }

        function compareValues(){
          let winRound = false
          for(let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = board[winCondition[0]];
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            console.log(a, b, c);
            if (a === '' || b === '' || c === '') {
              console.log('no match')
              continue;

            console.log('no match')
        }
          if (a === b && b === c) {
            //winRound = true;
            console.log("its a match")
            if ( e % 2 === 0){
                // console.log(document.querySelector(`.`+ eventId))


                document.querySelector(".winMessage").innerHTML = "Player1 Wins"
                // document.querySelectorAll(".grid").innerHTML = event.target.classList.add('noClick')

            }else{
                // console.log(document.querySelector(`.`+ eventId))
                document.querySelector(".winMessage").innerHTML = "Player2 Wins"

            }

            canPlay = false;
            //document.querySelectorAll(".grid").style.['pointerEvents']= 'none'

        }



        }
        }
        console.log(board);
         console.log(e)

    })

})
