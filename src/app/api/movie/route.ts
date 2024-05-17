import { NextRequest, NextResponse } from 'next/server';

import { API_BASE_URL, API_VERSION, API_ENDPOINTS } from '@/constants';

export async function GET(req: NextRequest) {
  const { API_ACCESS_TOKEN } = process.env;

  if (!API_ACCESS_TOKEN) {
    return NextResponse.json({ error: 'Access token is missing. Check .env variables.' });
  }

  const { searchParams } = new URL(req.url);
  const movieId = searchParams.get('movie_id');

  const response = await fetch(`${API_BASE_URL}/${API_VERSION}/${API_ENDPOINTS.MOVIE}/${movieId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_ACCESS_TOKEN}`,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}
