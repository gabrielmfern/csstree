/* global csstree */
const assert = require('assert');
const csstree = require('../index.cjs');

it('index.cjs', () => {
    const ast = csstree.parse('.test { color: red }');
    const actual = csstree.generate(ast);

    assert.strictEqual(actual, '.test{color:red}');
});
