import localStore from "../store/localStore"
import { CONFIG, GV } from '../../shared/constants/names';
import { NAV } from "../constants/names";
import { GVConfigNav } from "../store/global";

export const shouldLocalstorageUpdate = () => {
  const { symbolUpdatingLocalstorage } = GVConfigNav

  const currentUpdateSymbol = localStore.getUpdateSymbol()
  return symbolUpdatingLocalstorage !== currentUpdateSymbol
}
