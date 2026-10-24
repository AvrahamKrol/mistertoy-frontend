import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { utilService } from '../../services/util.service'

const API_KEY = 'AIzaSyDN9xjK52B7kkODnIYWVWa-FClvK7SBqg4'
const DEFAULT_COORDS = { lat: 32.0853, lng: 34.7818 }
const DEFAULT_ZOOM = 8
const stores = [
  {
    id: utilService.makeId(),
    name: 'MisterToy Tel Aviv',
    address: 'Dizengoff St 50, Tel Aviv',
    lat: 32.0853,
    lng: 34.7818,
  },
  {
    id: utilService.makeId(),
    name: 'MisterToy Jerusalem',
    address: 'Jaffa St 20, Jerusalem',
    lat: 31.7683,
    lng: 35.2137,
  },
  {
    id: utilService.makeId(),
    name: 'MisterToy Haifa',
    address: 'Herzl St 15, Haifa',
    lat: 32.794,
    lng: 34.9896,
  },
]

export function About() {
  const [coords, setCoords] = useState(DEFAULT_COORDS)
  const [zoom, setZoom] = useState(DEFAULT_ZOOM)
  const MyMarker = ({ text }) => <div style={{ fontSize: '20px' }}>{text}</div>

  function onHandleClick({ lat, lng }) {
    setCoords({ lat, lng })
  }

  function onHandleClear() {
    setCoords(DEFAULT_COORDS)
    setZoom(DEFAULT_ZOOM)
  }

  function onSelectStore(store) {
    setCoords({ lat: store.lat, lng: store.lng })
    setZoom(13)
  }

  return (
    <>
      <section className="about">
        <h2>About MisterToy</h2>

        <p>
          Welcome to MisterToy, a friendly toy shop for kids of all ages. We
          started with a simple idea: playing should be fun, safe, and
          affordable. Today we offer dolls, puzzles, outdoor games, and
          battery-powered toys for babies and older children.
        </p>

        <h3>Our mission</h3>
        <p>
          We choose every toy with care. Our goal is to help children learn,
          imagine, and spend time with the people they love.
        </p>

        <h3>Why choose us</h3>
        <ul>
          <li>Carefully selected, safe toys</li>
          <li>Fair prices and regular updates to our stock</li>
          <li>Friendly service in every branch</li>
        </ul>

        <h3>Visit our stores</h3>
        <p>Find the branch nearest to you on the map below.</p>

        <article className="store-address">
          <div
            className="map-container"
            style={{ height: '80vh', width: '50%' }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: API_KEY }}
              center={coords}
              zoom={zoom}
              onClick={onHandleClick}
            >
              {stores.map((store) => (
                <MyMarker
                  key={store.id}
                  lat={store.lat}
                  lng={store.lng}
                  text="📍"
                  title={store.name}
                  onClick={() => onSelectStore(store)}
                />
              ))}
            </GoogleMapReact>
          </div>
          <div className="address-container">
            <h3>Our branches</h3>
            <ul className="stores-list">
              {stores.map((store) => (
                <li key={store.id}>
                  <button onClick={() => onSelectStore(store)}>
                    <strong>{store.name}</strong>
                    <span>{store.address}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={onHandleClear}>Clear</button>
          </div>
        </article>
      </section>
    </>
  )
}
