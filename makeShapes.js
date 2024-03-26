function makeShapes() {
  var LEFT_BASE = 288;
  var TOP_BASE = 96;
  var shapes = [
    {
      points: "1,1 1,119 39,119 39,39 119,39 119,1",
      fill: "#2195f342",
      stroke: "#2195f3",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "1,1 1,119 39,119 39,39 119,39 119,1",
      fill: "#ff000038",
      stroke: "#ff0000",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "1,1 1,119 39,119 39,39 119,39 119,1",
      fill: "#e5ff0038",
      stroke: "#e5ff00",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "81,1 119,1 119,119 1,119 1,81 81,81",
      fill: "#1aff0038",
      stroke: "#1aff00",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "81,41 119,41 119,119 41,119 41,81 81,81",
      fill: "#00fffb38",
      stroke: "#00fffb",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "1,1 1,79 39,79 39,39 79,39 79,1",
      fill: "#004cff38",
      stroke: "#004cff",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "41,1 119,1 119,79 81,79 81,39 41,39",
      fill: "#8800ff38",
      stroke: "#8800ff",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "1,41 39,41 39,81 79,81 79,119 1,119",
      fill: "#ff00f738",
      stroke: "#ff00f7",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "201,201 239,201 239,239 201,239",
      fill: "#ff005538",
      stroke: "#ff0055",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "201,201 239,201 239,239 201,239",
      fill: "#ff950038",
      stroke: "#ff9500",
      strokeWidth: 2,
      class: "draggable",
    },
    {
      points: "161,201 239,201 239,239 161,239",
      fill: "#00ffa638",
      stroke: "#00ffa6",
      strokeWidth: 2,
      class: "draggable",
    },
  ];
  shapes.forEach(function (shape) {
    var polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    shape.points = shape.points
      .split(" ")
      .map(function (point) {
        var xy = point.split(",");
        return parseInt(xy[0]) + LEFT_BASE + "," + (parseInt(xy[1]) + TOP_BASE);
      })
      .join(" ");
    polygon.setAttribute("points", shape.points);
    polygon.setAttribute("fill", shape.fill);
    polygon.setAttribute("stroke", shape.stroke);
    polygon.setAttribute("stroke-width", shape.strokeWidth);
    polygon.setAttribute("class", shape.class);
    document.querySelector("svg").appendChild(polygon);
  });
}
