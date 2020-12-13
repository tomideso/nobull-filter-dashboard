import { useState, useEffect } from "react"

export const useLocationHash = (value) => {
    const [hash, setHash] = useState(value)

    useEffect(() => {

        const hashchangeListener = () => {
            setHash(window.location.hash)
        }

        window.addEventListener('hashchange', hashchangeListener)

        return () => {
            window.removeEventListener('hashchange', hashchangeListener)
        }
    }, [hash])

    useEffect(() => {
        setHash(window.location.hash)
    }, [])

    return hash;
}