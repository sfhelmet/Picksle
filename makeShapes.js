function makeShapes() {
    var LEFT_BASE = 288;
    var TOP_BASE = 96;
    var shapes = [
        { points: "0,0 0,120 40,120 40,40 120,40 120,0", fill: "#2195f342", class: "draggable" },
        { points: "0,0 0,120 40,120 40,40 120,40 120,0", fill: "#ff000038", class: "draggable" },
        { points: "0,0 0,120 40,120 40,40 120,40 120,0", fill: "#e5ff0038", class: "draggable" },
        { points: "80,0 120,0 120,120 0,120 0,80 80,80", fill: "#1aff0038", class: "draggable" },
        { points: "80,40 120,40 120,120 40,120 40,80 80,80", fill: "#00fffb38", class: "draggable" },
        { points: "0,0 0,80 40,80 40,40 80,40 80,0", fill: "#004cff38", class: "draggable" },
        { points: "40,0 120,0 120,80 80,80 80,40 40,40", fill: "#8800ff38", class: "draggable" },
        { points: "0,40 40,40 40,80 80,80 80,120 0,120", fill: "#ff00f738", class: "draggable" },
        { points: "200,200 240,200 240,240 200,240", fill: "#ff005538", class: "draggable" },
        { points: "200,200 240,200 240,240 200,240", fill: "#ff950038", class: "draggable" },
        { points: "160,200 240,200 240,240 160,240", fill: "#00ffa638", class: "draggable" },
    ]
    shapes.forEach(function(shape) {
        var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        shape.points = shape.points.split(" ").map(function(point) {
            var xy = point.split(",");
            return (parseInt(xy[0]) + LEFT_BASE) + "," + (parseInt(xy[1]) + TOP_BASE);
        }).join(" ");
        polygon.setAttribute("points", shape.points);
        polygon.setAttribute("fill", shape.fill);
        polygon.setAttribute("stroke", shape.stroke);
        polygon.setAttribute("stroke-width", shape.strokeWidth);
        polygon.setAttribute("class", shape.class);
        document.querySelector("svg").appendChild(polygon);
    });
}