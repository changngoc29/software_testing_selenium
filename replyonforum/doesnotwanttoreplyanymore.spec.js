// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Does not want to reply any more', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Does not want to reply any more', async function() {
    await driver.get("https://school.moodledemo.net/course/view.php?id=51")
    await driver.manage().window().setRect({ width: 854, height: 816 })
    await driver.findElement(By.css("#module-944 .aalink")).click()
    await driver.findElement(By.css("#p429 .link > a")).click()
    await driver.findElement(By.linkText("Reply")).click()
    await driver.executeScript("window.scrollTo(0,300)")
    await driver.findElement(By.name("post")).sendKeys("test cancel")
    await driver.findElement(By.name("cancelbtn")).click()
  })
})