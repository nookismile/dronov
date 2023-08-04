function circleLength(d) {
    let l;
    l = d * Math.PI;
    return l;
}

window.document.write('<tr><td>2</td>');
window.document.write('<td>', circleLength(2), '</td></tr>');
window.document.write('<tr><td>5</td>');
window.document.write('<td>', circleLength(5), '</td></tr>');
window.document.write('<tr><td>10</td>');
window.document.write('<td>', circleLength(10), '</td></tr>');
window.document.write('<tr><td>20</td>');
window.document.write('<td>', circleLength(20), '</td></tr>');
