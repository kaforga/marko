var domData = require("../components/dom-data");
var vElementByDOMNode = domData.___vElementByDOMNode;
var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");

function VComment(value) {
    this.___VNode(-1 /* no children */);
    this.___nodeValue = value;
}

VComment.prototype = {
    ___nodeType: 8,

    ___actualize: function(doc) {
        var node = doc.createComment(this.___nodeValue);
        vElementByDOMNode.set(node, this);
        return node;
    },

    ___cloneNode: function() {
        return new VComment(this.___nodeValue);
    }
};

inherit(VComment, VNode);

module.exports = VComment;
