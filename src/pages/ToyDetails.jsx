import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { toyService } from '../../services/toy.service.js'

export function ToyDetails() {
  const [toy, setToy] = useState(null)
  const { toyId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (toyId) loadToy()
  }, [toyId])

  function loadToy() {
    toyService
      .getById(toyId)
      .then((toy) => setToy(toy))
      .catch((err) => {
        console.log('Had issues in toy details', err)
        navigate('/toy')
      })
  }
  if (!toy) return <div>Loading...</div>
  return (
    <section className="toy-details">
      <img src={toy.imgUrl} alt="" />
      <h1>Toy name : {toy.name}</h1>
      <h5>Price: ${toy.price}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas
        cumque tempore, aperiam sed dolorum rem! Nemo quidem, placeat
        perferendis tempora aspernatur sit, explicabo veritatis corrupti
        perspiciatis repellat, enim quibusdam!
      </p>
      <Link to={`/toy/edit/${toy._id}`}>Edit</Link> &nbsp;
      <Link to={`/toy`}>Back</Link>
      {/* <p>
        <Link to="/toy/nJ5L4">Next Toy</Link>
      </p> */}
    </section>
  )
}
