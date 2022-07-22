let miniGames = {
    1: 'Ryan and Sandi must kiss!',
    2: 'Kiss someone or take a drink!',
    3: 'All married people drink!',
    4: 'Non-married people drink!',
    5: 'Most sober one drinks!',
    6: 'Drunkest person gets to assign a drink!',
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

var kingCount = 20;

console.log(miniGames);

$('#card').click(
    function () {
        var game = Math.floor(1 + Math.random()*(20 + 1 - 1))
        $('#cardText>p').text(miniGames[game]);
        delete miniGames[game];
        $('#kingCount>p').text(`${Object.keys(miniGames).length}/20 cards left`);
    }
);