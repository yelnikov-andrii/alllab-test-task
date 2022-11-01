import { Star } from "./Star"

export const JobRating = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  )
}