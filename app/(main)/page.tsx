'use client';

import Chat from '../../components/chat';
import Details from '../../components/details';
import Users from '../../components/list';

export default function Home() {
  return (
    <>
      <Users></Users>
      <Chat></Chat>
      <Details></Details>
    </>
  );
}
