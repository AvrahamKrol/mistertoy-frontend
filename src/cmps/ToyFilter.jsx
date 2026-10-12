import { useState, useRef } from 'react'

import { utilService } from '../../services/util.service.js'
import { useEffectUpdate } from '../hooks/useEffectUpdate.js'

export function ToyFilter({ filterBy, onSetFilter }) {
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

        <label htmlFor="price">Min price:</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="By min price"
          value={filterByToEdit.price || ''}
          onChange={handleChange}
        />
        <label htmlFor="inStock">In Stock:</label>
        <select
          id="inStock"
          name="inStock"
          onChange={handleChange}
          value={filterByToEdit.inStock}
        >
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Not in Stock</option>
        </select>

        <label htmlFor="labels">Labels:</label>
        <select
          id="labels"
          name="labels"
          onChange={handleChange}
          value={filterByToEdit.labels}
        >
          <option value="Doll">Doll</option>
          <option value="Baby">Baby</option>
          <option value="Battery Powered">Battery Powered</option>\{' '}
        </select>

        <label htmlFor="sortField">Sort By:</label>
        <select
          id="sortField"
          name="sortField"
          onChange={handleChange}
          value={filterByToEdit.sortField}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="createdAt">Created</option>
          <option value="inStock">In stock</option>
        </select>

        <label htmlFor="sortDir">Order:</label>
        <select
          id="sortDir"
          name="sortDir"
          onChange={handleChange}
          value={filterByToEdit.sortDir}
        >
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </select>
      </form>
    </section>
  )
}
