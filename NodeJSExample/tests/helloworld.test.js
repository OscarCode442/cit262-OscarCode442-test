// helloworld.test.js
const helloWorld = require('./helloworld');

test('returns the correct greeting message', () => {
    expect(helloWorld()).toBe("Hello, World!");
});
