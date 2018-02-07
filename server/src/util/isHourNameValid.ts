import isNumberString from "./isNumberString";



export default function isHourNameValid( hourName: string ): boolean {
  const res: boolean = hourName.length === 2 && hourName.split( "" ).every( isNumberString ) && isValid()
  return res

  function isValid(): boolean {
    const hour = parseInt( hourName )
    const res: boolean = hour >= 0 && hour <= 12
    return res
  }
}