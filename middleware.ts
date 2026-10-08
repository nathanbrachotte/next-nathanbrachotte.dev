import { NextRequest, NextResponse } from 'next/server'

// Client slug -> Basic Auth credentials. Passwords live in env vars.
const clientCredentials: Record<string, { user: string; password?: string }> = {
  'stiebler-relocation': {
    user: 'franziska',
    password: process.env.CLIENT_STIEBLER_RELOCATION_PASSWORD,
  },
}

export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.split('/')[2]
  const credentials = clientCredentials[slug]

  if (!credentials?.password) {
    return new NextResponse('Not found', {
      status: 404,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    })
  }

  const authorization = request.headers.get('authorization')
  const expected = 'Basic ' + btoa(`${credentials.user}:${credentials.password}`)

  if (authorization !== expected) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Client area", charset="UTF-8"',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    })
  }

  const response = NextResponse.next()
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  response.headers.set('Cache-Control', 'private, no-store')
  return response
}

export const config = {
  matcher: ['/clients', '/clients/:path*'],
}
