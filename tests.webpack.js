let testsContext = require.context('./tests', true, /\.test\.js$/);
testsContext.keys().forEach(testsContext);

let srcContext = require.context('./src');
srcContext.keys().forEach(srcContext);