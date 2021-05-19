export const ENGINE_LIST = [
  "ada",
  "babbage",
  "curie",
  "davinci",
  "davinci-instruct-beta",
  "curie-instruct-beta",
];
export const DEFAULT_ENGINE = "davinci";
export const ORIGIN = "https://api.openai.com";
export const API_VERSION = "v1";
export const OPEN_AI_URL = `${ORIGIN}/${API_VERSION}`;
export enum CALL_TYPES {
  COMPLETION = "completion",
  SEARCH = "search",
  ANSWERS = "answers",
  ENGINES = "engines",
}
