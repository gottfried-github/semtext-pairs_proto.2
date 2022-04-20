const TAGS = ['div', 'section', 'li', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'p', 'img']

// function section() {}
// function div() {}
// function li() {}
// function h1() {}
// function node() {}
// function text() {}

function img(node, document) {
    const dom = document.createElement('img')

    const srcNode = node.find(node => 'src' === node.label.value)
    if (!srcNode) return dom

    // see 'img'
    const src = srcNode.node.find(node => 'text' === node.type).text
    if (!src) throw new Error()

    dom.src = src

    return dom
}

function renderBottomUp(node, document) {
    // node either has a label, in which case it is an entity, or it is a text (see Processed data)
    if (!node.label) return document.createTextNode(node.text)

    console.log("renderBottomUp, node.label.value", node.label.value);

    if ('c' === node.label.value) return null

    if (!TAGS.includes(node.label.value)) throw new Error()

    if ('img' === node.label.value) return img(node.node, document)

    const dom = document.createElement(node.label.value)

    node.node.forEach(node => {
        const child = renderBottomUp(node, document)
        if (child) dom.appendChild(child)
    })

    return dom
}

function convert(tree, document) {
    return renderBottomUp(tree, document)
}

module.exports = {convert}
