var React = require('react-tools');

module.exports = function(source) {
  try {
    this.cacheable();
    return React.transform(source);
  } catch (e) {
    console.error('[%s]: ', this.resourcePath.split('/').pop(), e.message);
    return source;
  }
};