import { BLOG_PROPS_NAME, BLOG_PROPS_CREATE_TIME, BLOG_PROPS_TAGS } from '../fields';

export default {
  type: 'object',
  patternProperties: {
    [ BLOG_PROPS_NAME ]: {
      type: 'string'
    },
    [ BLOG_PROPS_CREATE_TIME ]: {
      type: 'string'
    },
    [ BLOG_PROPS_TAGS ]: {
      type: 'array',
      items: [
        {
          type: 'string'
        }
      ]
    },
  }
}