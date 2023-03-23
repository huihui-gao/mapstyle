const polygonLayer = "planet_osm_polygon";
const lineLayer = "planet_osm_line";
const pointLayer = "planet_osm_point";
const background = {
  id: "background",
  type: "background",
  layout: {},
  paint: {
    "background-color": "hsl(55, 1%, 20%)",
  },
};

const fills = [
  {
    id: "landcover_grass",
    type: "fill",
    source: "mapSource",
    "source-layer": polygonLayer,
    maxzoom: 14,
    filter: ["in", "landuse", "grass", "forest"],
    layout: {},
    paint: {
      "fill-color": "#323432",
      "fill-opacity": 1,
      "fill-antialias": false,
    },
  },
  {
    id: "industrial",
    type: "fill",
    source: "mapSource",
    "source-layer": polygonLayer,
    filter: ["==", "industrial", "industrial"],
    layout: {},
    paint: {
      "fill-color": "hsl(0, 0%, 20%)",
    },
  },

  {
    id: "landcover_farmland",
    type: "fill",
    source: "mapSource",
    "source-layer": polygonLayer,
    maxzoom: 14,
    filter: ["==", "landuse", "farmland"],
    layout: {},
    paint: {
      "fill-color": "hsl(55, 1%, 20%)",
      "fill-opacity": 1,
      "fill-antialias": false,
    },
  },
  // {
  //   id: "landcover_commercial",
  //   type: "fill",
  //   source: "mapSource",
  //   "source-layer": polygonLayer,
  //   maxzoom: 14,
  //   filter: ["==", "landuse", "commercial"],
  //   layout: {},
  //   paint: {
  //     "fill-color": "hsl(55, 1%, 17%)",
  //     "fill-opacity": 1,
  //     "fill-antialias": false,
  //   },
  // },
  // {
  //   id: "landcover_residential",
  //   type: "fill",
  //   source: "mapSource",
  //   "source-layer": polygonLayer,
  //   maxzoom: 14,
  //   filter: ["==", "landuse", "residential"],
  //   layout: {},
  //   paint: {
  //     "fill-color": "hsl(55, 1%, 17%)",
  //     "fill-opacity": 1,
  //     "fill-antialias": false,
  //   },
  // },
  // {
  //   id: "water shadow",
  //   type: "fill",
  //   source: "mapSource",
  //   "source-layer": polygonLayer,
  //   layout: {},
  //   paint: {
  //     "fill-color": "hsl(185, 3%, 5%)",
  //     "fill-translate": {
  //       base: 1.2,
  //       stops: [
  //         [7, [0, 0]],
  //         [16, [-1, -1]],
  //       ],
  //     },
  //     "fill-translate-anchor": "viewport",
  //     "fill-opacity": 1,
  //   },
  // },
  // {
  //   id: "water",
  //   ref: "water shadow",
  //   paint: {
  //     "fill-color": "hsl(185, 2%, 10%)",
  //   },
  //   layout: {},
  //   type: "fill",
  //   source: "mapSource",
  // },
  // {
  //   id: "building",
  //   type: "fill",
  //   "source-layer": polygonLayer,
  //   filter: ["==", "building", "yes"],
  //   minzoom: 12,
  //   layout: {},
  //   paint: {
  //     "fill-color": "hsl(55, 1%, 17%)",
  //     "fill-opacity": {
  //       base: 1,
  //       stops: [
  //         [15.5, 0],
  //         [16, 1],
  //       ],
  //     },
  //     "fill-outline-color": "hsl(55, 1%, 15%)",
  //   },
  // },
];

const lineCases = [
  {
    id: "primary-case",
    type: "line",
    source: "mapSource",
    "source-layer": lineLayer,
    filter: ["all", ["==", "fclass", "primary", "motorway"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-gap-width": {
        base: 1.5,
        stops: [
          [5, 0.75],
          [18, 32],
        ],
      },
      "line-color": "hsl(185, 2%, 15%)",
    },
  },
  {
    id: "secondary-tertiary-case",
    type: "line",
    source: "mapSource",
    "source-layer": lineLayer,
    filter: ["all", ["in", "fclass", "secondary", "tertiary"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-width": {
        base: 1.2,
        stops: [
          [10, 0.75],
          [18, 2],
        ],
      },
      "line-gap-width": {
        base: 1.5,
        stops: [
          [8.5, 0.5],
          [10, 0.75],
          [18, 26],
        ],
      },
      "line-color": "hsl(185, 2%, 15%)",
    },
  },
  {
    id: "tunnel-trunk-case",
    type: "line",
    source: "mapSource",
    "source-layer": lineLayer,
    filter: ["all", ["==", "fclass", "trunk"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [5, 0.75],
          [16, 2],
        ],
      },
      "line-color": "hsl(185, 2%, 15%)",
      "line-gap-width": {
        base: 1.5,
        stops: [
          [5, 0.75],
          [18, 32],
        ],
      },
      "line-opacity": 1,
    },
  },
  {
    id: "tunnel-service-link-track-case",
    type: "line",
    source: "mapSource",
    "source-layer": lineLayer,
    minzoom: 14,
    filter: [
      "all",
      [
        "in",
        "fclass",
        "link",
        "service",
        "track",
        "primary_link",
        "secondary_link",
        "tertiary_link",
      ],
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [12, 0.75],
          [20, 2],
        ],
      },
      "line-color": "hsl(185, 2%, 15%)",
      "line-gap-width": {
        base: 1.5,
        stops: [
          [14, 0.5],
          [18, 12],
        ],
      },
    },
  },
  {
    id: "tunnel-motorway_link-case",
    type: "line",
    source: "mapSource",
    "source-layer": lineLayer,
    minzoom: 13,
    filter: ["all", ["==", "fclass", "motorway_link"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [12, 0.75],
          [20, 2],
        ],
      },
      "line-color": "hsl(185, 2%, 15%)",
      "line-gap-width": {
        base: 1.5,
        stops: [
          [12, 0.5],
          [14, 2],
          [18, 18],
        ],
      },
    },
  },
  {
    id: "tunnel-trunk_link-case",
    type: "line",
    source: "mapSource",
    "source-layer": lineLayer,
    minzoom: 13,
    filter: ["all", ["==", "fclass", "trunk_link"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [12, 0.75],
          [20, 2],
        ],
      },
      "line-color": "hsl(185, 2%, 15%)",
      "line-gap-width": {
        base: 1.5,
        stops: [
          [12, 0.5],
          [14, 2],
          [18, 18],
        ],
      },
    },
  },
  {
    id: "path-case",
    type: "line",
    source: "mapSource",
    "source-layer": lineLayer,
    minzoom: 13,
    filter: [
      "all",
      [
        "in",
        "fclass",
        "bridleway",
        "footway",
        "living_streat",
        "path",
        "residential",
        "unclassified",
        "unknown",
      ],
    ],
    layout: {
      "line-join": "round",
    },
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [12, 0.75],
          [20, 2],
        ],
      },
      "line-color": "hsl(185, 2%, 15%)",
      "line-gap-width": {
        base: 1.5,
        stops: [
          [14, 0.5],
          [18, 12],
        ],
      },
    },
  },
];

const lineFill = [
  {
    id: "primary",
    ref: "primary-case",
    // "source-layer": lineLayer,
    filter: ["all", ["==", "fclass", "primary", "motorway"]],
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [5, 0.75],
          [18, 32],
        ],
      },
      "line-color": "hsl(0, 0%, 27%)",
      "line-opacity": 1,
      "line-dasharray": [1, 0],
      "line-blur": 0,
    },
    type: "line",
    source: "mapSource",
  },
  {
    id: "secondary-tertiary",
    ref: "secondary-tertiary-case",
    filter: ["all", ["in", "fclass", "secondary", "tertiary"]],
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [8.5, 0.5],
          [10, 0.75],
          [18, 26],
        ],
      },
      "line-color": "hsl(0, 0%, 27%)",
      "line-opacity": 1,
      "line-dasharray": [1, 0],
      "line-blur": 0,
    },
    type: "line",
    source: "mapSource",
  },
  {
    id: "tunnel-trunk",
    ref: "tunnel-trunk-case",
    filter: ["all", ["==", "fclass", "trunk"]],
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [5, 0.75],
          [18, 32],
        ],
      },
      "line-color": "hsl(0, 0%, 27%)",
    },
    type: "line",
    source: "mapSource",
  },
  {
    id: "tunnel-service-link-track",
    ref: "tunnel-service-link-track-case",
    filter: [
      "all",
      [
        "in",
        "fclass",
        "link",
        "service",
        "track",
        "primary_link",
        "secondary_link",
        "tertiary_link",
      ],
    ],
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [14, 0.5],
          [18, 12],
        ],
      },
      "line-color": "hsl(0, 0%, 27%)",
      "line-dasharray": [1, 0],
    },
    type: "line",
    source: "mapSource",
  },
  {
    id: "tunnel-motorway_link",
    ref: "tunnel-motorway_link-case",
    filter: ["all", ["==", "fclass", "motorway_link"]],
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [12, 0.5],
          [14, 2],
          [18, 18],
        ],
      },
      "line-color": "hsl(0, 0%, 27%)",
      "line-opacity": 1,
      "line-dasharray": [1, 0],
    },
    type: "line",
    source: "mapSource",
  },
  {
    id: "tunnel-trunk_link",
    ref: "tunnel-trunk_link-case",
    filter: ["all", ["==", "fclass", "trunk_link"]],
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [12, 0.5],
          [14, 2],
          [18, 18],
        ],
      },
      "line-color": "hsl(0, 0%, 27%)",
      "line-opacity": 1,
      "line-dasharray": [1, 0],
    },
    type: "line",
    source: "mapSource",
  },
  {
    id: "path",
    ref: "path-case",
    filter: [
      "all",
      [
        "in",
        "fclass",
        "bridleway",
        "footway",
        "living_streat",
        "path",
        "residential",
        "unclassified",
        "unknown",
      ],
    ],
    paint: {
      "line-width": {
        base: 1.5,
        stops: [
          [14, 0.5],
          [18, 12],
        ],
      },
      "line-color": "hsl(0, 0%, 27%)",
      "line-opacity": 1,
    },
    type: "line",
    source: "mapSource",
  },
];
const lines = [...lineCases, ...lineFill];
const texts = [
  //text
  {
    id: "road-label-large",
    type: "symbol",
    source: "mapSource",
    "source-layer": pointLayer,
    minzoom: 12,
    filter: [
      "in",
      "fclass",
      "motorway",
      "primary",
      "secondary",
      "tertiary",
      "trunk",
    ],
    layout: {
      "text-size": {
        base: 1,
        stops: [
          [9, 8],
          [20, 14],
        ],
      },
      "text-max-angle": 30,
      "symbol-spacing": 400,
      "text-font": ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
      "symbol-placement": "line",
      "text-padding": 1,
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "viewport",
      "text-field": "{name}",
      "text-letter-spacing": 0.01,
    },
    paint: {
      "text-color": "hsl(0, 0%, 78%)",
      "text-halo-color": "#212121",
      "text-halo-width": 1,
      "text-halo-blur": 0,
    },
  },
  //其他的text
  {
    id: "road-label-small",
    type: "symbol",
    metadata: {
      "mapbox:group": "1444933721429.3076",
    },
    "source-layer": pointLayer,
    sourceLayer: "roads",
    minzoom: 15,
    filter: [
      "all",
      [
        "!in",
        "fclass",
        // 'ferry',
        // 'golf',
        "link",
        // 'motorway',
        "path",
        "pedestrian",
        "primary",
        "secondary",
        "street",
        // 'street_limited',
        "tertiary",
        // 'track',
        "trunk",
      ],
    ],
    layout: {
      "text-size": {
        base: 1,
        stops: [
          [15, 10],
          [20, 13],
        ],
      },
      "text-max-angle": 30,
      "symbol-spacing": 500,
      "text-font": ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
      "symbol-placement": "line",
      "text-padding": 1,
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "viewport",
      "text-field": "{name}",
      "text-letter-spacing": 0.01,
    },
    paint: {
      "text-color": "hsl(0, 0%, 78%)",
      "text-halo-color": "#212121",
      "text-halo-width": 1.25,
      "text-halo-blur": 0,
    },
  },
  {
    id: "pois",
    type: "symbol",
    source: "mapSource",
    "source-layer": pointLayer,
    minzoom: 14,
    layout: {
      "text-line-height": 1.1,
      "text-size": {
        base: 1,
        stops: [
          [14, 11],
          [20, 12],
        ],
      },
      "text-max-angle": 38,
      "symbol-spacing": 250,
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Regular"],
      "text-padding": 2,
      "text-offset": [0, 0],
      "text-field": "{name}",
      "text-letter-spacing": 0.01,
      "text-max-width": 8,
    },
    paint: {
      "text-color": "hsl(0, 0%, 60%)",
      "text-halo-color": "#212121",
      "text-halo-width": 1,
      "text-halo-blur": 0,
    },
  },
  {
    id: "place-city",
    type: "symbol",
    source: "mapSource",
    "source-layer": pointLayer,
    maxzoom: 14,
    filter: ["all", ["==", "fclass", "city"]],
    layout: {
      "text-field": "{name}",
      "text-size": {
        base: 0.9,
        stops: [
          [5, 12],
          [12, 22],
        ],
      },
      "text-anchor": "top",
      "text-offset": {
        base: 1,
        stops: [
          [7.99, [0, 0.1]],
          [8, [0, 0]],
        ],
      },
      "text-font": {
        base: 1,
        stops: [
          [7, ["DIN Offc Pro Regular", "Arial Unicode MS Regular"]],
          [8, ["DIN Offc Pro Medium", "Arial Unicode MS Regular"]],
        ],
      },
      "icon-image": "dot-10",
    },
    paint: {
      "text-halo-width": 1,
      "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
      "text-color": "hsl(0, 0%, 90%)",
      "text-halo-blur": 0,
      "icon-opacity": {
        base: 1,
        stops: [
          [7.99, 1],
          [8, 0],
        ],
      },
    },
  },
  {
    id: "place-hamlet",
    type: "symbol",
    source: "mapSource",
    "source-layer": pointLayer,
    minzoom: 10,
    maxzoom: 16,
    filter: ["in", "fclass", "hamlet", "locality"],
    layout: {
      "text-field": "{name}",
      "text-font": ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
      "text-size": {
        base: 1,
        stops: [
          [12, 11.5],
          [15, 16],
        ],
      },
    },
    paint: {
      "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
      "text-halo-width": 1.25,
      "text-color": "hsl(0, 0%, 85%)",
      "text-halo-blur": 0,
    },
  },
  {
    id: "place-town",
    type: "symbol",
    source: "mapSource",
    "source-layer": pointLayer,
    minzoom: 7,
    maxzoom: 15,
    filter: ["==", "fclass", "town"],
    layout: {
      "text-size": {
        base: 1,
        stops: [
          [7, 5.5],
          [15, 14],
        ],
      },
      "text-font": {
        base: 1,
        stops: [
          [11, ["DIN Offc Pro Regular", "Arial Unicode MS Regular"]],
          [12, ["DIN Offc Pro Medium", "Arial Unicode MS Regular"]],
        ],
      },
      "text-padding": 2,
      "text-offset": [0, 0],
      "text-field": "{name}",
      "text-max-width": 7,
    },
    paint: {
      "text-color": {
        base: 1,
        stops: [
          [10, "hsl(0, 0%, 75%)"],
          [11, "hsl(0, 0%, 85%)"],
        ],
      },
      "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
      "text-halo-width": 1.25,
      "icon-opacity": {
        base: 1,
        stops: [
          [7.99, 1],
          [8, 0],
        ],
      },
      "text-halo-blur": 0,
    },
  },
  {
    id: "place-village",
    type: "symbol",
    source: "mapSource",
    "source-layer": pointLayer,
    minzoom: 11,
    maxzoom: 15,
    filter: ["==", "fclass", "village"],
    layout: {
      "text-field": "{name}",
      "text-font": ["DIN Offc Pro Regular", "Arial Unicode MS Regular"],
      "text-max-width": 7,
      "text-size": {
        base: 1,
        stops: [
          [10, 11.5],
          [16, 13],
        ],
      },
    },
    paint: {
      "text-halo-color": "hsla(0, 0%, 10%, 0.75)",
      "text-halo-width": 1.25,
      "text-color": {
        base: 1,
        stops: [
          [10, "hsl(0, 0%, 75%)"],
          [11, "hsl(0, 0%, 85%)"],
        ],
      },
      "text-halo-blur": 0,
    },
  },
];
const layers = [background, ...fills];
