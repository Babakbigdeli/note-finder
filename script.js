// global variables first
const W = 2;
const H = 1;
const formula = {major : [W, W, H, W, W, W, H], 
                natural_minor : [W, H, W, W, H, W, W], 
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


function noteFinder(key) {
    const scaleNotes = [];
    // we find the index of the key and set it as the start point of the loop
    let startPoint = notes.indexOf(key);
    // the first note is the root note. so we pushing that in 
    scaleNotes.push(key);
    formula.forEach(step => {
        // after each iteration we set a new start point. also by using modulus we handle the wrapping around of the note array
        startPoint = (startPoint + step) % notes.length;
        scaleNotes.push(notes[startPoint]);
    });
    console.log(scaleNotes);
    return scaleNotes;
}
