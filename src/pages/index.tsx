import Button from "@/components/Button";
import Card from "@/components/Card";
import {useRouter} from "next/router";

export default function Home() {

  const router = useRouter()


  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div>총 금액</div>
          <div><span>1,000,000</span>원</div>
        </div>

        <button onClick={() => router.push('/detail')}>더보기</button>
      </div>

      <div>
        <div>최근 지출 내역</div>

        <div>

          <Card  />
          <Card  />


          <div className="flex justify-center">
            <Button text={'더보기'}/>
          </div>


        </div>
      </div>


      <div>
        <div>최근 입금 내역</div>

        <div>

          <Card />
          <Card />

          <Button text={'더보기'} />


        </div>
      </div>

      <div>
        bar chart
      </div>
    </div>
  );
}
