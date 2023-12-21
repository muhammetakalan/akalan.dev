import Image from 'next/image'

import moment from 'moment'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Bookmark } from '@/types'
import 'moment/locale/tr'

async function getBookmarks(): Promise<{ items: Bookmark[] }> {
  const apiUrl = 'https://api.raindrop.io/rest/v1/raindrops/40072588'

  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_TEST_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })

  return res.json()
}

export default async function Bookmarks() {
  const data = await getBookmarks()

  if (data.items) {
    data.items.sort((a, b) => moment(b.created).diff(moment(a.created)))
  }

  return (
    <div className="not-prose space-y-4">
      <h1 className="text-4xl font-bold text-white">Yer İmlerim</h1>
      <p className="">
        Bu sayfada, günlük araştırmalarım sonucunda ilgimi çeken ve beğendiğim
        kaynakları bulabilirsiniz.
      </p>

      {data &&
        data.items.map((item, i) => (
          <a className="block" href={item.link} target="_blank" key={i}>
            <Card className="relative flex overflow-hidden">
              <Image
                className="h-32 w-full max-w-48 bg-cover"
                src={item.cover}
                alt="cover"
                width={192}
                height={128}
              />
              <CardHeader>
                <CardTitle className="line-clamp-1">{item.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {item.excerpt}
                </CardDescription>
                <Badge
                  className="absolute bottom-4 right-4"
                  variant="secondary"
                >
                  {moment(item.created).startOf('hour').fromNow()}
                </Badge>
              </CardHeader>
            </Card>
          </a>
        ))}
    </div>
  )
}

export const revalidate = 900
