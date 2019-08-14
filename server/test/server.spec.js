const assert = require('assert');

describe('server', function() {

    it('should respond to connection', function() {
        const net = require('net');
        net.createConnection(8081, () => {
            assert(true);
        });
    });
    
});