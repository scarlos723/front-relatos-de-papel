import { useState } from 'react'
import { CiStar } from "react-icons/ci";

import type { ReviewProps } from './types'

export const Review = ({ id, name, comment, rating }: ReviewProps) => {
  const [isViewed, setIsViewed] = useState(false)

  const handleClick = () => {
    setIsViewed(!isViewed)
  }

  return (
    <div
      key={id}
      className="border border-gray-400 rounded-lg p-4 flex flex-col gap-2 cursor-pointer transition-all duration-300"
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        {Array.from({ length: rating }, (_, index) => (
          <CiStar
            key={index}
            className="text-yellow-500"
            size={26}
          />
        ))}
      </div>
      <div className={`flex flex-col gap-2 ${isViewed ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'} transition-all duration-300`}>
        <p>Nombre: {name}</p>
        <p>Comentario: {comment}</p>
      </div>
    </div>
  )
}
