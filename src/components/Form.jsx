import React, {useState} from 'react';

const Form = () => {

  const [question, setQuestion] = useState('')

  const handleQuestion = (e) => {

    setQuestion(e.target.value)
  }

return (
<form>
  <label className="label" for="question"> Ask your question</label>
  <input
    onChange ={handleQuestion}
    type="text"
    class="question"
    placeholder="What is your question?"
    value = {question}
  />
</form>
)}

export default Form;