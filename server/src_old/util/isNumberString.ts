export default function ( potentialNumberString: string ): boolean {
  let res: boolean = parseInt( potentialNumberString ) !== NaN
  return res
}