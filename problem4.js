function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(", ");
}

// Sample data
const players = [
    { name: "Alice", score: 9 },
    { name: "Bob", score: 7 },
    { name: "Charlie", score: 10 },
    { name: "Diana", score: 8 }
];

console.log(getTopScorers(players)); // Output: Alice, Charlie
