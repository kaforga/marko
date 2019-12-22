var domData = require("../components/dom-data");
var vElementByDOMNode = domData.___vElementByDOMNode;
var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");

function VText(value) {
    this.___VNode(-1 /* no children */);
    this.___nodeValue = value;
}

VText.prototype = {
    ___Text: true,

    ___nodeType: 3,

    ___actualize: function(doc) {
        var node = doc.createTextNode(this.___nodeValue);
        vElementByDOMNode.set(node, this);
        return node;
    },

    ___cloneNode: function() {
        return new VText(this.___nodeValue);
    }
};

inherit(VText, VNode);

module.exports = VText;
