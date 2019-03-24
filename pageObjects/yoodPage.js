module.exports = {
    url : "https://alpha.yoodlize.com",
    elements : {
        logo          : 'img[src="/icons/logo-mark.svg"]',
        searchIcon    : '.fa-search',
        gotIt         : '.jtUFi',
        advSearch     : '.NqsLm',
        keywordInput  : 'input[id="keyword-search-input"]',
        searchBtn     : '.clrdLJ',
        keywordFilter : '.sc-kaNhvL:nth-child(2) .fal',
        lawnChkBox : {
            selector       : '//div[13]/div/ins',
            locateStrategy : 'xpath',
        },
        popcornMachImg : {
            selector       : '//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[2]/div/div/div/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div/div/a/div/div/div/div',
            locateStrategy : 'xpath',
        },
    }
}