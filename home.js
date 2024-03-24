function makeDraggable(evt) {
    var svg = evt.target;
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);
    var selectedElement = false;
    var audio = new Audio('block.mp3')

    function getMousePosition(evt) {
        var CTM = svg.getScreenCTM();
        return {
          x: (evt.clientX - CTM.e) / CTM.a,
          y: (evt.clientY - CTM.f) / CTM.d
        };
    }

    var selectedElement, offset, transform;

    function startDrag(evt) {
        if (evt.target.classList.contains('draggable')) {
            selectedElement = evt.target;
            offset = getMousePosition(evt);
            var transforms = selectedElement.transform.baseVal;
            if (transforms.length === 0 ||
                transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
            var translate = svg.createSVGTransform();
            translate.setTranslate(0, 0);
            selectedElement.transform.baseVal.insertItemBefore(translate, 0);
            }
            // Get initial translation amount
            transform = transforms.getItem(0);
            offset.x -= transform.matrix.e;
            offset.y -= transform.matrix.f;

            // Move the selected element to the end of the parent's child list
            selectedElement.parentNode.appendChild(selectedElement);
        }
    }

    function drag(evt) {
        if (selectedElement) {
          evt.preventDefault();
          var coord = getMousePosition(evt);
          transform.setTranslate(coord.x - offset.x, coord.y - offset.y);
        }
    }

    function endDrag(evt) {
        if (selectedElement) {
            var gridSpacing = 10; // Define the grid spacing
            var coord = getMousePosition(evt);
            var newX = Math.round(parseFloat(coord.x - offset.x) / gridSpacing) * gridSpacing;
            var newY = Math.round(parseFloat(coord.y - offset.y) / gridSpacing) * gridSpacing;
            transform.setTranslate(newX, newY)
            selectedElement = null;
            audio.play();
        }
    }    
} 