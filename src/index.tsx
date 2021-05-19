import React, { useEffect } from "react";
import { CALL_TYPES, DEFAULT_ENGINE } from "./config";
import { CompletionPayload, OpenAIAPIProps } from "./types";
import { camelToUnderscore, completionURL } from "./utils";
import axios, { AxiosError, AxiosResponse, Method } from "axios";

const OpenAIAPI = ({
  apiKey,
  callType = CALL_TYPES.COMPLETION,
  payload,
  responseHandler,
  errorHandler,
}: OpenAIAPIProps): JSX.Element => {
  const sendRequest = (
    url: string,
    method: Method,
    opts: CompletionPayload
  ) => {
    const data = {};
    for (const key in opts) {
      data[camelToUnderscore(key)] = opts[key];
    }
    return axios({
      url,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      data: Object.keys(data).length ? data : "",
      method: method,
    });
  };

  useEffect(() => {
    if (!payload.engine) {
      payload.engine = DEFAULT_ENGINE;
    }
    let url = "";
    switch (callType) {
      case CALL_TYPES.COMPLETION:
        url = completionURL(payload.engine);
        delete payload.engine;
        break;
    }
    sendRequest(url, "post", payload)
      .then((res: AxiosResponse) => {
        responseHandler(res.data);
      })
      .catch((err: AxiosError) => {
        if (errorHandler) errorHandler(err);
      });
  }, [apiKey, payload]);

  return <></>;
};

export default OpenAIAPI;
