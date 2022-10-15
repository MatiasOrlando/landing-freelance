import React, { useState } from 'react';
import { Content } from './Content';
import FormContact from './FormContact';
import FormSent from './FormSent';

const ContactCont = () => {
  const [state, setState] = useState(false);

  return (
    <div className='bg-rose min-h-[832px] lg:min-h-[591px] w-screen flex justify-around items-center'>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-56'>
        <Content />
        {state ? (
          <FormSent setState={setState} />
        ) : (
          <FormContact setState={setState} />
        )}
      </div>
    </div>
  );
};

export default ContactCont;
