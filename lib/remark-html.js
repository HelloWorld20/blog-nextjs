/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('hast-util-sanitize').Schema} Schema
 *
 * @typedef ExtraOptionsFields
 *   Configuration (optional).
 * @property {boolean|Schema|null} [sanitize]
 *   How to sanitize the output.
 * @property {import('mdast-util-to-hast').Handlers} [handlers={}]
 *   Object mapping mdast nodes to functions handling them.
 *
 * @typedef {import('hast-util-to-html').Options & ExtraOptionsFields} Options
 */

import { toHtml } from "hast-util-to-html";
import { sanitize } from "hast-util-sanitize";
import { toHast } from "mdast-util-to-hast";
import { visitParents } from "unist-util-visit-parents";
import { h } from "hastscript";
import { map } from "unist-util-map";

function isMarkedImage(node) {
  if (!node) return false;
  if (!node.properties) return false;
  if (!node.properties.href) return false;
  if (node.children.length <= 0) return false;
  const children = node.children[0];
  if (!children.properties) return false;
  // console.log('%c [ node ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', node,children.properties)
  if (!children.properties.src) return false;
  // console.log('%c [ node ]-31', 'font-size:13px; background:pink; color:#bf2c9f;', node)
  return node.properties.href === children.properties.src;
}

/**
 * Plugin to serialize markdown as HTML.
 *
 * @type {import('unified').Plugin<[Options?]|void[], Root, string>}
 */
export default function remarkHtml(settings = {}) {
  const options = { ...settings };
  /** @type {boolean|undefined} */
  let clean;

  if (typeof options.sanitize === "boolean") {
    clean = options.sanitize;
    options.sanitize = undefined;
  }

  if (typeof clean !== "boolean") {
    clean = true;
  }

  Object.assign(this, { Compiler: compiler });

  /**
   * @type {import('unified').CompilerFunction<Root, string>}
   */
  function compiler(node, file) {
    const hast = toHast(node, {
      allowDangerousHtml: !clean,
      handlers: options.handlers,
    });
    // @ts-expect-error: assume root.
    let cleanHast = clean ? sanitize(hast, options.sanitize) : hast;

    cleanHast = map(cleanHast, (node) => {
      if (isMarkedImage(node)) {
        node.properties['data-pswp-src'] = node.properties.href
      }
      return node;
    });

    // const text =  h('a.testlink');

    const result = toHtml(
      // @ts-expect-error: assume root.
      cleanHast,
      Object.assign({}, options, { allowDangerousHtml: !clean })
    );

    if (file.extname) {
      file.extname = ".html";
    }

    // Add an eof eol.
    return node &&
      node.type &&
      node.type === "root" &&
      result &&
      /[^\r\n]/.test(result.charAt(result.length - 1))
      ? result + "\n"
      : result;
  }
}
