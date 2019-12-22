"use strict";

module.exports = function endComponent(out, componentDef) {
    if (componentDef.___renderBoundary) {
        out.w("<!--" + out.global.runtimeId + "/-->");
    }

    out.___assignedComponentDef = out.___assignedKey = out.___assignedCustomEvents = null;
};
