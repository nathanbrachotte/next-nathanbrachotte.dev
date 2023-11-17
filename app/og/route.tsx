import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

// TODO: Fix the doc
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Nathan Brachotte'

    return new ImageResponse(
      (
        <div
          tw="flex w-full text-white items-center h-full pl-16 justify-between"
          style={{
            backgroundColor: '#0B0F1A',
          }}
        >
          <div tw="flex-1 flex flex-col justify-between h-full py-16">
            <img
              src="https://www.nathanbrachotte.dev/images/logo.jpg"
              tw="h-24"
            ></img>
            <div tw="flex mx-[15%] justify-center items-center">
              <p tw="text-6xl tracking-tight font-bold leading-tight my-0 text-center">
                {title}
              </p>
            </div>
            <div tw="flex items-center">
              <p tw="text-3xl text-cyan-300">nathanbrachotte.dev</p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error) {
    console.log(`${error.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
