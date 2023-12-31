const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { describe } = require("mocha");

describe(" Successful - exporting calendar file (“.ics”)", function () {
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
  it("TC-009-001", async function () {
    await driver.get("https://school.moodledemo.net/login/index.php");
    await driver.manage().window().setRect({ width: 788, height: 832 });
    await driver.findElement(By.id("username")).sendKeys("teacher");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("moodle");
    await driver.findElement(By.id("loginbtn")).click();
    await driver.findElement(By.id("user-menu-toggle")).click();
    await driver.findElement(By.linkText("Calendar")).click();
    await driver.findElement(By.css(".maincalendar")).click();
    await driver.findElement(By.linkText("Import or export calendars")).click();
    await driver.findElement(By.css(".float-right:nth-child(3)")).click();
    await driver.findElement(By.css("#id_events_exportevents_all")).click();
    await driver
      .findElement(By.css("#fgroup_id_period .form-check-inline:nth-child(1)"))
      .click();
    await driver.findElement(By.id("id_export")).click();
  });
});

describe("Successful - exporting calendar after fill all the unfilled requirement fields", function () {
  this.timeout(50000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("TC-009-002", async function () {
    await driver.get("https://school.moodledemo.net/login/index.php");
    await driver.manage().window().setRect({ width: 788, height: 832 });
    await driver.findElement(By.id("username")).sendKeys("teacher");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("moodle");
    await driver.findElement(By.id("loginbtn")).click();
    await driver.findElement(By.id("user-menu-toggle")).click();
    await driver.findElement(By.linkText("Calendar")).click();
    await driver.findElement(By.css(".maincalendar")).click();
    await driver.findElement(By.linkText("Import or export calendars")).click();
    await driver.findElement(By.css(".float-right:nth-child(3)")).click();
    await driver.findElement(By.id("id_export")).click();
    await driver
      .findElement(By.css("#fgroup_id_events .form-check-inline:nth-child(1)"))
      .click();
    await driver
      .findElement(By.css("#fgroup_id_period .form-check-inline:nth-child(1)"))
      .click();
    await driver.findElement(By.id("id_export")).click();
  });
});

describe("Successful - exporting calendar URL", function () {
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
  it("TC-009-003", async function () {
    await driver.get("https://school.moodledemo.net/login/index.php");
    await driver.manage().window().setRect({ width: 788, height: 832 });
    await driver.findElement(By.id("username")).sendKeys("teacher");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("moodle");
    await driver.findElement(By.id("loginbtn")).click();
    await driver.findElement(By.id("user-menu-toggle")).click();
    await driver.findElement(By.linkText("Calendar")).click();
    await driver.findElement(By.css(".maincalendar")).click();
    await driver.findElement(By.linkText("Import or export calendars")).click();
    await driver.findElement(By.css(".float-right:nth-child(3)")).click();
    await driver
      .findElement(By.css("#fgroup_id_events .form-check-inline:nth-child(1)"))
      .click();
    await driver
      .findElement(By.css("#fgroup_id_period .form-check-inline:nth-child(1)"))
      .click();
    await driver.findElement(By.id("id_generateurl")).click();
    await driver.executeScript("window.scrollTo(0,201.60000610351562)");
    await driver.findElement(By.id("copyexporturl")).click();
  });
});
