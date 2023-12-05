const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("TC-007-003", function () {
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
  it("TC-007-003", async function () {
    await driver.get("https://school.moodledemo.net/");
    await driver.manage().window().setRect({ width: 1680, height: 1025 });
    await driver.findElement(By.linkText("Log in")).click();
    await driver.findElement(By.css(".login-container")).click();
    await driver.findElement(By.id("username")).sendKeys("student");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("moodle");
    await driver.findElement(By.id("loginbtn")).click();
    await driver.findElement(By.linkText("My courses")).click();
    await driver.manage().window().setRect({ width: 788, height: 832 });
    await driver.findElement(By.id("displaydropdown")).click();
    await driver.findElement(By.linkText("List")).click();
    await driver.findElement(By.css("#sortingdropdown > span")).click();
    await driver.findElement(By.linkText("Sort by course name")).click();
    {
      const element = await driver.findElement(By.id("sortingdropdown"));
      await driver.actions({ bridge: true }).move(element).perform();
    }
    await driver.findElement(By.css("#groupingdropdown > span")).click();
    await driver.findElement(By.linkText("All")).click();
    {
      const element = await driver.findElement(By.id("groupingdropdown"));
      await driver.actions({ bridge: true }).move(element).perform();
    }
  });
});
