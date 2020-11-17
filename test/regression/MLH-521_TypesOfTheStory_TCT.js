const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe ('Story Types', function() {

    describe('Story Types functionality', function () {

        it('TCT-008 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $('.ant-select-selection-item').getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory);
        });

        it('TCT-009 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $('.ant-select-selection-item').getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory);
        });

        it('TCT-010 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $('.ant-select-selection-item').getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory);
        });

        it('TCT-011 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $('.ant-select-selection-item').getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory);
        });

        it('TCT-012 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $('.ant-select-selection-item').getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory);
        });

        it('TCT-013 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $('.ant-select-selection-item').getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory);
        });


        it('TCT-014 Story dropdown can choose type of the Story "Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $('.ant-select-selection-item').getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory);
        });





    });


});
