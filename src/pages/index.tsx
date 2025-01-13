import Input from "@/components/Input";
import Button from "@/components/Button";
import Select from "@/components/Select";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <div>총 금액</div>
          <div><span>1,000,000</span>원</div>
        </div>

        <div>더보기</div>
      </div>

      <div>
        <div>최근 지출 내역</div>

        <div>

          <div>
            <div>
              <div>[식비] 저녁식사</div>
              <div>2025.01.01</div>
            </div>
            <div>
              <div><span>50.000</span>원</div>
            </div>
          </div>

          <div>
            <div>
              <div>[식비] 저녁식사</div>
              <div>2025.01.01</div>
            </div>
            <div>
              <div><span>50.000</span>원</div>
            </div>
          </div>

          <Button text={'더보기'} />


        </div>
      </div>


      <div>
        <div>최근 입금 내역</div>

        <div>

          <div>
            <div>
              <div>[월급] 12월 월급</div>
              <div>2025.01.01</div>
            </div>
            <div>
              <div><span>50.000</span>원</div>
            </div>
          </div>

          <div>
            <div>
              <div>[투자] 삼성전자 30주 매도</div>
              <div>2025.01.01</div>
            </div>
            <div>
              <div><span>50.000</span>원</div>
            </div>
          </div>

          <Button text={'더보기'} />


        </div>
      </div>


      <Input/>
      <Select/>
    </div>
  );
}
