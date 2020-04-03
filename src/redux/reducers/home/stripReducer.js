import createReducer from "../../../lib/createReducer";
function getDiffColor() {
  var ColorCode =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  return ColorCode;
}
const initial = {
  trips: [
    {
      title: "Total Hardness (ppm)",
      baseColor: [
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor()
      ],
      value: "0",
      selected: "",
      values: ["0", "110", "250", "500", "1000"]
    },
    {
      title: "Total Chlorine (ppm)",
      baseColor: [
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor()
      ],

      value: "0",
      selected: "",
      values: ["0", "1", "3", "5", "10"]
    },
    {
      title: "Free Chlorine (ppm)",
      baseColor: [
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor()
      ],

      value: "0",
      selected: "",
      values: ["0", "1", "3", "5", "10"]
    },
    {
      title: "Ph (ppm)",
      baseColor: [
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor()
      ],

      value: "0",
      selected: "",
      values: ["6.2", "6.8", "7.2", "7.8", "8.4"]
    },
    {
      title: "Total Alkalinity (ppm)",
      baseColor: [
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor()
      ],

      value: "0",
      selected: "",
      values: ["0", "40", "120", "180", "240"]
    },
    {
      title: "Total Acid (ppm)",
      baseColor: [
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor(),
        getDiffColor()
      ],

      value: "0",
      selected: "",
      values: ["0", "50", "100", "150", "200"]
    }
  ]
};

export const stripReducer = createReducer(initial, {});
