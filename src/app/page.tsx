'use client'

import './styles.css'
import { useState } from 'react'
import InputComponent from '@/components/atoms/Input'
import ImageComponent from '@/components/atoms/Image'
import Button from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  const search = () => {
    router.push(`/search?q=${searchInput}`)
  }

  return (
    <div className="home">
      <ImageComponent src="/google.svg" width={272} />
      <InputComponent
        variant="home-input"
        value={searchInput}
        onChangeText={setSearchInput}
        onSearch={() => search()}
      />
      <Button label="Buscar" onClick={() => search()} disabled={!searchInput} />
    </div>
  )
}
