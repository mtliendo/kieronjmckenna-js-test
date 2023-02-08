1. clone the repo
2. In the project root, install the dependencies with `npm i` from the terminal
3. update lines 7 and 10 of the file test/kieronjmckenna-js-test.test.ts to match your local AWS credentials
4. In the project root, run the test command with  `npm test` from the terminal
5. Observe 1 failing test and the error: 

```bash
{"message":"Unrecognized field \"username\" (class com.amazonaws.deepdish.common.identity.LambdaAuthIdentity), not marked as ignorable (one known property: \"resolverContext\"])\n at [Source: UNKNOWN; line: -1, column: -1] (through reference chain: com.amazonaws.deepdish.transform.model.MappingTemplateContext$MappingTemplateContextBuilder[\"identity\"]->com.amazonaws.deepdish.common.identity.LambdaAuthIdentity[\"username\"])"}
```
