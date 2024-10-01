// global variables first
const W = 2;
const H = 1;
const formula = {major : [W, W, H, W, W, W, H], 
                minor : [W, H, W, W, H, W, W], 
                pentatonic_minor : [W+H, W, W, W+H, W], 
                pentatonic_major : [W, W, W+H, W, W+H],
                major_blues : [W, H, H, W, W, W+H],
                minor_blues : [W, H, W, H, W+H, H],
                harmonic_minor : [W, H, W, W, H, W+H, H],
                dorian : [W, H, W, W, W, H, W],
                mixolydian: [W, W, H, W, W, H, W],
                phrygian_dominant : [H, W+H, H, W, H, W, W]
                };
const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

const key = document.getElementById('key').value
const scaleType = document.getElementById('scale').value

function noteFinder(key, scaleType) {
    const scaleNotes = [];
    const appliedFormula = formula[scaleType]
    // we find the index of the key and set it as the start point of the loop
    let startPoint = notes.indexOf(key);
    // the first note is the root note. so we pushing that in 
    scaleNotes.push(key);
    appliedFormula.forEach(step => {
        // after each iteration we set a new start point. also by using modulus we handle the wrapping around of the note array
        startPoint = (startPoint + step) % notes.length;
        scaleNotes.push(notes[startPoint]);
    });
    return scaleNotes;
}

function showNotes() {
    const key = document.getElementById('key').value
    const scaleType = document.getElementById('scale').value
    const notesToShow = noteFinder(key, scaleType)
    const noteTiles = document.querySelectorAll('#note-grid .note-tile-row1');
    const clonedTiles = document.querySelectorAll('#note-grid .note-tile-row2')
    // clear all tiles before populating them with the content
    noteTiles.forEach(tile => {
        tile.innerText = '';
    });
    notesToShow.forEach((note, index) => {
        if (noteTiles[index]) {
            noteTiles[index].innerText = note;
        } 
    });
    // clone row1 of tiles into row2 after they are populated
    noteTiles.forEach((tile, index) => {
        if (clonedTiles[index]) {
            clonedTiles[index].innerText = tile.innerText;
        } 
    });     
}

function randomizer() {
    // Select all the tiles from both rows
    const tiles = document.querySelectorAll('.note-tile-row1, .note-tile-row2');
    // checks if the text is tile isnt blank or contains only whitespace
    const populatedTiles = Array.from(tiles).filter(tile => tile.innerText.trim() !== '')
    // Function to reset the color of all tiles
    function resetTileColors() {
        populatedTiles.forEach(tile => {
            tile.style.backgroundColor = ''; // Resets the color
        });
    }
    // Function to randomly highlight one tile
    function randomHighlight() {
        // Reset all tiles to original color before highlighting a new one
        resetTileColors();

        if ( populatedTiles.length > 0) {
        populatedTiles[Math.floor(Math.random() * populatedTiles.length)].style.backgroundColor = 'red'
        }

    }
    setInterval(randomHighlight, 1000);
}


