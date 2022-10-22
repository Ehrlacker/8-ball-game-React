import React from 'react';
import Form from './Form';
import Button from './Button';
import PicDiv from './PicDiv';

function App() {
  return   (
  <div>
<h1>The Magic 8 Ball</h1>
<br />
<h2>
  Type a question below, then
  <br />
  press the button to receive
  <br />
  your answer.
</h2>
<br />
<Form/>
<br />
<Button />
<br />
<PicDiv/>
</div>
  )
}

export default App;
