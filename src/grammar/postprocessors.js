function rootEntity(v) {
    return v[1]
}

function valueSingle(v) {
    // return 2 === v[0].length
    //     ? {label: v[0][0], node: v[0][1]}
    //     : v[0][0]
    return v[0][0]
}

function entityLabel(v) {
    return v[2]
}

function entityNodeContent(v) {
    if ('text' === v[1].type && 'space' === v[0].type) v[1].text = `${v[0].value}${v[1].text}`
    return v[1]
}

function entityNode(v) {
    return v[1]
    // return v[1].map(v => v[0])
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
    entityNodeContent,
    entity,
    rootEntity,
    valueSingle,
    text
}
