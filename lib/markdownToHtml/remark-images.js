/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').Link} Link
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {Array<string>} [imageExtensions]
 *   File extensions (without dot) to treat as images.
 */

 import isUrl from 'is-url'
 import {visitParents} from 'unist-util-visit-parents'
 import {is} from 'unist-util-is'
 
//  const isImgPath = (/** @type {string} */ value) =>
//    value.startsWith('/') || value.startsWith('./') || value.startsWith('../')
 
 /**
  * Extensions recognized as images by default
  */
//  export const defaultImageExtensions = [
//    'svg',
//    'png',
//    'jpg',
//    'jpeg',
//    'gif',
//    'webp',
//    'avif'
//  ]
 
 /**
  * Plugin to add a simpler image syntax.
  *
  * @type {import('unified').Plugin<[Options?]|void[], Root>}
  */
 export default function remarkImages() {
  //  const imgExtRegex = new RegExp(`\\.(${imageExtensions.join('|')})$`)
  //  const isImgExt = (/** @type {string} */ value) => imgExtRegex.test(value)
 
   return (tree) => {
    
     visitParents(tree, 'image', (node, parents) => {
      //  const value = String(node.value).trim()
       const url = node.url;
      //  if ((isUrl(value) || isImgPath(value)) && isImgExt(value)) {
         let interactive = false
         let length = parents.length
         const parent = parents[length - 1]
         const siblings = parent.children

         const index = siblings.indexOf(node)
 
         // Check if we’re in interactive content.
         while (length--) {
           if (is(parents[length], ['link', 'linkReference'])) {
             interactive = true
             break
           }
         }
 
         /** @type {Image} */
         const image = {
           type: 'image',
           url,
           alt: '',
           position: node.position
         }
         /** @type {Image|Link} */
         let next = image
 
         // Add a link if we’re not already in one.
         if (!interactive) {
           next = {
             type: 'link',
             url,
             title: 'flag',
             children: [image],
             position: node.position
           }
         }
 
         siblings[index] = next
      //  }
     })
   }
 }
 