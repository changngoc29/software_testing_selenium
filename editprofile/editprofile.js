// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Basic flow edit profile', function() {
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
  it('Basic flow edit profile', async function() {
    await driver.get("https://school.moodledemo.net/my/courses.php")
    await driver.manage().window().setRect({ width: 858, height: 816 })
    {
      const element = await driver.findElement(By.css(".userpicture"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.id("user-menu-toggle"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".userpicture")).click()
    await driver.findElement(By.linkText("Profile")).click()
    await driver.findElement(By.linkText("Edit profile")).click()
    await driver.findElement(By.id("id_firstname")).click()
    await driver.findElement(By.id("id_firstname")).sendKeys("Tester")
    await driver.findElement(By.id("id_submitbutton")).click()
    await driver.executeScript("window.scrollTo(0,1505.5999755859375)")
  })
})


describe('not commit change', function() {
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
  it('not commit change', async function() {
    await driver.get("https://school.moodledemo.net/my/courses.php")
    await driver.manage().window().setRect({ width: 854, height: 816 })
    await driver.findElement(By.css(".userpicture")).click()
    await driver.findElement(By.linkText("Profile")).click()
    await driver.findElement(By.linkText("Edit profile")).click()
    await driver.findElement(By.id("id_firstname")).click()
    await driver.findElement(By.id("id_firstname")).sendKeys("test test")
    await driver.findElement(By.id("id_cancel")).click()
  })
})
