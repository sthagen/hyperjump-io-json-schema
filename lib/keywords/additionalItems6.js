const { JsonSchema, Schema, Instance } = require("@hyperjump/json-schema-core");


const compile = async (schema, ast) => {
  let itemsValue;
  try {
    const itemsSchema = await Schema.sibling("items", schema);
    itemsValue = Schema.value(itemsSchema);
  } catch (error) {}
  const numberOfItems = Array.isArray(itemsValue) ? itemsValue.length : Number.MAX_SAFE_INTEGER;

  return [numberOfItems, await JsonSchema.compileSchema(schema, ast)];
};

const interpret = ([numberOfItems, additionalItems], instance, ast) => {
  if (!Array.isArray(Instance.value(instance))) {
    return true;
  }

  return Instance.every((item, ndx) => ndx < numberOfItems || JsonSchema.interpretSchema(additionalItems, item, ast), instance);
};

module.exports = { compile, interpret };