xquery version "1.0-ml";
declare variable $name as xs:string       external;
declare option xdmp:mapping "false";

let $object := json:object()
let $_ := map:put($object,"name",$name)

return xdmp:to-json($object)