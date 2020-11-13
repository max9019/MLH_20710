const sel = require('./../data/selectors.json')

function storyAgeText (){
    const text = $(sel.storyText).getText();
    const pattern = "is " + ".*" + " years old,";
    const start = text.search(pattern) + 3;
    const end = text.search(" years old,");
    return text.slice(start, end);
}
module.exports = storyAgeText;
