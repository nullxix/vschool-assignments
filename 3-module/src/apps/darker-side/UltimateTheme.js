import React from "react"
export const values = ["Licorice", "Bottle", "Feelings", "Objectives", "Victory", "Cat", "You Can't Get Dog Back HAHAHAHA"]

export const UltimateContext = React.createContext(
    {
        text: "Dog",
        toggle: () => {}
    }      
)

export default UltimateContext;