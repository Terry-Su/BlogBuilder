import BlogBuilder from './BlogBuilder';

export default function ( root: Path, output: Path ) {
  const builder = new BlogBuilder( root, output )

  builder.build()
}