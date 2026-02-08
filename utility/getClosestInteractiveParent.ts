export function getClosestInteractiveParent(target: Element): Element | null {
    return target.closest('button')
        ?? target.parentElement?.closest('button')
        ?? target.closest('a')
        ?? target.parentElement?.closest('a');
}