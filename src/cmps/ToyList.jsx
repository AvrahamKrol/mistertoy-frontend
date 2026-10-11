import { Link } from 'react-router'
import { ToyPreview } from './ToyPreview.jsx'

export function ToyList({ toys, onRemoveToy, onEditToy }) {
  return (
    <ul className="toy-list">
      {toys.map((toy) => (
        <li className="toy-preview" key={toy._id}>
          <ToyPreview toy={toy} />

          <div>
            <button onClick={() => onRemoveToy(toy._id)}>x</button>
            <Link to={`/toy/${toy._id}`}>
              <button>Details</button>
            </Link>
            <Link to={`/toy/edit/${toy._id}`}>
              <button>Edit</button>
            </Link>{' '}
            &nbsp;
          </div>
        </li>
      ))}
    </ul>
  )
}
