import React, { useRef } from 'react'

const AddMenu = ({ onAdd }) => {

  const inputRef = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()

    const name = inputRef.current.value.trim()

    if (!name) {
      inputRef.current.focus()
      return;
    }

    onAdd(name)
    inputRef.current.value = ''
    inputRef.current.focus()
  }
  return (
    <form className='add' onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder='가고 싶은 곳을 추가해요(예:공원)' />
      <button type='submit'>추가</button>
    </form>
  )
}

export default AddMenu