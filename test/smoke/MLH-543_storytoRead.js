const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('MLH-543 Page header is present and correct  ', function() {

    it('TCS-001 page header My little hero is present', function (){
        browser.url('');
        const headerMLH = $(sel.headerMLH).isDisplayed();
        expect(headerMLH).toEqual(true);
    });

    it('TCS-002 page header My little hero is correct', function (){
        const headerMLH = $(sel.headerMLH).getText();
        expect(headerMLH).toEqual(exp.headerMLH);
    });



})
