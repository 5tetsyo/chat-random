import { useMemo } from "react"

export const useFilter = (array, value) => {
    const filtered = useMemo(() => {
        return array.filter(c => c.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    }, [array, value])
    return filtered
}