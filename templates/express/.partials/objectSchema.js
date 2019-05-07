properties: {
{{#each properties as |property propertyName|}}
  {{propertyName}}: {
    {{> objectProperty}}
  },
{{/each}}
}{{#if required}},
required: [{{#each required as |property|}}'{{property}}', {{/each}}]{{/if}}
