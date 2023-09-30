const apiKey = "4efa33b9995a9b5bee68489e372475b7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=4efa33b9995a9b5bee68489e372475b7";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);
}
console.log("ami t o more jabo chole jabo rekhe jabo sobi");
