import { NextRequest, NextResponse } from 'next/server';

import { API_ENDPOINTS, API_LANGUAGE } from '@/constants/api';

export const GET = async (req: NextRequest) => {
  const { API_ACCESS_TOKEN } = process.env;

  if (!API_ACCESS_TOKEN) {
    return NextResponse.json({ error: 'Access token is missing. Check .env variables.' });
  }

  const { searchParams } = new URL(req.url);
  searchParams.set('language', API_LANGUAGE);

  const response = await fetch(`${API_ENDPOINTS.GENRES}?${searchParams}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_ACCESS_TOKEN}`,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
};
