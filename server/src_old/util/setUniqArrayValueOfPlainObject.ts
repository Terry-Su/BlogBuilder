import { isNil, uniq } from 'lodash';
import isNotNil from "./isNotNil";

type O = {
  [index: string]: any[]
}

export default function ( o: O, key: string, value: any[] ) {
  if ( isNil( o[ key ] ) ) {
    o[ key ] = uniq( value )
  }
  if ( isNotNil( o[ key ] ) ) {
    o[ key ] = uniq( [
      ...o[ key ],
      ...value
    ] )
  }
}