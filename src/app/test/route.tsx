import React from 'react';
import { render } from '../../lib/render';

export const runtime = 'edge';

export async function GET() {
  const html = await render(<div>Hello world!</div>);

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html'
    }
  })
}
