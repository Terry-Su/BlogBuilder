import localStore from "../store/localStore"

export const shouldLocalstorageUpdate = () => {
  const { config } = window[ "GV" ]
  const { symbolUpdatingLocalstorage } = config

  const currentUpdateSymbol = localStore.getUpdateSymbol()
  return symbolUpdatingLocalstorage !== currentUpdateSymbol
}
