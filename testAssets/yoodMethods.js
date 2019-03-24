var methods = {
    clickElement : (pageObj, elementName, waitTime) => {
        pageObj.api.pause(waitTime)
        pageObj.waitForElementPresent(elementName)
        pageObj.click(elementName)
    },
    enterText : (pageObj, elementName, searchText, waitTime) => {
        pageObj.api.pause(waitTime)
        pageObj.waitForElementPresent(elementName)
        pageObj.setValue(elementName, searchText)
    },
    checkTitle : (pageObj, msg1, waitTime) => {
        pageObj.getTitle((title) => {
            pageObj.api.pause(waitTime);
            pageObj.assert.notEqual(title, msg1);
        })
    }
}
module.exports = methods;