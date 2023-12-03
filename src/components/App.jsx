import React from 'react';
import { Greeting } from './Greeting';
import { Message } from './Message';

export function App() {
  const name = 'Іван';
  const message = 'Ласкаво просимо до нашого сайту!';

  return (
    <div>
      <Greeting name={name} />
      <Message text={message} />
    </div>
  );
}
