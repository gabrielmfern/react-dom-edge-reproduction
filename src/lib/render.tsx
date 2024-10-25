import * as React from 'react';
import { streamToString } from "./stream-to-string";

export const render = async (
  element: React.ReactElement,
) => {
  const ReactDOMServer = await import('react-dom/server.edge');
  const stream = await ReactDOMServer.renderToReadableStream(element);
  await stream.allReady;
  return await streamToString(
    stream
  );
};
