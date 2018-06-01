interface Category {
  name: string
  blogs: BlogInfo[]
  categories: Category[]
}

interface Tag {
  name: string,
  blogs: BlogInfo[]
}