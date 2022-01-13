import "./index.css";

const { entrypoints } = require("uxp");

entrypoints.setup({
  panels: {
    createBackground: {
      show() {}
    }
  }
});

window.addEventListener("load", () => {
  const { Artboard } = require("scenegraph");
  let form = document.querySelector("form");
  let warning = document.querySelector("#warning");
  if (!selection || !(selection.items[0] instanceof Artboard)) {
    form.className = "hide";
    warning.className = "show";
  } else {
    form.className = "show";
    warning.className = "hide";
    form.addEventListener("submit", create);
  }
});

const { selection } = require("scenegraph");

function create() {
  const { editDocument } = require("application");
  const { Path, Color } = require("scenegraph");

  // selected values from UI
  const chaosSize = [3, 5, 8][document.querySelector("#chaos").value];
  const color1 = document.querySelector("#color1").value;
  const color2 = document.querySelector("#color2").value;

  editDocument({ editLabel: "Draw polygon" }, function (selection) {
    const selectedArtboard = selection.items[0];
    const maxHeight = selectedArtboard.height;
    const maxWidth = selectedArtboard.width;

    /*
    Based on slider selection, pick the number of times polygons will be drawn on artboard 3, 5, 8
    Imagine a line drawn side to side dividing the artboard into 2 halfs.
    Create polygons for each half. Fill with color based on selection.

    Range of each side w/ variable 
    top - {0,0} {width, 0} // range: 0 to width
    right - {width,0} {width, height} // range: 0 to height
    bottom - {0, height} {width, height} // range: 0 to width
    left - {0, 0} {0, height} // range: 0 to height
    */


    const getRandom = function (maxValue) {
      return Math.floor(Math.random() * maxValue);
    }

    const polygons = [
      { name: 'top-right-3', getCoords: function (maxW, maxH) { return `M ${getRandom(maxW)},0 ${maxW},0 ${maxW},${getRandom(maxH)} z`; } },
      { name: 'right-bottom-3', getCoords: function (maxW, maxH) { return `M ${maxW},${getRandom(maxH)} ${maxW},${maxH} ${getRandom(maxW)},${maxH} z`; } },
      { name: 'bottom-left-3', getCoords: function (maxW, maxH) { return `M ${getRandom(maxW)},${maxH} 0,${maxH} 0,${getRandom(maxH)} z`; } },
      { name: 'left-top-3', getCoords: function (maxW, maxH) { return `M 0,${getRandom(maxH)} 0,0 ${getRandom(maxW)},0 z`; } },
      { name: 'top-bottom-4', getCoords: function (maxW, maxH) { return `M ${getRandom(maxW)},0 ${maxW},0 ${maxW},${maxH} ${getRandom(maxW)},${maxH} z`; } },
      { name: 'left-right-4', getCoords: function (maxW, maxH) { return `M 0,${getRandom(maxH)} 0,0 ${maxW},0 ${maxW},${getRandom(maxH)} z`; } }
    ];
    const otherHalfPolygons = [
      { name: 'top-right-5', getCoords: function (maxW, maxH) { return `M ${getRandom(maxW)},0 ${maxW},${getRandom(maxH)} ${maxW},${maxH} 0,${maxH} 0,0 z`; } },
      { name: 'right-bottom-5', getCoords: function (maxW, maxH) { return `M ${maxW},${getRandom(maxH)} ${getRandom(maxW)},${maxH} 0,${maxH} 0,0 ${maxW},0 z`; } },
      { name: 'bottom-left-5', getCoords: function (maxW, maxH) { return `M ${getRandom(maxW)},${maxH} 0,${getRandom(maxH)} 0,0 ${maxW},0 ${maxW},${maxH} z`; } },
      { name: 'left-top-5', getCoords: function (maxW, maxH) { return `M 0,${getRandom(maxH)} ${getRandom(maxW)},0 ${maxW},0 ${maxW},${maxH} 0,${maxH} z`; } },
      { name: 'top-bottom-4', getCoords: function (maxW, maxH) { return `M ${getRandom(maxW)},0 0,0 0,${maxH} ${getRandom(maxW)},${maxH} z`; } },
      { name: 'left-right-4', getCoords: function (maxW, maxH) { return `M 0,${getRandom(maxH)} 0,${maxH} ${maxW}${maxH} ${maxW},${getRandom(maxH)} z`; } }
    ];

    let i = 0;
    do {
      i++;
      const selPolygonIdx = getRandom(6);
      const polygon = polygons[selPolygonIdx];
      const otherPolygon = otherHalfPolygons[selPolygonIdx];

      const newPath = new Path();
      newPath.pathData = polygon.getCoords(maxWidth, maxHeight);
      newPath.fill = new Color(color1, Math.random() * (0.5 - 0.1) + 0.1); // max = 0.5 min 0.1
      selection.insertionParent.addChild(newPath);

      const newPath2 = new Path();
      newPath2.pathData = otherPolygon.getCoords(maxWidth, maxHeight);
      newPath2.fill = new Color(color2, Math.random() * (0.4 - 0.1) + 0.1); // max = 0.4 min 0.1
      selection.insertionParent.addChild(newPath2);

    } while (i < chaosSize);
  })
}
