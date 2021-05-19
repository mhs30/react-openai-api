import React, { useState } from "react";
import OpenAIAPI from "react-openai-api";
import { CompletionPayload, CompletionResponse } from "../../lib/esm/types";
import "./App.css";

function App() {
  const [apiKey, setApiKey] = useState<string>("");
  const [promptText, setPromptText] = useState<string>("");

  const [payload, setPayload] = useState<CompletionPayload>({
    prompt: "",
    maxTokens: 25,
    temperature: 0.5,
    n: 1,
  });

  const changeApiKeyHandler = (e: any) => {
    setApiKey(e.target.value);
  };

  const changePromptHandler = (e: any) => {
    setPromptText(e.target.value);
  };

  const submitHandler = () => {
    const pl = { ...payload, prompt: promptText };
    setPayload(pl);
  };

  const responseHandler = (openAIResponse: CompletionResponse) => {
    setPromptText(`${promptText + openAIResponse.choices[0].text}`);
  };

  return (
    <div className="App">
      <label>Api key to test</label>
      <br />
      <input
        type="password"
        value={apiKey}
        onChange={(e) => changeApiKeyHandler(e)}
      />
      <br />
      <textarea
        className="textarea"
        value={promptText}
        onChange={(e) => changePromptHandler(e)}
      ></textarea>
      <br />
      <button onClick={() => submitHandler()}>Submit</button>
      {!!apiKey && !!payload.prompt && (
        <OpenAIAPI
          apiKey={apiKey}
          payload={payload}
          responseHandler={responseHandler}
        />
      )}
    </div>
  );
}

export default App;
