function rootEntity(v) {
    return v[0]
}

function valueSingle(v) {
    return v[0][0]
}

function entityLabel(v) {
    return v[1]
}

function entityContent(v) {
    return v[0]
}

function entityNodeContent(v) {
    if ('text' === v[1].type && 'space' === v[0].type) v[1].text = `${v[0].value}${v[1].text}`
    return v[1]
}

function entityNode(v) {
    return v[1]
}

function entity(v) {
    return {
        label: v[0],
        node: v[1]
    }
}

function text(v) {
    // console.log("text", v[0])
    return v[0]
}

module.exports = {
    entityLabel,
    entityNode,
    entityNodeContent,
    entityContent,
    entity,
    rootEntity,
    valueSingle,
    text
}
