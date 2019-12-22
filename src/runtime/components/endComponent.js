"use strict";

module.exports = function endComponent(out, componentDef, parentComponentDef) {
    if (componentDef.___renderBoundary) {
        out.w("<!--" + out.global.runtimeId + "/-->");
    }

    out.___assignedComponentDef = parentComponentDef;
    out.___assignedKey = out.___assignedCustomEvents = null;
};
