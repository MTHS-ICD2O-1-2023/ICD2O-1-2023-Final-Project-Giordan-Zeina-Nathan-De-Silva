const wheel = document.getElementById("wheel")
const spinBtn = document.getElementById("spin-btn")
const finalValue = document.getElementById("final-value")

// Stores the value of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
]

// Size of each piece
const data = [16, 16, 16, 16, 16, 16]

// Colour of each piece
var pieColours = [
  "#0099ff",
  "#ff1a21",
  "#ff66ff",
  "#ffff1a",
  "#99ff33",
  "#7300e6",
]

// Chart
let myChart = new Chart(wheel, {
  // Plugin for showing text on pie chart
  plugins: [ChartDataLabels],
  // Chart Type Pie
  type: "pie",
  data: {
    // Labels
    labels: [1, 2, 3, 4, 5, 6],
    // Pie settings
    datasets: [
      {
        backgroundColour: pieColours
      },
    ],
  },
  options: {
    
  }
})