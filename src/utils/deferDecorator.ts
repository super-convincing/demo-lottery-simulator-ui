export function deferDecorator<T>(wrapped: (...args: any) => void, ms = 400): T {
  let timeoutId: NodeJS.Timeout
  const reFx: any = function (this: typeof reFx, ...args2: any) {
    if (ms == 0) {
      return wrapped.apply(this, args2);
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        return wrapped.apply(this, args2);
      }, ms);
    }
  }
  return reFx as T
}
