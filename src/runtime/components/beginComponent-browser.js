var VComponent = require("../vdom/VComponent");
var ComponentDef = require("./ComponentDef");

module.exports = function beginComponent(
    componentsContext,
    component,
    key,
    customEvents
) {
    var componentId = component.id;
    var out = componentsContext.___out;
    var globalContext = componentsContext.___globalContext;
    var componentDef = (componentsContext.___componentDef = new ComponentDef(
        component,
        componentId,
        globalContext
    ));

    globalContext.___renderedComponentsById[componentId] = true;
    componentsContext.___components.push(componentDef);

    out.___assignedKey = key;
    out.___assignedCustomEvents = customEvents;
    out.___assignedComponentDef = componentDef;

    out.___beginNode(new VComponent(component, key, false), 0, true);

    return componentDef;
};
