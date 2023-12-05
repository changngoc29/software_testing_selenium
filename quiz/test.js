const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("quiz", function () {
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
  it("should attemp quiz successfully", async function () {
    await driver.get("https://school.moodledemo.net/my/courses.php");
    await driver.manage().window().setRect({ width: 1680, height: 964 });
    await driver
      .findElement(By.css(".list-group-item:nth-child(2) .aalink"))
      .click();
    await driver
      .findElement(By.linkText("Fun quiz: How's your Social media?"))
      .click();
    await driver.findElement(By.linkText("Attempt")).click();
    await driver.findElement(By.id("q101:1_answer0")).click();
    await driver.findElement(By.linkText("Next")).click();
    await driver.findElement(By.id("mod_quiz-next-nav")).click();
    await driver.findElement(By.linkText("Submit")).click();
    await driver.findElement(By.linkText("Review")).click();
    await driver.findElement(By.linkText("Finish review")).click();
    await driver.close();
  });

  it("should not attempt the quiz when the quiz is outdated", async function () {
    await driver.get("https://school.moodledemo.net/course/view.php?id=69");
    await driver.manage().window().setRect({ width: 1680, height: 964 });
    await driver.findElement(By.css("#module-1188 .aalink")).click();
    await driver.findElement(By.id("single_button656af2cac58597")).click();
  });

  it("should does not save the answer if user leave the quiz incedently", async function () {
    await driver.get("https://school.moodledemo.net/course/view.php?id=69");
    await driver.manage().window().setRect({ width: 1680, height: 964 });
    await driver.findElement(By.linkText("Quiz")).click();
    await driver.findElement(By.id("single_button656af015d8fbc7")).click();
    await driver.findElement(By.css("#module-1188 .aalink")).click();
    await driver.findElement(By.id("single_button656af01c2a43f7")).click();
    await driver.findElement(By.id("id_submitbutton")).click();
    await driver.findElement(By.id("q107:1_choice0")).click();
    await driver.findElement(By.linkText("MCC")).click();
    await driver.findElement(By.css("#module-1188 .aalink")).click();
    await driver.findElement(By.id("single_button656af02c4ff897")).click();
  });

  it("should automatically submit the quiz if the timer expires", async function () {
    await driver.get("https://school.moodledemo.net/course/view.php?id=69");
    await driver.manage().window().setRect({ width: 1680, height: 964 });
    await driver.findElement(By.css("#module-1188 .aalink")).click();
    await driver.findElement(By.id("single_button656aee47eff517")).click();
    await driver.findElement(By.id("id_submitbutton")).click();
    await driver.findElement(By.id("q105:1_choice1")).click();
    await driver.findElement(By.id("mod_quiz-next-nav")).click();
    await driver.findElement(By.id("q105:2_answer1")).click();
    await driver.findElement(By.id("mod_quiz-next-nav")).click();
    await driver.findElement(By.linkText("Finish review")).click();
    await driver.close();
  });
});
