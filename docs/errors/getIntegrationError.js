module.exports = {
    get : {
        tags : ["Integration Errors"],
        description : "Integration Error",
        parameters : [],
        responses : {
            200 : {
                description : "error fetched",
                content : {
                    "application/json": {
                        schema : {
                            $ref : "#components/schemas/Integration"
                        }
                    }
                }
            }
        }
    }
}