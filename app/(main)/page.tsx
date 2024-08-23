'use client'

import { useState } from 'react'
import Chat from '../../components/chat'
import Details from '../../components/details'
import List from '../../components/list'

export default function Home() {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails((prev) => !prev)
  }
  return (
    <>
      {/* <List /> */}
      <Chat onInfoClick={toggleDetails} />
      {showDetails && <Details />}
    </>
  )
}
