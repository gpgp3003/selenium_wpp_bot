const { Builder, By, Key, until } = require('selenium-webdriver');

(async () => {

  let driver = await new Builder().forBrowser('chrome').build();

  let el;
  let celular = 5511222222222;
  for (i = 0; i < 100; i++) {
    await driver.get(`https://api.whatsapp.com/send?phone='${celular}'&text=teste%20bot%20'${i}'`);
    el = driver.wait(until.elementLocated(By.id('action-button')), 5000);
    await driver.executeScript("arguments[0].click();", el);
    el = driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), 'use o WhatsApp Web')]`)), 5000);
    await driver.executeScript("arguments[0].click();", el);
    await driver.wait(until.elementLocated(By.id('main')), 30000);
    el = driver.wait(until.elementLocated(By.className('_3M-N-')), 5000);
    await driver.executeScript("arguments[0].click();", el);

  }

})();
