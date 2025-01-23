import Button from "@/components/Button";
import Card from "@/components/Card";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Account} from "@/types/account";
import {FetchPosts} from "@/utils/fetchPosts";

export default function Home() {

  const navigate = useRouter()
  const [incomePosts, setIncomePosts] = useState<Account[]>([]); // 수입 데이터
  const [expenditurePosts, setExpenditurePosts] = useState<Account[]>([]); // 지출 데이터


  const fetchHomeData = async () => {
    const incomeData = await FetchPosts("income", 3);
    const expenditureData = await FetchPosts("expenditure", 3);
    setIncomePosts(incomeData);
    setExpenditurePosts(expenditureData);
  };

  useEffect(() => {
    fetchHomeData();
  }, []);


  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div>총 금액</div>
          <div><span>1,000,000</span>원</div>
        </div>

        <button onClick={() => navigate.push('/detail')}>더보기</button>
      </div>

      {/* 최근 지출 내역 */}
      <div>
        <div>최근 지출 내역</div>
        <div>
          {
            expenditurePosts.length > 0 ? (
              expenditurePosts?.slice(0,3).map((post) => (
                  <Card key={post.id} post={post} />
                ))
            ) : (
              <div>게시글이 없습니다.</div>
            )
          }


          <div className="flex justify-center">
            <Button text={"더보기"} onClick={() => navigate.push('/detail')}/>
          </div>
        </div>
      </div>

      {/* 최근 입금 내역 */}
      <div>
        <div>최근 입금 내역</div>
        <div>
          {
            incomePosts?.length > 0 ? (
              incomePosts.slice(0, 3).map((post) => (
                <Card key={post.id} post={post}/>
              ))
            ) : (
              <div>게시글이 없습니다.</div>
            )
          }

          <div className="flex justify-center">
            <Button text={"더보기"}/>
          </div>
          </div>
        </div>

        <div>
          bar chart
        </div>
      </div>
  );
}
