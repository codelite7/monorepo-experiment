// to transform a pipeline from the api into form compatible
export function formPipelineFromPipeline(pipeline) {
    // copy values that don't change
    const formPipeline = {
        id: pipeline.id,
        name: pipeline.name,
        retryIntervalSeconds: pipeline.retryIntervalSeconds,
        maxRetries: pipeline.maxRetries,
        outputs: pipeline.outputs,
        steps: [],
    };
    // handle step conversion to form steps
    pipeline.steps.forEach((step) => {
        const formFilterStep = {
            statements: [],
            expression: step.expression,
            outputs: step.outputs,
            required: step.required,
            type: step.type,
        };
        for (const [key, value] of Object.entries(step.statements)) {
            // handle statement conversion to form statement
            const formStatement = {
                name: key,
                field: value.field,
                operator: value.operator,
                value: value.value,
                valueType: undefined,
            };
            switch (typeof value.value) {
                case 'number':
                    formStatement.valueType = 'number';
                    break;
                case 'string':
                    formStatement.valueType = 'string';
                    break;
                case 'boolean':
                    formStatement.valueType = 'boolean';
                    break;
                default:
                    formStatement.valueType = 'null';
                    break;
            }
            formFilterStep.statements.push(formStatement);
        }
        formPipeline.steps.push(formFilterStep);
    });
    return formPipeline;
}
// to transform a pipeline from a form object into something compatible with the api
export function pipelineFromFormPipeline(formPipeline) {
    const steps = [];
    // transform form steps into the correct formats
    formPipeline.steps.forEach((step) => {
        const statements = {};
        step.statements.forEach((statement) => {
            let value = statement.value;
            switch (statement.valueType) {
                case 'boolean':
                    value = Boolean(value);
                    break;
                case 'string':
                    value = String(value);
                    break;
                case 'number':
                    value = Number(value);
                    break;
                case 'null':
                    value = null;
            }
            statements[statement.name] = {
                field: statement.field,
                operator: statement.operator,
                value,
            };
        });
        const filterStep = {
            statements,
            expression: step.expression,
            outputs: step.outputs,
            required: step.required,
            type: 'filter',
        };
        steps.push(filterStep);
    });
    return {
        id: formPipeline.id,
        name: formPipeline.name,
        retryIntervalSeconds: formPipeline.retryIntervalSeconds,
        maxRetries: formPipeline.maxRetries,
        outputs: formPipeline.outputs,
        steps,
    };
}
//# sourceMappingURL=pipeline.js.map