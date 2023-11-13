import Image from 'next/image'

import { blurhashToBase64 } from 'blurhash-base64'
import { createApi } from 'unsplash-js'

async function getData() {
  const unsplash = createApi({ accessKey: process.env.UNSPLASH_API_KEY })

  return await unsplash.users
    .getPhotos({
      username: process.env.UNSPLASH_USERNAME,
      perPage: 30
    })
    .then(result => {
      if (result.errors) {
        console.log('error occurred: ', result.errors[0])

        return []
      } else {
        return result.response.results
      }
    })
}

export const revalidate = 86400

export default async function Photos() {
  const data = await getData()

  return (
    <div className="not-prose columns-3 [&>div:not(:first-child)]:mt-4">
      {data.map((photo, i) => (
        <div
          className="relative h-96 overflow-hidden rounded-lg bg-muted"
          key={i}
        >
          <Image
            className="object-cover"
            src={photo.urls.small}
            alt="unsplash"
            fill
            placeholder="blur"
            blurDataURL={blurhashToBase64(photo.blur_hash || '')}
          />
        </div>
      ))}
    </div>
  )
}
