import type { Json, JsonType } from "@hyperjump/json-schema-core";


export type Draft202012Schema = boolean | {
  $schema?: "https://json-schema.org/draft/2020-12/schema";
  $id?: string;
  $anchor?: string;
  $ref?: string;
  $dynamicRef?: string;
  $dynamicAnchor?: string;
  $vocabulary?: Record<string, boolean>;
  $comment?: string;
  $defs?: Record<string, Draft202012Schema>;
  additionalItems?: Draft202012Schema;
  unevaluatedItems?: Draft202012Schema;
  prefixItems?: Draft202012Schema[];
  items?: Draft202012Schema;
  contains?: Draft202012Schema;
  additionalProperties?: Draft202012Schema;
  unevaluatedProperties?: Draft202012Schema;
  properties?: Record<string, Draft202012Schema>;
  patternProperties?: Record<string, Draft202012Schema>;
  dependentSchemas?: Record<string, Draft202012Schema>;
  propertyNames?: Draft202012Schema;
  if?: Draft202012Schema;
  then?: Draft202012Schema;
  else?: Draft202012Schema;
  allOf?: Draft202012Schema[];
  anyOf?: Draft202012Schema[];
  oneOf?: Draft202012Schema[];
  not?: Draft202012Schema;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxContains?: number;
  minContains?: number;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  dependentRequired?: Record<string, string[]>;
  const?: Json;
  enum?: Json[];
  type?: JsonType | JsonType[];
  title?: string;
  description?: string;
  default?: Json;
  deprecated?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: Json[];
  format?: "date-time" | "date" | "time" | "duration" | "email" | "idn-email" | "hostname" | "idn-hostname" | "ipv4" | "ipv6" | "uri" | "uri-reference" | "iri" | "iri-reference" | "uuid" | "uri-template" | "json-pointer" | "relative-json-pointer" | "regex";
  contentMediaType?: string;
  contentEncoding?: string;
  contentSchema?: Draft202012Schema;
};