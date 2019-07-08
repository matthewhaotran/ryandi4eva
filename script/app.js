let miniGames = {
    1: 'You win!  Take a drink yourself',
    2: 'Choose someone to drink!',
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
    13: "I'm leaving",
}

$('#card').click(
    function () {
        min = Math.ceil(1);
        max = Math.floor(13);
        var game = Math.floor(Math.random() * (max - min + 1)) + min;
        $('#cardText').text(miniGames[game]);
    }
);