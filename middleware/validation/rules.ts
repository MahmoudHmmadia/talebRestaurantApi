import joi from "joi";
export const tableReservationRules = joi.object({
  name: joi.string().required(),
  phoneID: joi.string().required(),
  email: joi.string().email().default("bla@bla.bla").allow(null, ""),
  address: joi.string().default(""),
  number: joi.number().required(),
  date: joi.string(),
  time: joi.string(),
  specialRequest: joi.string().default("").allow(null, ""),
});
export const customerRules = joi.object({
  name: joi.string().required(),
  phoneID: joi.string().required(),
  email: joi.string().email(),
  address: joi.string().default(""),
});
