# react-openai-api

This library is a react wrapper for the openAI API, please feel free to use and/or contribute

## Live Demo

[Here you can see a live demo of the component, you can find this demo in the example folder](https://mhs30.github.io/react-openai-api/)

## Install

Npm

`npm i react-openai-api`

Yarn

`yarn add react-openai-api`

### Usage

Import the component in your react app

```ts
import OpenAIAPI from "react-openai-api";
```

Take a look at the component properties and make sure you handle the API response in your app

```ts
type OpenAIAPIProps = {
  apiKey: string;
  callType?: CallType; // Only completion type calls are supported at the moment
  payload: CompletionPayload;
  responseHandler: (response: CompletionResponse) => any;
  errorHandler?: (error: AxiosError) => any;
};
```

Minimum requirements

```ts
<OpenAIAPI
  apiKey={apiKey}
  payload={payload}
  responseHandler={responseHandler}
/>
```

Payload example

```js
{
    prompt: "Mario: Hi, how are you?",
    maxTokens: 25,
    temperature: 0.5,
    n: 1,
}
```

Response example

```js
{
    "id": "cmpl-31Fcb7heJPwIjc2NxSBpAQ6keeJoS",
    "object": "text_completion",
    "created": 1621427389,
    "model": "davinci:2020-05-03",
    "choices": [
        {
            "text": "\n\nRicky: I'm alright.\n\nMario: What's your name?\n\nRicky: Ricky.",
            "index": 0,
            "logprobs": null,
            "finish_reason": "length"
        }
    ]
}
```

### Important

[Axios](https://www.npmjs.com/package/axios) is a peer dependency, this is because having axios as a dependency can lead to have duplicated dependencies and may lead to inconsistencies.

## API Reference

You can learn more in the [OpenAI API documentation](https://beta.openai.com/docs/api-reference/completions).

To learn React, check out the [React documentation](https://reactjs.org/).

![CI/CD](https://github.com/mhs30/react-openai-api/workflows/CI/CD/badge.svg)
![License](https://img.shields.io/github/license/mhs30/react-openai-api)
