const yoodMethods = require('../testAssets/yoodMethods');
const yoodData    = require('../testAssets/yoodData')

const errMsg1 = 'Runtime Error: v.map is not a function';
const errMsg2 = 'Internal Server Error';

let YoodPage  = {};

module.exports = {
    beforeEach: browser => {
        yoodPage = browser.page.yoodPage()
        yoodPage.navigate()
            .waitForElementPresent('@logo', 5000)
    },
    // Needs to be "afterEach" to handle initial "Got it" pop-up
    afterEach: browser => {
        browser.end()
    },

    'Runtime Error - Advanced Search': () => {
        // Click "Got it"
        yoodMethods.clickElement(yoodPage, '@gotIt', 500)
        // Click Search icon
        yoodMethods.clickElement(yoodPage, '@searchIcon', 500)
        // Click on "Advanced search"
        yoodMethods.clickElement(yoodPage, '@advSearch', 500)
        // Enter "dean" as search word
        yoodMethods.enterText(yoodPage, '@keywordInput', yoodData.textRunErr, 500)
        // Click checkbox "Lawn and Garden"
        yoodPage.click('@lawnChkBox')
        // Click "Search" 
        yoodPage.click('@searchBtn')
        // Click on "Advanced search"
        yoodMethods.clickElement(yoodPage, '@advSearch', 500)
        // Click on "X" of keyword "dean" to delete it
        yoodMethods.clickElement(yoodPage, '@keywordFilter', 500)
        // Verify page title does not contain failure
        yoodMethods.checkTitle(yoodPage, errMsg1, 500)
    },

    'Internal Server Error - click on pic': () => {
        // Click "Got it"
        yoodMethods.clickElement(yoodPage, '@gotIt', 500)
        // Click Search icon
        yoodMethods.clickElement(yoodPage, '@searchIcon', 500)
        // Enter "corn" as search word
        yoodMethods.enterText(yoodPage, '@keywordInput', yoodData.picIntSrvErr, 500)
        // Click "Search" 
        yoodPage.click('@searchBtn')
        // Wait for results
        yoodMethods.clickElement(yoodPage, '@popcornMachImg', 2000)
        yoodMethods.checkTitle(yoodPage, errMsg2, 1000)
    },
}