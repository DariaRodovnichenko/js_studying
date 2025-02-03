const getBTCPrice = async () => {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const response = await fetch(url);
  const result = await response.json();
  const btcPrice = result.bpi.USD.rate_float;
  console.log(btcPrice);
  document.querySelector("#demoAJAX").innerHTML = `<h1>${btcPrice}</h1>`;
};
getBTCPrice();

setInterval(() => {
  getBTCPrice();
}, 30 * 1000);
