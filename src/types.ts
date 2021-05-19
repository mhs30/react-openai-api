import { AxiosError } from "axios";

export type CallType = "completion";

export type OpenAIAPIProps = {
  apiKey: string;
  callType?: CallType;
  payload: CompletionPayload;
  responseHandler: (response: CompletionResponse) => any;
  errorHandler?: (error: AxiosError) => any;
};

export type CompletionPayload = {
  engine?: string;
  prompt?: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  n?: number;
  stream?: boolean;
  logprobs?: number;
  echo?: boolean;
  stop?: string | string[];
  presencePenalty?: number;
  frequencyPenalty?: number;
  bestOf?: number;
  logitBias?: { [token: string]: number };
};

export type CompletionResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
};

export type Choice = {
  text: string;
  index: number;
  logprobs: any;
  finish_reason: string;
};
