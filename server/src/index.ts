import { Path } from './interface/index';
import getBlogsOriginInfo from './getBlogsOriginInfo';
import { BlogOriginInfo } from './interface/index';
import resolveBlogOriginInfo from './resolveBlogOriginInfo';


export default function ( root: Path, output: Path ) {
   const blogsOriginInfo: BlogOriginInfo[] =  getBlogsOriginInfo( root )

   blogsOriginInfo.map( resolveBlogOriginInfo( output ) )
}