import { Path, BlogOriginInfo } from './interface/index';
import readFileText from './util/readFileText';
import * as marked from 'marked';
import { getBlogPropComputed } from './store/index';


export default function ( blogOriginInfo: BlogOriginInfo ): string {
  const { blogPath }: { blogPath: Path } = blogOriginInfo

  const blogPropComputed =  getBlogPropComputed( blogOriginInfo )
  const { name }: { name: string } = blogPropComputed

  const markdownText = readFileText( blogPath )
  const markdownHtml = marked( markdownText )

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    ${ markdownHtml }
  </body>
  </html>
  `
  return html

}

