type: '{{type}}',
{{#if format}}format: '{{format}}',
{{/if}}
{{#if minimum}}minimum: {{minimum}},
{{/if}}
{{#if maximum}}maximum: {{maximum}},
{{/if}}
{{#if items}}
items: {
  {{#if items.properties}}
  properties: {
    {{#each items.properties as |property propertyName|}}
    {{propertyName}}: {
      {{> objectProperty}}
    },
    {{/each}}
  }
  {{/if}}{{#if items.type}}  type: '{{items.type}}'{{/if}}
}
{{/if}}