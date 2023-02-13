import joi from "joi";

export const ValidateStoreCity = (StoreObject) => {
  const Schema = joi.object({
    city: joi().string().required(),
  });

  return Schema.validateAsync(StoreObject);
};

export const ValidateSearchString = (StoreObject) => {
  const Schema = joi.object({
    searchString: joi().string().required(),
  });

  return Schema.validateAsync(StoreObject);
};
