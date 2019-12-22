"use strict";

module.exports = function endComponent(out, componentDef, parentComponentDef) {
    out.ee(); // endElement() (also works for VComponent nodes pushed on to the stack)
    out.___assignedComponentDef = parentComponentDef;
    out.___assignedKey = out.___assignedCustomEvents = null;
};
