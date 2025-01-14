import Card from "@/components/Card";

const Detail = () => {
  return (
    <div>
      <div>12월</div>
      <div className='flex border-b border-gray-500'>
        <div className='flex-1 text-center'>지출</div>
        <div className='flex-1 text-center'>입금</div>
      </div>

      <div className="mt-10">
        <Card />
      </div>
    </div>
  )
}

export default Detail