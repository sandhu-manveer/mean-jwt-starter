// define schemas to maintain consistency
var schemas = {
    user: {
        _id: null,
        _rev:null,
        name: null,
        password: null,
        email: null,
        role: null,
        queries: [{
            timestamp: null,
            text: null,
            entity: null
        }]
    }
}

module.exports = schemas;