import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          key={1}
          author="Jaquison Ferriera"
          date="31/12/2020"
          content="Hoje é final do ano"
        />

        <ChannelMessage
          key={2}
          author="Oseias Gomes"
          date="31/12/2020"
          content={
            <>
              <Mention>@Jaquison Ferreira</Mention> não quero saber, não curto
              essas coisas, eu faço a sobrancelhas.
            </>
          }
          isBot
          hasMention
        />

        <ChannelMessage
          key={1}
          author="Jaquison Ferriera"
          date="31/12/2020"
          content={
            <>
              <Mention>@Oseias Gomes</Mention> nada contra rapaz... não se
              preocupe...
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
