function valueSingle(v) {
    return v[0][0]
}

function entityLabel(v) {
    return v[1]
}

function entityNode(v) {
    return v[1].map(v => v[0])
}

function entity(v) {
    return {
        label: v[0],
        node: v[1]
    }
}

function text(v) {
    console.log("text", v[0])
    return v[0]
}

module.exports = {
    entityLabel,
    entityNode,
    entity,
    valueSingle,
    text
}
