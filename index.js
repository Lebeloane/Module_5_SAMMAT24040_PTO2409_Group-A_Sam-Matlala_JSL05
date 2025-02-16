// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Love yours", artist: "J colele", genre: "Rap/HipHop"},
    { title: "Femi mo", artist: "Asa", genre: "Alternative"},
    { title: "Whipped cream", artist: "Ari Lennox", genre: "R&B"},
    { title: "Humble", artist: "Kendrick Lamar", genre: "Rap/HipHop"},
    { title: "Psycho", artist: "Dave", genre: "Rap/HipHop"},
    { title: "100 Roses", artist: "FKJ", genre: "Alternative"}
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Alternative",
    "Groot": "Rap/HipHop"
};


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {}; // Object to store each guardian's playlist

    // Loop through each guardian and filter songs based on their preferred genre
    Object.keys(guardians).map(guardian => {
        playlists[guardian] = songs.filter(song => song.genre === guardians[guardian]);
    });

    return playlists;
}



// Call the function and log the playlists
let playlist = generatePlaylist(guardians, songs);
console.log(playlist);



// Display playlists in the HTML document
document.addEventListener('DOMContentLoaded', () => {
    const playlistsDiv = document.getElementById('playlists'); // Get the container div

    // Loop through each guardian's playlist and create HTML elements
    Object.keys(playlist).forEach(guardian => {
        const guardianSection = document.createElement('div'); // Create a div for each guardian
        guardianSection.classList.add('playlist'); // Add styling class

        const guardianHeading = document.createElement('h2'); // Create a heading for the guardian
        guardianHeading.textContent = `${guardian}'s Playlist`;
        guardianSection.appendChild(guardianHeading);

        const songList = document.createElement('ul'); // Create a list for songs

        // Loop through each song and create list items
        playlist[guardian].forEach(song => {
            const songItem = document.createElement('li');
            songItem.classList.add('song'); // Add styling class
            songItem.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            songList.appendChild(songItem);
        });

        guardianSection.appendChild(songList); // Add song list to guardian's section
        playlistsDiv.appendChild(guardianSection); // Append guardian's section to the container
    });
});
