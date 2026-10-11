import { useState, useRef } from 'react'

import { utilService } from '../../services/util.service.js'
import { useEffectUpdate } from '../hooks/useEffectUpdate.js'

export function ToyFilter({ filterBy, onSetFilter }) {
  // console.log(filterBy)
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
  onSetFilter = useRef(utilService.debounce(onSetFilter, 300))

  useEffectUpdate(() => {
    onSetFilter.current(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  return (
    <section className="toy-filter full main-layout">
      <h2>Toys Filter</h2>
      <form>
        <label htmlFor="txt">Name:</label>
        <input
          type="text"
          id="txt"
          name="txt"
          placeholder="Name of the toy"
          value={filterByToEdit.txt}
          onChange={handleChange}
        />

        <label htmlFor="minPrice">Min price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          placeholder="By min price"
          value={filterByToEdit.minPrice || ''}
          onChange={handleChange}
        />
      </form>
    </section>
  )
}
