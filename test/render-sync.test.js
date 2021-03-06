var mapnik = require('mapnik');
var assert = require('assert');
var path = require('path');
var helper = require('./support/helper');

describe('mapnik sync rendering ', function() {
    it('should render to a file', function() {
        var map = new mapnik.Map(256, 256);
        map.loadSync('./examples/stylesheet.xml');
        map.zoomAll();
        var im = new mapnik.Image(map.width, map.height);
        var filename = helper.filename();
        map.renderFileSync(filename);
        assert.ok(path.existsSync(filename));
    });
});
