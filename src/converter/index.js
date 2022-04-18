const TAGS = ['section', 'div', 'li', 'ul', 'ol', 'h1', 'img']

function section() {}

function div() {}

function li() {}

function h1() {}

function img(node, document) {
    const srcNode = node.find(node => 'src' === node.label.value)

    const src = srcNode.find(node => 'text' === node.type).text
    if (!src) throw new Error()

    const img = document.createElement('img')
    img.src = src

    return img
}

function node() {}

function text() {}

function renderBottomUp(node, document) {
    // node either has a label, in which case it is an entity, or it is a text
    if (!tree.label) return document.createTextNode(tree.text)

    if (!TAGS.includes(tree.label.value)) throw new Error()

    if ('img' === tree.label.value) return img(tree.node, document)

    const dom = document.createElement(tree.label.value)

    tree.node.forEach(node => {
        dom.appendChild(renderBottomUp(node), document)
    })

    return dom
}

function convert(tree, document) {

}
