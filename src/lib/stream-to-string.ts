const decoder = new TextDecoder('utf-8', { fatal: true })

export async function streamToString(
  stream: ReadableStream<Uint8Array>
): Promise<string> {
  let string = ''

  const writableStream = new WritableStream({
    write(chunk: Uint8Array) {
      string += decoder.decode(chunk, { stream: true });
    },
  });
  await stream.pipeTo(writableStream);

  string += decoder.decode()

  return string
}
