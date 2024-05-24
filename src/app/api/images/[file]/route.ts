import { NextRequest, NextResponse } from 'next/server';

import { API_ENDPOINTS } from '@/constants/api';

export const GET = async (req: NextRequest, { params }: { params: { file: string } }) => {
  const { API_ACCESS_TOKEN } = process.env;

  if (!API_ACCESS_TOKEN) {
    return NextResponse.json({ error: 'Access token is missing. Check .env variables.' });
  }

  const response = await fetch(`${API_ENDPOINTS.IMAGES}/${params.file}`, {
    method: 'GET',
  });

  return response;
};
