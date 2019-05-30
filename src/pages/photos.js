import React from 'react'
import axios from 'axios'
import { BaseLayout } from '../layout/baseLayout'
import { PhotoGrid } from '../components'

function Page() {
  const [photos, setPhotos] = React.useState(null)

  React.useEffect(() => {
    let ignore = false

    async function fetchPhotos() {
      const response = await axios('http://localhost:5001/photos')

      if (!ignore) {
        setPhotos(response.data)
      }
    }

    fetchPhotos()

    return function() {
      ignore = true
    }
  }, [])

  return (
    <BaseLayout>
      {photos && (
        <PhotoGrid>
          {photos.map(photo => (
            <img key={photo.id} src={photo.url} />
          ))}
        </PhotoGrid>
      )}
    </BaseLayout>
  )
}

export default Page
