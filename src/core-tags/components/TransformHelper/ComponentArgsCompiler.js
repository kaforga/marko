"use strict";

class ComponentArgs {
    constructor() {
        this.key = null;
        this.customEvents = null;
        this.isUserAssignedKey = false;
    }

    setKey(key, isUserAssignedKey) {
        this.key = key;
        this.isUserAssignedKey = isUserAssignedKey === true;
    }

    addCustomEvent(options) {
        if (!this.customEvents) {
            this.customEvents = [];
        }

        this.customEvents.push([
            options.eventType,
            options.targetMethod,
            options.isOnce,
            options.extraArgs
        ]);
    }

    compile(transformHelper) {
        if (!this.key && !this.customEvents) {
            return;
        }

        var el = transformHelper.el;

        var builder = transformHelper.builder;

        var args = [this.key];

        if (this.customEvents) {
            args.push(builder.literal(this.customEvents));
        }

        if (el.type === "CustomTag") {
            el.generateRenderTagCode = function(codegen, tagVar, tagArgs) {
                tagArgs = tagArgs.concat(args);
                return codegen.builder.functionCall(tagVar, tagArgs);
            };
        } else {
            el.onBeforeGenerateCode(event => {
                // TODO check this out
                debugger;
                let funcTarget = builder.memberExpression(
                    builder.identifierOut(),
                    builder.identifier("c")
                );
                let funcArgs = [args];

                event.insertCode(builder.functionCall(funcTarget, funcArgs));
            });

            el.onAfterGenerateCode(event => {
                let funcTarget = builder.memberExpression(
                    builder.identifierOut(),
                    builder.identifier("c")
                );
                let funcArgs = [builder.literalNull()];

                event.insertCode(builder.functionCall(funcTarget, funcArgs));
            });
        }
    }
}

module.exports = ComponentArgs;
