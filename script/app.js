let miniGames = {
    1: 'Me - Take a drink yourself!',
    2: 'You - Choose someone to drink!',
    3: 'All girls drink!',
    4: 'All guys drink!',
    5: 'Drive: Vroom or Erk',
    6: 'FLOOR: Last person to touch the floor drinks',
    7: 'HEAVEN: Last person to point up to the sky drinks',
    8: 'Date:  Choose someone to drink with you the rest of the game',
    9: 'Rhyme: Say rhymes until someone messes up',
    10: 'Categories: Say things in a category until someone messes up',
    11: '3/6/9 - Count and clap on 3/6/9 until somone messes up',
    12: 'Baskin Robbins - Whoever lands on 31 drinks!',
    13: "I'm leaving - Last one left loses!",
    14: "MATTHEW's CUP",
    15: "Paper Rock Scissors - Play 1v1 against everyone, loser drinks",
    16: "Never have I ever - elimination",
    17: "One time thumbmaster",
    18: "One time Vikings row!",
    19: "One Time Nose Goes - Last person to touch the nose drinks!",
    20: "All singles drink!"
}

var kingCount = 0;

$('#card').click(
    function () {
        var game = Math.floor(1 + Math.random()*(20 + 1 - 1))
        console.log(game);
        $('#cardText>p').text(miniGames[game]);
        if (game === 14) {
            kingCount++
            $('#kingCount>p').text(`${kingCount}/4 Kings`);
        }
        if (kingCount > 3) {
            $('div#card').css("background-color", "red");
            $('#cardText>p').text("MATTHEW'S CUP WINNER!");
        }
    }
);