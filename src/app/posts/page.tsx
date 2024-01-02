import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Frontmatter } from '@/types'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

async function getData() {
  const contentDir = 'content'
  const files = fs.readdirSync(contentDir)

  const data = await Promise.all(
    files.map(async file => {
      const filePath = path.join(contentDir, file)
      const content = fs.readFileSync(filePath, 'utf8')

      const { frontmatter } = await serialize(content, {
        parseFrontmatter: true
      })

      return { ...(frontmatter as Frontmatter), slug: file.replace('.mdx', '') }
    })
  )

  return data
}

export default async function Posts() {
  const data = await getData()

  return (
    <div className="not-prose space-y-4">
      {data.map((item, i) => (
        <Card key={i}>
          <a href={`/posts/${item.slug}`}>
            <CardHeader>
              <CardTitle className="line-clamp-1">{item.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {item.description}
              </CardDescription>
            </CardHeader>
          </a>
        </Card>
      ))}
    </div>
  )
}
