import createMDX from '@next/mdx'

import remarkGfm from 'remark-gfm'

const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
  }
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
})

export default withMDX(nextConfig)
