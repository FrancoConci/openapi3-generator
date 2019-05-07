const validationSchemas = new Map();

{{#each openapi.components.schemas as |schema schemaName|}}
const {{schemaName}} = {
  {{> objectSchema}}
}
validationSchemas.set('{{schemaName}}Schema', {{schemaName}});

{{/each}}

{{#each openapi.components.requestBodies as |requestBody requestBodyName|}}
const {{requestBodyName}} = {
  {{> requestSchema}}
}
validationSchemas.set('{{requestBodyName}}Request', {{requestBodyName}});

{{/each}}

function getSchemas() {
  return validationSchemas;
}
module.exports = {  
  validateObjectAgainstSchema(obj, schemaDefinitionName){
    return [];
  }
}
