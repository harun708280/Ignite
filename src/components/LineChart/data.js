const energySources = [
  { value: "hydro", name: "Crude Oil" },
  { value: "oil", name: "Gas Oil" },
  { value: "gas", name: "Natural gas" },
  { value: "coal", name: "Coal" },
];
const countriesInfo = [
  { country: "Jan", hydro: 1200, oil: 9000, gas: 8000, coal: 7000 },
  { country: "Feb", hydro: 8000, oil: 8500, gas: 10000, coal: 8500 },
  { country: "Mar", hydro: 9000, oil: 9000, gas: 9500, coal: 8000 },
  { country: "Apr", hydro: 12000, oil: 8900, gas: 10500, coal: 9000 },
  { country: "May", hydro: 6000, oil: 14000, gas: 11500, coal: 9500 },
  { country: "Jun", hydro: 4000, oil: 9000, gas: 11000, coal: 8700 },
  { country: "Jul", hydro: 9000, oil: 13500, gas: 12000, coal: 9200 },
  { country: "Aug", hydro: 3000, oil: 14500, gas: 12500, coal: 9700 },
  { country: "Sep", hydro: 12000, oil: 14000, gas: 13000, coal: 9800 },
  { country: "Oct", hydro: 1200, oil: 15000, gas: 13500, coal: 9900 },
  { country: "Nov", hydro: 14500, oil: 15500, gas: 14000, coal: 10000 },
  { country: "Dec", hydro: 8000, oil: 16000, gas: 14500, coal: 10500 },
];

const dataModule = {
  getEnergySources() {
    return energySources;
  },
  getCountriesInfo() {
    return countriesInfo;
  },
};

export default dataModule;
