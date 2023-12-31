const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { describe } = require("mocha");

describe("login - teacher", function () {
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
  it("login - teacher", async function () {
    await driver.get("https://school.moodledemo.net/");
    await driver.manage().window().setRect({ width: 1680, height: 1025 });
    await driver.findElement(By.linkText("Log in")).click();
    await driver.findElement(By.css(".login-container")).click();
    await driver.findElement(By.id("username")).sendKeys("teacher");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("moodle");
    await driver.findElement(By.id("loginbtn")).click();
  });
});

describe("login - manager", function () {
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
  it("login - manager", async function () {
    await driver.get("https://school.moodledemo.net/");
    await driver.manage().window().setRect({ width: 1680, height: 1025 });
    await driver.findElement(By.linkText("Log in")).click();
    await driver.findElement(By.css(".login-wrapper")).click();
    await driver.findElement(By.id("username")).sendKeys("manager");
    await driver.findElement(By.id("password")).sendKeys("moodle");
    await driver.findElement(By.id("loginbtn")).click();
  });
});

describe("login - student", function () {
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
  it("login - student", async function () {
    await driver.get("https://school.moodledemo.net/");
    await driver.manage().window().setRect({ width: 1680, height: 1025 });
    await driver.findElement(By.linkText("Log in")).click();
    await driver.findElement(By.id("username")).click();
    await driver.findElement(By.id("username")).sendKeys("student");
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("password")).sendKeys("moodle");
    await driver.findElement(By.id("loginbtn")).click();
  });
});
