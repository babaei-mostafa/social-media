'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ImagePicker() {
  const [pickedImage, setPickedImage] = useState(null)

  function handleImageChange(e) {
    const file = e.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const objectUrl = URL.createObjectURL(file)
    setPickedImage(objectUrl)
  }
  return (
    <>
      <p className="form-control">
        <label htmlFor="image">Image URL</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="image"
          name="image"
          onChange={handleImageChange}
        />
      </p>
      {pickedImage && (
        <Image
          src={pickedImage}
          alt="Image picked by the user"
          width={100}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      )}
    </>
  )
}
