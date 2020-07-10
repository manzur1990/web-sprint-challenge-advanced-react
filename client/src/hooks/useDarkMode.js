import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue) => {
   const [mode, setMode] = useLocalStorage(initialValue)
    const target = document.querySelector('body')

useEffect(() =>{
    mode ? target.classList.add('dark-mode') : target.classList.remove('dark-mode')   
}, [mode, target])

    return [mode, setMode]   
}


