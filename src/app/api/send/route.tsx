import React from 'react';
import { AppleReceiptEmail } from '../../../../emails/apple-receipt';
import { render } from '../../../lib/render/src/browser';

export const runtime = 'edge';

export async function GET() {
  const html = await render(<AppleReceiptEmail />);

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html'
    }
  })
}
