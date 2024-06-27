// global variables first
const W = 2;
const H = 1;
const formula = [W, W, H, W, W, W, H];
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
