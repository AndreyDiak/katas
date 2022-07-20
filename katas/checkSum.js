function checkSum(string) {
  let [names, prices] = [[], []];
  let [name, price, summary] = ['', '', 0];
  const map = {
    0: 'коп',
    1: 'руб',
    2: 'тыс',
    3: 'млн',
  }
  for (let i = 0;i < string.length; i++) {
    if(string[i] >= 0 && string[i] <= 9 || string[i] === '.') {
      // цена...
      if (name) {
        names.push(name);
        name = '';
      }
      price += string[i];
    } else {
      // товар...
      if (price) {
        prices.push(price);
        price = '';
      }
      name+= string[i];
    }
  }
  prices.push(price)
  // console.log(prices)
  for (let i = 0; i < prices.length; i ++) {
    let sum = prices[i].split('.');
    if (sum.length === 1) {
      summary += Number(sum[0]); // рубли...
    } else {
      sum.reverse().map((item, index) => {
        item = Number(item);
        if (index === 0 && item < 10) {
          summary += item / 10; // копейки...
        } else {
          // console.log(item + ' ' + map[index]);
          summary += index === 0
            ? item / 100 : index === 1 // коп ...
              ? item : index === 2  // руб ...
                ? item * 1000 : index === 3 // тыс ...
                  ? item * 100000 : 0 // млн ...
        }
      })
    }
  }
  return Number(summary.toFixed(2))
}

console.log(checkSum('колбаса150хлеб30чипсы150.5спички0.99вода78.3'))