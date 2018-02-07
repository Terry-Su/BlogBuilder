import { Path } from './interface/index';
import getBlogsOriginInfo from './getBlogsOriginInfo';
import { BlogOriginInfo } from './interface/index';
import outputDetailPage from './outputDetailPage';
import outputClue from './outputClue';
import outputClientScripts from './outputClientScripts';
import outputClientHomeHtml from './outputClientHomeHtml';
import outputNewestRelativeUrls from './outputNewestRelativeUrls';


export default function ( root: Path, output: Path ) {
   const blogsOriginInfo: BlogOriginInfo[] =  getBlogsOriginInfo( root )

   blogsOriginInfo.map( outputDetailPage( output ) )

   outputClue( blogsOriginInfo, output )

   outputClientScripts( output )
   outputClientHomeHtml( output )
   outputNewestRelativeUrls( blogsOriginInfo, output )
}