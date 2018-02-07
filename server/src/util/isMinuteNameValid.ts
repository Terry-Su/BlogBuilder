import isNumberString from "./isNumberString";



export default function isMinuteNameValid( minuteName: string ): boolean {
  const res: boolean = minuteName.length === 2 && minuteName.split( "" ).every( isNumberString ) && isValid()
  return res

  function isValid(): boolean {
    const minute = parseInt( minuteName )
    const res: boolean = minute >= 0 && minute <= 60
    return res
  }
}