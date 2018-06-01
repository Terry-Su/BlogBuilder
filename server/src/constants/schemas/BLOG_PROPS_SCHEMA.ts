import { CREATE_TIME, CATEGORIES, TAGS } from "../fields";

export default {
  type: 'object',
  patternProperties: {
    [ CREATE_TIME ]: {
      type: 'string'
    },
    [ TAGS ]: {
      type: 'array',
      items: [
        {
          type: 'string'
        }
      ]
    },
  }
}