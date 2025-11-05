export type TestStep = 'Given' | 'When' | 'Then' | 'And' | 'But';;

export async function runStep(stepType: TestStep, description: string, asyncComand: () => Promise<void>) {
    try {
        process.stdout.write(`${stepType} ${description} `);
        await asyncComand();
        process.stdout.write('[OK]\n');
    }catch (error) {
        process.stdout.write('[FAILED]\n');
        throw error;
    }
}

export async function Given(description: string, asyncComand: () => Promise<void>) {
    return runStep('Given', description, asyncComand);
}

export async function When(description: string, asyncComand: () => Promise<void>) {
    return runStep('When', description, asyncComand);
}

export async function Then(description: string, asyncComand: () => Promise<void>) {
    return runStep('Then', description, asyncComand);
}

export async function And(description: string, asyncComand: () => Promise<void>) {
    return runStep('And', description, asyncComand);
}

export async function But(description: string, asyncComand: () => Promise<void>) {
    return runStep('But', description, asyncComand);
}
