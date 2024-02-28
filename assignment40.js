"use strict";
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum('Areeb', 'Chaos');
console.log(album);
album = makeAlbum('Bano', 'Light');
console.log(album);
album = makeAlbum('Alisha', 'Bold');
console.log(album);
