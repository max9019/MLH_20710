const sel = require ('../data/selectors.json');
function inputValues4 (name, gender, age, storyType){
    $(sel.name).addValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyArrow).click();
    $$(sel.storyTitle)[storyType].click();
}
module.exports = inputValues4;