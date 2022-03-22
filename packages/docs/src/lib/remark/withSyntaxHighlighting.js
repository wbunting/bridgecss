import { highlightCode } from './utils'

export const withSyntaxHighlighting = () => {
  return (tree) => {
    let preTree = { children: [] }
    tree.children = tree.children.flatMap((node) => {
      if (node.type !== 'code') return node
      if (node.lang === null) return node

      node.type = 'html'
      node.value = [
        `<pre class="language-${node.lang}">`,
        `<code class="language-${node.lang}">`,
        highlightCode(node.value, node.lang),
        '</code>',
        '</pre>',
      ]
        .filter(Boolean)
        .join('')

      return node
    })
    tree.children = [...preTree.children, ...tree.children]
  }
}
