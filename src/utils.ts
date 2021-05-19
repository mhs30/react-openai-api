import { DEFAULT_ENGINE, ENGINE_LIST, OPEN_AI_URL } from "./config";

export const camelToUnderscore = (key: string) => {
  const result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("_").toLowerCase();
};

export const completionURL = (engine: string): string => {
  if (!ENGINE_LIST.includes(engine)) {
    engine = DEFAULT_ENGINE;
  }
  return `${OPEN_AI_URL}/engines/${engine}/completions`;
};
