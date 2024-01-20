import { getProductionUrl } from 'helpers/url'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// TODO: Fix the doc
// To test: http://localhost:3000/og?title=How+I+stopped+Git+from+getting+in+the+way&description=Git+is+a+powerful+tool+but+can+be+hard+and+cumbersome+to+use.+Here+is+the+ultimate+workflow+that+will+make+you+work+faster+and+more+confidently+with+Git.&image=https%3A%2F%2Fnathanbrachotte.dev%2Fimages%2Fblog%2Fstopped-git-getting-in-the-way%2Fcover-fallback.png
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Nathan Brachotte'

    // ?description=<description>
    // const hasDescription = searchParams.has('description')
    // const descripton = hasDescription ? searchParams.get('description') : ''

    // ?image=<image>
    const hasImage = searchParams.has('image')
    const image = hasImage ? searchParams.get('image') : ''

    // const backgroundImage = 'https://www.nathanbrachotte.dev' + image
    const backgroundImage = getProductionUrl() + image
    // const logoImage = `https://www.nathanbrachotte.dev/images/nate.jpg`
    const logoImage = `${getProductionUrl()}/images/nate.jpg`

    return new ImageResponse(
      (
        <div
          tw="flex w-full text-white items-center h-full justify-between"
          style={{
            // This doesn't work correctly at all but I'm somewhat getting what I want
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          }}
        >
          <div tw="flex-1 flex flex-col justify-between h-full py-16 mx-[5%]">
            <div tw="flex justify-between">
              <div tw="flex items-center">
                <img
                  src={logoImage}
                  tw="h-18 w-18 rounded-full"
                  height={120}
                  width={120}
                />
                <p tw="ml-6 text-4xl relative">
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
                      // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url(${backgroundImage})`,
                      // backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(4px)',
                    }}
                  />
                  Nathan Brachotte
                </p>
              </div>
              <div tw="flex flex-row justify-start items-center">
                <p tw="text-3xl relative ml-6">
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
                      // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(4px)',
                    }}
                  />
                  nathanbrachotte.dev
                </p>
              </div>
            </div>
            <div tw="flex">
              <div tw="flex justify-start items-start mr-[10%]">
                <p tw="text-6xl tracking-tight font-bold leading-tight my-0 text-left">
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      // backgroundImage: `linear-gradient(55deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
                      // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
                      // backgroundSize: 'cover',
                      // backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      backgroundPosition: 'center',
                      filter: 'blur(2px)',
                    }}
                  />
                  {title}
                </p>
              </div>
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
