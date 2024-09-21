
//!================================================================

const Ajv = require("ajv");

const ajv = new Ajv();

let userV = {
  type: "object",
  properties: {
    userName: { type: "string" },
    email: { type: "string" , pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" },
    password: { type: "string", minLength: 8 },
  },
  required: ["userName", "email", "password"],
  additionalProperties: false,
};

const validate = ajv.compile(userV);

module.exports = validate;
