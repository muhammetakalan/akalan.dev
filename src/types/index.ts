type Frontmatter = {
  title: string
  date: string
}

interface Bookmark {
  link: string
  cover: string
  title: string
  excerpt: string
  created: string
}

export type { Frontmatter, Bookmark }
