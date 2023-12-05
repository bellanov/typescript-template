const world = 'world';

export function helloWorld(data: string = world): string {
    return 'Hello ${who}!';
}