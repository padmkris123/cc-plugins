const makeRectangle = () => {
  return require("photoshop").action.batchPlay([{
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
             "red": 187.00000405311584,
             "grain": 129.80155169963837,
             "blue": 129.80155169963837
          }
       },
       "shape": {
          "_obj": "rectangle",
          "unitValueQuadVersion": 1,
          "top": {
             "_unit": "pixelsUnit",
             "_value": -1
          },
          "left": {
             "_unit": "pixelsUnit",
             "_value": -2
          },
          "bottom": {
             "_unit": "pixelsUnit",
             "_value": 1499
          },
          "right": {
             "_unit": "pixelsUnit",
             "_value": 2096
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
       "strokeStyle": {
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
    "layerID": 2,
    "_isCommand": true
 },
 {
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
             "red": 187.00000405311584,
             "grain": 129.80155169963837,
             "blue": 129.80155169963837
          }
       },
       "shape": {
          "_obj": "triangle",
          "keyOriginType": 7,
          "keyOriginBoxCorners": {
             "rectangleCornerA": {
                "_obj": "paint",
                "horizontal": 96,
                "vertical": 1233
             },
             "rectangleCornerB": {
                "_obj": "paint",
                "horizontal": 624,
                "vertical": 1233
             },
             "rectangleCornerC": {
                "_obj": "paint",
                "horizontal": 624,
                "vertical": 1491
             },
             "rectangleCornerD": {
                "_obj": "paint",
                "horizontal": 96,
                "vertical": 1491
             }
          },
          "keyOriginPolySides": 3,
          "keyOriginShapeBBox": {
             "_obj": "classFloatRect",
             "top": 1233,
             "left": 96,
             "bottom": 1491,
             "right": 624
          },
          "keyOriginPolyPreviousTightBoxCorners": {
             "rectangleCornerA": {
                "_obj": "paint",
                "horizontal": 96,
                "vertical": 1233
             },
             "rectangleCornerB": {
                "_obj": "paint",
                "horizontal": 624,
                "vertical": 1233
             },
             "rectangleCornerC": {
                "_obj": "paint",
                "horizontal": 624,
                "vertical": 1491
             },
             "rectangleCornerD": {
                "_obj": "paint",
                "horizontal": 96,
                "vertical": 1491
             }
          },
          "keyOriginPolyTrueRectCorners": {
             "rectangleCornerA": {
                "_obj": "paint",
                "horizontal": 96,
                "vertical": 1233
             },
             "rectangleCornerB": {
                "_obj": "paint",
                "horizontal": 624,
                "vertical": 1233
             },
             "rectangleCornerC": {
                "_obj": "paint",
                "horizontal": 624,
                "vertical": 1491
             },
             "rectangleCornerD": {
                "_obj": "paint",
                "horizontal": 96,
                "vertical": 1491
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
       "strokeStyle": {
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
    "layerID": 3,
    "_isCommand": true
 },
 {
    "_obj": "set",
    "_target": [
       {
          "_ref": "color",
          "_property": "foregroundColor"
       }
    ],
    "to": {
       "_obj": "CMYKColorClass",
       "cyan": 0,
       "magenta": 36.01,
       "yellowColor": 72,
       "black": 0
    },
    "source": "swatchesReplace",
    "_isCommand": true
 },
 {
    "_obj": "set",
    "_target": [
       {
          "_ref": "contentLayer",
          "_enum": "ordinal",
          "_value": "targetEnum"
       }
    ],
    "to": {
       "_obj": "shapeStyle",
       "fillContents": {
          "_obj": "solidColorLayer",
          "color": {
             "_obj": "RGBColor",
             "red": 250.7099238038063,
             "grain": 174.8690789937973,
             "blue": 92.65460819005966
          }
       },
       "strokeStyle": {
          "_obj": "strokeStyle",
          "strokeStyleVersion": 2,
          "fillEnabled": true
       }
    },
    "_isCommand": true
 },
 {
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
          "_value": 30
       }
    },
    "_isCommand": true
 },
 {
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
    "offset": {
       "_obj": "offset",
       "horizontal": {
          "_unit": "pixelsUnit",
          "_value": 716.1582259902023
       },
       "vertical": {
          "_unit": "pixelsUnit",
          "_value": -739.752880835006
       }
    },
    "width": {
       "_unit": "percentUnit",
       "_value": 172.92111763168242
    },
    "height": {
       "_unit": "percentUnit",
       "_value": 525.0215035679001
    },
    "skew": {
       "_obj": "paint",
       "horizontal": {
          "_unit": "angleUnit",
          "_value": -33.96202262413254
       },
       "vertical": {
          "_unit": "angleUnit",
          "_value": 0
       }
    },
    "angle": {
       "_unit": "angleUnit",
       "_value": -7.412344072623978
    },
    "using": {
       "_obj": "paint",
       "horizontal": {
          "_unit": "percentUnit",
          "_value": 0.02356756965225729
       },
       "vertical": {
          "_unit": "percentUnit",
          "_value": -0.4288411974713714
       }
    },
    "linked": true,
    "_isCommand": true
 }
], {});
};

let result = require("photoshop").core.executeAsModal(makeRectangle, {"commandName": "Make rectangle"});