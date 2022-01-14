import "./index.css";

import { entrypoints, host } from "uxp";
const app = require('photoshop').app

entrypoints.setup({
  panels: {
    createBackground: {
      show() { }
    }
  }
});

window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", createShapes);
});


function createShapes(e) {
  if (host.name === "Photoshop") {
    const { batchPlay } = require("photoshop").action;
    const { executeAsModal } = require("photoshop").core;

    // Values from UI form
    const chaosSize = [8, 11, 13][document.querySelector("#chaos").value];
    const color1 = document.querySelector("#color1").value;
    const color2 = document.querySelector("#color2").value;

    let commands = makeParentRectangle(rgb(color1)); // making sure background has some color

    // repeat drawing triangles
    let idx = 1;
    do {
      commands = commands.concat(makeTriangles(idx, rgb(color2)));
      commands = commands.concat(transformTriangles());
      idx++;
    } while (idx <= chaosSize)

    executeAsModal(() => {
      batchPlay(commands, {synchronousExecution: true});
    }, {
      commandName: "Make background"
    });

    executeAsModal(() => {
      batchPlay(mergePluginLayers(chaosSize), {});
    }, {
      commandName: "Merge layers"
    });
  }
}


function makeParentRectangle(color) {
  const doc = app.activeDocument;

  return [{
    "_obj": "select",
    "_target": [
      {
        "_ref": "rectangleTool"
      }
    ],
    "dontRecord": true,
    "forceNotify": true,
    "_isCommand": false
  },
  { // draw rectangle
    "_obj": "make",
    "_target": [
      {
        "_ref": "contentLayer"
      }
    ],
    "using": {
      "_obj": "contentLayer",
      "type": {
        "_obj": "solidColorLayer",
        "color": {
          "_obj": "RGBColor",
          "red": color.r,
          "grain": color.g,
          "blue": color.b
        }
      },
      "shape": {
        "_obj": "rectangle",
        "unitValueQuadVersion": 1,
        "top": {
          "_unit": "pixelsUnit",
          "_value": 0
        },
        "left": {
          "_unit": "pixelsUnit",
          "_value": 0
        },
        "bottom": {
          "_unit": "pixelsUnit",
          "_value": doc.height
        },
        "right": {
          "_unit": "pixelsUnit",
          "_value": doc.width
        },
        "topRight": {
          "_unit": "pixelsUnit",
          "_value": 0
        },
        "topLeft": {
          "_unit": "pixelsUnit",
          "_value": 0
        },
        "bottomLeft": {
          "_unit": "pixelsUnit",
          "_value": 0
        },
        "bottomRight": {
          "_unit": "pixelsUnit",
          "_value": 0
        }
      },
      "strokeStyle": { // TODO may be optional
        "_obj": "strokeStyle",
        "strokeStyleVersion": 2,
        "strokeEnabled": true,
        "fillEnabled": true,
        "strokeStyleLineWidth": {
          "_unit": "pixelsUnit",
          "_value": 1
        },
        "strokeStyleLineDashOffset": {
          "_unit": "pointsUnit",
          "_value": 0
        },
        "strokeStyleMiterLimit": 100,
        "strokeStyleLineCapType": {
          "_enum": "strokeStyleLineCapType",
          "_value": "strokeStyleButtCap"
        },
        "strokeStyleLineJoinType": {
          "_enum": "strokeStyleLineJoinType",
          "_value": "strokeStyleMiterJoin"
        },
        "strokeStyleLineAlignment": {
          "_enum": "strokeStyleLineAlignment",
          "_value": "strokeStyleAlignCenter"
        },
        "strokeStyleScaleLock": false,
        "strokeStyleStrokeAdjust": false,
        "strokeStyleLineDashSet": [],
        "strokeStyleBlendMode": {
          "_enum": "blendMode",
          "_value": "normal"
        },
        "strokeStyleOpacity": {
          "_unit": "percentUnit",
          "_value": 100
        },
        "strokeStyleContent": {
          "_obj": "solidColorLayer",
          "color": {
            "_obj": "RGBColor",
            "red": 0,
            "grain": 0,
            "blue": 0
          }
        },
        "strokeStyleResolution": 300
      }
    },
    "layerID": 'pluginLayer0',
    "_isCommand": true
  },
  { // set opacity
    "_obj": "set",
    "_target": [
      {
        "_ref": "layer",
        "_enum": "ordinal",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "layer",
      "opacity": {
        "_unit": "percentUnit",
        "_value": random(5, 35)
      }
    },
    "_isCommand": true
  },
  { // set name of layer
    "_obj": "set",
    "_target": [
      {
        "_ref": "layer",
        "_enum": "ordinal",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "layer",
      "name": "pluginLayer0"
    },
    "_isCommand": true
  }
  ];
}

function makeTriangles(idx, color) {
  const doc = app.activeDocument;
  const maxW = doc.width;
  const maxH = doc.height;

  const horizontal1 = random(1, maxW);
  const horizontal2 = random(1, maxW);
  const vertical1 = random(1, maxH);
  const vertical2 = random(1, maxH);

  return [{
    "_obj": "select",
    "_target": [
      {
        "_ref": "triangleTool"
      }
    ],
    "dontRecord": true,
    "forceNotify": true,
    "_isCommand": false
  },
  {
    "_obj": "make",
    "_target": [
      {
        "_ref": "contentLayer"
      }
    ],
    "using": {
      "_obj": "contentLayer",
      "type": {
        "_obj": "solidColorLayer",
        "color": {
          "_obj": "RGBColor",
          "red": color.r,
          "grain": color.g,
          "blue": color.b
        }
      },
      "shape": {
        "_obj": "triangle",
        "keyOriginType": 7,
        "keyOriginBoxCorners": {
          "rectangleCornerA": {
            "_obj": "paint",
            "horizontal": horizontal1,
            "vertical": vertical1
          },
          "rectangleCornerB": {
            "_obj": "paint",
            "horizontal": horizontal2,
            "vertical": vertical1
          },
          "rectangleCornerC": {
            "_obj": "paint",
            "horizontal": horizontal2,
            "vertical": vertical2
          },
          "rectangleCornerD": {
            "_obj": "paint",
            "horizontal": horizontal1,
            "vertical": vertical2
          }
        },
        "keyOriginPolySides": 3,
        "keyOriginShapeBBox": {
          "_obj": "classFloatRect",
          "top": vertical1,
          "left": horizontal1,
          "bottom": vertical2,
          "right": horizontal2
        },
        "keyOriginPolyPreviousTightBoxCorners": {
          "rectangleCornerA": {
            "_obj": "paint",
            "horizontal": horizontal1,
            "vertical": vertical1
          },
          "rectangleCornerB": {
            "_obj": "paint",
            "horizontal": horizontal2,
            "vertical": vertical1
          },
          "rectangleCornerC": {
            "_obj": "paint",
            "horizontal": horizontal2,
            "vertical": vertical2
          },
          "rectangleCornerD": {
            "_obj": "paint",
            "horizontal": horizontal1,
            "vertical": vertical2
          }
        },
        "keyOriginPolyTrueRectCorners": {
          "rectangleCornerA": {
            "_obj": "paint",
            "horizontal": horizontal1,
            "vertical": vertical1
          },
          "rectangleCornerB": {
            "_obj": "paint",
            "horizontal": horizontal2,
            "vertical": vertical1
          },
          "rectangleCornerC": {
            "_obj": "paint",
            "horizontal": horizontal2,
            "vertical": vertical2
          },
          "rectangleCornerD": {
            "_obj": "paint",
            "horizontal": horizontal1,
            "vertical": vertical2
          }
        },
        "keyOriginPolyPixelHSF": 1,
        "transform": {
          "_obj": "transform",
          "xx": 1,
          "xy": 0,
          "yx": 0,
          "yy": 1,
          "tx": 0,
          "ty": 0
        },
        "sides": 3,
        "polygonCornerRadius": {
          "_unit": "pixelsUnit",
          "_value": 0
        }
      },
      "strokeStyle": { // TODO may be optional
        "_obj": "strokeStyle",
        "strokeStyleVersion": 2,
        "strokeEnabled": false,
        "fillEnabled": true,
        "strokeStyleLineWidth": {
          "_unit": "pixelsUnit",
          "_value": 0
        },
        "strokeStyleLineDashOffset": {
          "_unit": "pointsUnit",
          "_value": 0
        },
        "strokeStyleMiterLimit": 100,
        "strokeStyleLineCapType": {
          "_enum": "strokeStyleLineCapType",
          "_value": "strokeStyleButtCap"
        },
        "strokeStyleLineJoinType": {
          "_enum": "strokeStyleLineJoinType",
          "_value": "strokeStyleMiterJoin"
        },
        "strokeStyleLineAlignment": {
          "_enum": "strokeStyleLineAlignment",
          "_value": "strokeStyleAlignCenter"
        },
        "strokeStyleScaleLock": false,
        "strokeStyleStrokeAdjust": false,
        "strokeStyleLineDashSet": [],
        "strokeStyleBlendMode": {
          "_enum": "blendMode",
          "_value": "normal"
        },
        "strokeStyleOpacity": {
          "_unit": "percentUnit",
          "_value": 100
        },
        "strokeStyleContent": {
          "_obj": "solidColorLayer",
          "color": {
            "_obj": "RGBColor",
            "red": 0,
            "grain": 0,
            "blue": 0
          }
        },
        "strokeStyleResolution": 300
      }
    },
    "layerID": `pluginLayer${idx}`, // TODO may be does not matter. Could be optional
    "_isCommand": true
  },
  { // set opacity
    "_obj": "set",
    "_target": [
      {
        "_ref": "layer",
        "_enum": "ordinal",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "layer",
      "opacity": {
        "_unit": "percentUnit",
        "_value": random(5, 35)
      }
    },
    "_isCommand": true
  },
  { // set layer name
    "_obj": "set",
    "_target": [
      {
        "_ref": "layer",
        "_enum": "ordinal",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "layer",
      "name": `pluginLayer${idx}`
    },
    "_isCommand": true
  }];
}

function transformTriangles() {
  // offsets: to move around the triangle


  // width, height: % increase from previous w and h
  const widthInc = random(100, 200);
  const heightInc = random(100, 200);

  // angle units +90 to -90
  const horizontalSkew = random(-90, 90);
  const verticalSkew = random(-90, 90);

  return [{
    "_obj": "transform",
    "_target": [
      {
        "_ref": "path",
        "_enum": "ordinal",
        "_value": "targetEnum"
      }
    ],
    "freeTransformCenterState": {
      "_enum": "quadCenterState",
      "_value": "QCSAverage"
    },
    // "offset": { // lets not move the triangle for the time being
    //   "_obj": "offset",
    //   "horizontal": {
    //     "_unit": "pixelsUnit",
    //     "_value": 716.1582259902023
    //   },
    //   "vertical": {
    //     "_unit": "pixelsUnit",
    //     "_value": -739.752880835006
    //   }
    // },
    "width": {
      "_unit": "percentUnit",
      "_value": widthInc
    },
    "height": {
      "_unit": "percentUnit",
      "_value": heightInc
    },
    "skew": {
      "_obj": "paint",
      "horizontal": {
        "_unit": "angleUnit",
        "_value": horizontalSkew
      },
      "vertical": {
        "_unit": "angleUnit",
        "_value": verticalSkew
      }
    },
    "linked": true,
    "_isCommand": true
  }];
}


function mergePluginLayers(lastLayerIdx) {
  const allLayers = app.activeDocument.layers;
  return [{
    "_obj": "select",
    "_target": [
      {
        "_ref": "layer",
        "_name": `pluginLayer${lastLayerIdx}`
      }
    ],
    "selectionModifier": {
      "_enum": "selectionModifierType",
      "_value": "addToSelection"
    },
    "makeVisible": false,
    "layerID": allLayers.filter(l => l.name.startsWith('pluginLayer')).map(l => l.id),
    "_isCommand": true
  }, {
    "_obj": "mergeVisible",
    "_isCommand": true
 }]
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rgb(color) { // color '89,191,90'
  const arr = color.split(',');
  return { r: parseInt(arr[0]), g: parseInt(arr[1]), b: parseInt(arr[2]) };
}
