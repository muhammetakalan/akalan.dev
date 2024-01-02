import { MdxContent } from '@/components/mdx-content'
import { Frontmatter } from '@/types'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const files = await fs.readdir('content')

  return files.map(file => {
    return { slug: path.parse(file).name }
  })
}

async function getPost(filepath: string) {
  const raw = await fs.readFile(filepath, 'utf-8')

  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: { remarkPlugins: [remarkGfm] }
  })

  const frontmatter = serialized.frontmatter as Frontmatter

  return { frontmatter, serialized }
}

export default async function Posts({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { serialized, frontmatter } = await getPost(`content/${slug}.mdx`)

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <MdxContent source={serialized} />
    </div>
  )
}
