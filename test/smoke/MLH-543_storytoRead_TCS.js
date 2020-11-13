const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues5AndClick = require('../../helpers/inputValues5AndClick');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');
const storyAgeText = require('../../helpers/storyAgeText');

describe('MLH-543 Page header is present and correct  ', function() {

    xit('TCS-001 page header My little hero is present', function (){
        browser.url('');
        const headerMLH = $(sel.headerMLH).isDisplayed();
        expect(headerMLH).toEqual(true);
    });

    xit('TCS-002 page header My little hero is correct', function (){
        const headerMLH = $(sel.headerMLH).getText();
        expect(headerMLH).toEqual(exp.headerMLH);
    });
//TCS-003 unresolved yet
    xit('TCS-004 uploaded image has size <=500px', function (){
        inputValues5AndClick(data.name,data.gender.she,data.age,data.storyType.Comedy);
        const uploadedPictureSize = $(sel.uploadedPicture).getAttribute('width');
        const toNumber = parseInt(uploadedPictureSize, 10);
        expect(toNumber).toBeLessThanOrEqual(500);
    });

    xit('TCS-005 have default image on the story', function (){
        browser.url('');
        inputValues4AndClick(data.name,data.gender.she,data.age,data.storyType.Comedy);
        const uploadedPicture = $(sel.uploadedPicture).getAttribute('src');
        expect(uploadedPicture).toContain('app/static');
    });

    xit('TCS-006 the header of the story is in capital letters', function (){
        browser.url('');
        inputValues4AndClick(data.name,data.gender.she,data.age,data.storyType.Comedy);
        const headerStory = $(sel.headerStory).getText();
        expect(headerStory).toStrictEqual(data.headerStory);
    });

    it('TCS-007 the story has age written in words', function (){
        browser.url('');
        inputValues4AndClick(data.name,data.gender.she,data.age,data.storyType.Comedy);
        expect(storyAgeText()).toEqual(exp.storyAge);
    });

})
