import { BlogOriginInfo } from './interface/index';
import { Path } from './interface/index';
import outPutDetailPage from './outPutDetailPage';
import outPutCatalog from './outPutCatalog';


export default function resolveBlogOriginInfo( output: Path ) {
    return function ( blogOriginInfo: BlogOriginInfo ) {
      outPutDetailPage( blogOriginInfo, output )
      outPutCatalog( blogOriginInfo, output )
    }
}