const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe ('Story Field functionality', function() {

    describe ('Story Field functionality', function(){

        it ('TCT-004 Story dropdown can choose any story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            const storyTypes = $$(sel.storyType)[0].isDisplayed();
            expect(storyTypes).toEqual(true);
        });
        it ('TCT-005 Story dropdown can choose only one type of story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            $$(sel.storyType)[5].click();
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const showStory = $('.ant-select-selection-item').getAttribute('title');
            expect(showStory).toEqual(exp.typeOfStory);
        });

        it ('TCT-006 Story contents', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            const storyTypes = $$(sel.storyType)[0,1,2,3,4,5,6].isDisplayed();
            expect(storyTypes).toEqual(true);
        });






















    });
});