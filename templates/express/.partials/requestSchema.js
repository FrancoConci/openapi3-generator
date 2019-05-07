properties: {
{{#each content as |content contentName|}}
{{#each content.schema.properties}}
  {{> objectProperty}}
{{/each}}
}
{{#if content.schema.required}},
required: [{{#each content.schema.required as |property|}}'{{property}}', {{/each}}]
{{/if}}
{{/each}}
