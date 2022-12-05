const rp = require('request-promise');
const { convertArrayToCSV } = require('convert-array-to-csv');
const cheerio = require('cheerio');
async function s() {
  const url = 'https://hi-tech.md/kompyuternaya-tehnika/page-'; //95
  l = 95
  data = []

  async function start() {
    for (let index = 1; index <= l; index++) {
      u = url + index

      await rp(u)
        .then(function (html) {
          //success!
          // console.log(html);

          const $ = cheerio.load(html);
          $('div.ypi-grid-list__item_body').each((i, elem) => {
            const $$ = cheerio.load(elem);
            costString = $$("span.ty-price-num").text();
            id = $$("span.ty-control-group__item").text().substring(0, 11);
            title = $$("div.ty-grid-list__item-name").text().replace(/\r?\n/g, "")
            price = costString.substring(0, costString.length - 3).replace(/\s/g, '')
            data.push({ id: id, title: title, price: price })
          });
          // console.log($('big > a', html));
          console.log(data)
        })
        .catch(function (err) {
          //handle error
        });

    }
    return Promise.resolve
  }
  const x = await start()
  const header = ['id', 'name', 'price'];
  options = {
    header,
    separator: ';'
  }
  const csv = convertArrayToCSV(data, {
    header,
    separator: ';'
  });

  const fs = require("fs");
  fs.writeFile("data.csv", csv, "utf-8", (err) => {
    if (err) console.log(err);
    else console.log("Data saved");
  });
}
s()