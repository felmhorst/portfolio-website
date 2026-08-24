export function getClosestInteractiveParent(target: Element): HTMLElement | null {
    return target.closest('button')
        ?? target.parentElement?.closest('button')
        ?? target.closest('a')
        ?? target.parentElement?.closest('a')
        ?? null;
}