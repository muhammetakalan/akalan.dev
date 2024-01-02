'use client'

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'

const components = {}

export function MdxContent({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />
}
