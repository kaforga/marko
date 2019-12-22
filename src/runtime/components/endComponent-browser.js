"use strict";

module.exports = function endComponent(out) {
    out.ee(); // endElement() (also works for VComponent nodes pushed on to the stack)
    out.___assignedComponentDef = out.___assignedKey = out.___assignedCustomEvents = null;
};
