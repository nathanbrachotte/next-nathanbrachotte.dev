import { ImageResponse } from '@vercel/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

// @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx
export async function Image({ params }: { params: { slug: string } }) {
  try {
    const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
      res.json(),
    )

    console.log({ post })

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
                {post}
              </p>
            </div>
            <div tw="flex items-center">
              <p tw="text-3xl text-cyan-300">nathanbrachotte.dev</p>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      },
    )
  } catch (error) {
    console.log(`${error.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
