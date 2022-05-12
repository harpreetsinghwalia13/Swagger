module.exports = {
    get : {
        tags : ["Flow Errors"],
        description : "Integration Error",
        parameters : [],
        responses : {
            200 : {
                description : "error fetched",
                content : {
                    "application/json": {
                        schema : {
                            $ref : "#components/schemas/Flow"
                        }
                    }
                }
            }
        }
    }
}