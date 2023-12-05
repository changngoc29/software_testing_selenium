const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { describe } = require("mocha");

describe("assignment - Submission Successfully", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("assignment - Submission Successfully", async function () {
    await driver.get("https://school.moodledemo.net/my/courses.php");
    await driver.manage().window().setRect({ width: 1680, height: 1025 });
    await driver.findElement(By.linkText("Dashboard")).click();
    await driver.findElement(By.linkText("Add submission")).click();
    await driver
      .findElement(By.css(".dndupload-message > .dndupload-arrow"))
      .click();
    await driver.findElement(By.css(".fp-file")).click();
    {
      const element = await driver.findElement(By.css(".fp-btn-mkdir > .btn"));
      await driver.actions({ bridge: true }).moveToElement(element).perform();
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body");
      await driver
        .actions({ bridge: true })
        .moveToElement(element, 0, 0)
        .perform();
    }
    await driver.findElement(By.id("id_submitbutton")).click();
  });
});

describe("assignment - Submit assignment error", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("assignment - Submit assignment error", async function () {
    await driver.get("https://school.moodledemo.net/my/courses.php");
    await driver.manage().window().setRect({ width: 1680, height: 1025 });
    await driver.findElement(By.linkText("Dashboard")).click();
    await driver.findElement(By.linkText("Add submission")).click();
    await driver.findElement(By.css(".dndupload-message .fa")).click();
    await driver
      .findElement(By.id("yui_3_18_1_1_1701615261067_1014"))
      .sendKeys("/Users/lap.nguyen/Downloads/Moodle.side");
    await driver.findElement(By.css(".fp-upload-btn")).click();
    await driver.findElement(By.id("id_submitbutton")).click();
  });
});
