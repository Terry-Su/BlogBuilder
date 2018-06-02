import BlogBuilder from './BlogBuilder';

export default function ( root: string, output: string ) {
  const builder = new BlogBuilder( root, output )

  builder.build()
}