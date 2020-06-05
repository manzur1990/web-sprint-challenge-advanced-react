import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [mode, setMode] = useLocalStorage('mode', initialValue)
    const target = document.querySelector('body')

    useEffect(() => {
        if (mode) {
            target.classList.add('dark-mode')
        } else {
            target.classList.remove('dark-mode')
        }
    }, [mode, target])

    return [mode, setMode]
}
