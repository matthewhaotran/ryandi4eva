let miniGames = [
    'If Ryan and Sandi kiss, everyone else drinks',
    'Kiss someone or take a drink!',
    'All married people drink!',
    'Non-married people drink!',
    'Most sober one drinks!',
    'Drunkest person gets to assign a drink!',
    'HEART! Last person to hold up the heart symbol with your hands drinks',
    'Temporary Marriage - Choose a drinking mate, and it goes both ways!',
    'If you\'ve ever thrown up or blacked out at Ryandi\s house, take a drink',
    'Black and white - lower team drinks',
    'Choose  person to have a staring contest with, loser drinks',
    'Play SLIDE with someone, loser drinks',
    "Thumper!",
    "Anyone not touching a drink takes a drink",
    "Eye contact - The first person to make eye contact with you takes a drink",
    "Categories - Honeymoon Destinations",
    'Temporary Marriage - Choose a drinking mate, and it goes both ways!',
    'Ryan gets to choose someone to drink',
    'Sandi gets to choose someone to drink',
    'Drink if you are in the bridal party',
    'Say the name of your first bf/gf or drink',
    'Pair off! Choose a unclaimed partner and last one or team drinks',
    'Drink if you weren\'t cool enough to be in the bridal party'
];

let originalGameLength = miniGames.length;
console.log(originalGameLength);

$('#card').click(
    function () {
        var game = Math.floor(Math.random() * miniGames.length);
        console.log(game);
        console.log(miniGames.length);
        console.log(miniGames);
        $('#cardText>p').text(miniGames[game]);
        miniGames.splice(game, 1);
        $('#kingCount>p').text(`${miniGames.length}/${originalGameLength} cards left`);
    }
);