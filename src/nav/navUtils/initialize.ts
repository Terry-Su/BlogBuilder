import localStore from "../store/localStore"
import { CONFIG, GV } from '../../shared/constants/names';

export const shouldLocalstorageUpdate = () => {
  const { [CONFIG]:config } = window[ GV ]
  const { navSymbolUpdatingLocalstorage } = config

  const currentUpdateSymbol = localStore.getUpdateSymbol()
  return navSymbolUpdatingLocalstorage !== currentUpdateSymbol
}
