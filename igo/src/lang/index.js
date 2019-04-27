import data from "./langs.json"

let current = "pt"
let lang = {}

Object.keys(data["pt"]).forEach(label =>
    Object.defineProperty(lang, label, {
        get: () => data[current][label]
    })
)

// lang.car
export default lang
