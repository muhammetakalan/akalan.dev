import createMDX from '@next/mdx'

import remarkGfm from 'remark-gfm'

const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx']
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
})

export default withMDX(nextConfig)
