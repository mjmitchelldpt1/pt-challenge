import Button from "../../components/Button"
import { useState } from "react"

function Contact() {
  const [text, setText] = useState('')

  

  return (
    <div>
      <form action="onSubmit">Im a form</form>
      <input type="text" />
      <input type="text" />
      <Button />
    </div>
  )
}

export default Contact
