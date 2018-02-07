import { Path } from './interface/index';
import getBlogsOriginInfo from './getBlogsOriginInfo';
import { BlogOriginInfo } from './interface/index';
import outPutDetailPage from './outPutDetailPage';
import outPutClue from './outPutClue';
import outputClientScripts from './outputClientScripts';


export default function ( root: Path, output: Path ) {
   const blogsOriginInfo: BlogOriginInfo[] =  getBlogsOriginInfo( root )

   blogsOriginInfo.map( outPutDetailPage( output ) )

   outPutClue( blogsOriginInfo, output )

   outputClientScripts( output )
}