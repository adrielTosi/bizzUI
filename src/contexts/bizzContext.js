import { createContext } from "react"

const bizzContext = createContext({
  bizzState: {},
  setQuestions: questions => {},
  setCheckedKeyToOptions: questions => {},
  checkSelectedOption: () => {},
  setHasVoted: () => {},
})

export default bizzContext
