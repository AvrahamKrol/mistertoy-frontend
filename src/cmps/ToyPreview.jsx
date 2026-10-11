import { Link } from 'react-router-dom'

export function ToyPreview({ toy }) {
  return (
    <article>
      <img src={toy.imgUrl} alt="" />
      <h4>{toy.name}</h4>
      <p>
        Price: <span>${toy.price.toLocaleString()}</span>
      </p>
    </article>
  )
}
