'use strict';

const openapi = require("/MarkLogic/rest-api/lib/openapi-transform.sjs")
//openapi.fromModulesDatabase()
openapi.fromModulesDirectory("/api")