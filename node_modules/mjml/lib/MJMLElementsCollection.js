'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerElement = registerElement;
var MJMLStandardElements = {
  'body': require('./components/Body').default,
  'button': require('./components/Button').default,
  'column': require('./components/Column').default,
  'divider': require('./components/Divider').default,
  'html': require('./components/Html').default,
  'image': require('./components/Image').default,
  'list': require('./components/List').default,
  'raw': require('./components/Raw').default,
  'section': require('./components/Section').default,
  'social': require('./components/Social').default,
  'text': require('./components/Text').default
};

var endingTags = exports.endingTags = ["mj-text", "mj-html", "mj-button", "mj-list", "mj-raw"];

function registerElement(tagName, element) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  MJMLStandardElements[tagName] = element;

  if (options.endingTag) {
    endingTags.push('mj-' + tagName);
  }

  return true;
}

exports.default = MJMLStandardElements;
//# sourceMappingURL=MJMLElementsCollection.js.map