import Button from "@/components/Button";

interface DetailProps {
  detail? : boolean,
}

const Card = ({ detail = false} : DetailProps) => {
  return (
    <div className={`shadow-lg rounded-md`}>
      <div className={`relative flex justify-between  ${detail ? 'py-2 pl-2 pr-8' : 'p-2'}`}>
        <div>
          <div>[type] desc</div>
          <div>date</div>
        </div>
        <div>
          <div><span>price</span>원</div>
          <div>
            <Button text="수정"/>
            <Button text="삭제"/>
          </div>
        </div>

        {
          detail === true && (
            <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>위</div>
          )
        }
      </div>
      {
        detail === true &&
        <div className="border-t border-t-gray-600 mt-4 p-2">
          use history
        </div>
      }

    </div>
  )
}

export default Card