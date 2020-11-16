const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe ('Story Field functionality', function() {

    describe ('Story Field functionality', function(){

        it ('TCT-004 Story dropdown can choose any story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            $(sel.storyClick).click();
            const storyTypes = $$(sel.storyType)[0,1,2,3,4,5,6].isDisplayed();
            expect(storyTypes).toEqual(true);
        });








    });
});