/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    let events = [];
    
    for (let [start, end] of intervals) {
        events.push([start, 1]);  // Entrada: +1 intervalo activo
        events.push([end + 1, -1]);  // Salida: -1 intervalo activo
    }

    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    let maxGroups = 0;
    let activeIntervals = 0;
    
    for (let [_, event] of events) {
        activeIntervals += event;
        maxGroups = Math.max(maxGroups, activeIntervals);
    }
    
    return maxGroups;
};
