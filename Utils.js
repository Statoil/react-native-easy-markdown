class Utils {

    static isTextOnly(nodes) {
        if(nodes.length) {
            for (let i = 0; i < nodes.length; i++) {
                if(nodes[i] &&
                    nodes[i].hasOwnProperty('type') &&
                    nodes[i].type.hasOwnProperty('displayName')) {
                    if (nodes[i].type.displayName !== 'Text') {
                        return false;
                    }
                }

            }
        }
        return true;
    }

    static concatStyles(extras, newStyle) {
        let newExtras;
        if (extras) {
            newExtras = JSON.parse(JSON.stringify(extras));

            if (extras.style) {
                newExtras.style.push(newStyle);
            } else {
                newExtras.style = [newStyle];
            }
        } else {
            newExtras = {
                style: [newStyle]
            };
        }
        return newExtras;
    }

    static logDebug(nodeTree) {
        for (let i = 0; i < nodeTree.length; i++) {
            const node = nodeTree[i];

            if (node) {
                console.log(node.key + ' - ' + node.type.displayName, node);
                if (Array.isArray(node.props.children)) {
                    this.logDebug(node.props.children);
                }
            }
        }
    }
}

module.exports = Utils;
