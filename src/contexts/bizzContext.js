import { createContext } from "react"

const bizzContext = createContext({
  bizzState: {},
  setQuestions: questions => {},
  setCheckedKeyToOptions: questions => {},
})

export default bizzContext
