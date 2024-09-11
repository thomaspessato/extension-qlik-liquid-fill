const ext = {
  support: {
    cssScaling: false,
    snapshot: false,
    export: true,
    sharing: false,
    exportData: true,
    viewData: true,
  },
  definition: {
    type: "items",
    component: "accordion",
    items: {
      data: {
        uses: 'data',
      },
      settings: {
        uses: 'settings',
      },
      bagProperties: {
        type: "items",
        label: "Liquid Fill properties",
        grouped: true,
        items: {
          bagProps: {
            type: "items",
            items: {
              maxValue: {
                type: "string",
                ref: "bag.maxValue",
                component: "expression",
                label: "Max value",
                defaultValue: "100"
              },
              minValue: {
                type: "string",
                ref: "bag.minValue",
                component: "expression",
                label: "Min value",
                defaultValue: "0"
              },
              color: {
                type: "string",
                ref: "bag.color",
                component: "expression",
                label: "Color",
                defaultValue: "red"
              },
              offsetColor: {
                type: "string",
                ref: "bag.offsetColor",
                component: "expression",
                label: "Offset color",
                defaultValue: "darkred"
              },
              fontSize: {
                type: "string",
                ref: "bag.fontSize",
                component: "expression",
                label: "Font size",
                defaultValue: "20px"
              },
            },
          },
        },
      },
    },
  }
};


export default ext;