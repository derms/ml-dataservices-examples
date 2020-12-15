var action;
var name

function returnErrToClient(statusCode, statusMsg, body)
{
  fn.error(null, 'RESTAPI-SRVEXERR', 
           Sequence.from([statusCode, statusMsg, body]));
  // unreachable
};

let result = {};
try {
    switch(action.toUpperCase()) {
        case "DELETE": 
            // perform delete action
            result = {"status":"DELETED"}
            break;
        case "GET":
            let data = {"name":name,"details":"some details"} //normally would do a search here.
            result = {"status":"OK","data":data}
            break;
        default:
            returnErrToClient(400,`Unsupported action: ${action}`)
    }
} catch (e) {
    let code = e.code ? e.code : 500
    returnErrToClient(code,e.name,e.message)
}
result
