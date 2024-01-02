type Frontmatter = {
  title: string
  description: string
}

interface Bookmark {
  link: string
  cover: string
  title: string
  excerpt: string
  created: string
}

export type { Bookmark, Frontmatter }
