const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');
const data = require('../../data/testData.json')

describe ('Story Types', function() {

    describe('Story Types functionality', function () {


        it('TCT-008 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[0].click();
            const showStory = $(sel.storyTypes).getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory0);
        });

        it('TCT-009 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[1].click();
            const showStory = $(sel.storyTypes).getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory1);
        });

        it('TCT-010 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[2].click();
            const showStory = $(sel.storyTypes).getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory2);
        });

        it('TCT-011 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[3].click();
            const showStory = $(sel.storyTypes).getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory3);
        });

        it('TCT-012 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[4].click();
            const showStory = $(sel.storyTypes).getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory4);
        });

        it('TCT-013 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[5].click();
            const showStory = $(sel.storyTypes).getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory5);
        });


        it('TCT-014 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $(sel.storyTypes).getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory6);
        });

        it('TCT-015 "Comedy" can be chosen and affect on the final result', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
            browser.pause(1000);
            const showText = $(sel.storyName).getText();
            browser.pause(1000);
            expect(showText).toEqual("Two Cats And A" + ' ' + data.name);
        });



    });


});
