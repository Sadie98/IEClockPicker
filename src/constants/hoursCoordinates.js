// X = Cx + (r * cosine(angle))
// Y = Cy + (r * sine(angle))

const cx = 50;
const cy = 50;
const r = 50;

export let hoursCoordinates = [];
let angle = Math.PI;
for ( let hours = 0; hours < 12; hours++ ) {
    const x = cx + (r * Math.cos(angle))
    const y = cy + (r * Math.sin(angle))
    hoursCoordinates.push({
        top: `calc(${x}% - 12px)`,
        left: `calc(${y}% - 12px)`,
        val: hours
    });

    angle -= Math.PI / 6;
}
