export type Path = string
export type BlogRelativeUrl = string

export type BlogOriginInfo = {
  date: Date,
  blogPath: Path,
  blogPropPath: Path
}

export type BlogProp = {
  name?: string,
  /**
   * Hours and minutes, for example: '1316'
   */
  time?: string,
  category?: string | string[],
  tag?: string | string[],
}

export type BlogPropComputed = {
  relativeUrl: BlogRelativeUrl,  
  name: string,
  time: Date,
  category: string | string[],
  tag: string | string[],
}

export type ClueCategory = {
  [index: string]: BlogRelativeUrl[]
}

export type ClueTag = {
  [index: string]: BlogRelativeUrl[]
}

export type Clue = {
  category: ClueCategory,
  tag: ClueTag,
}
