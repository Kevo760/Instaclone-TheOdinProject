import { useEffect } from 'react'

export function useDebounceEffect(
  fn,
  waitTime,
  deps,
// eslint-disable-next-line
) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, deps)
    }, waitTime)

    return () => {
      clearTimeout(t)
    }
  // eslint-disable-next-line
  }, deps)
// eslint-disable-next-line
}