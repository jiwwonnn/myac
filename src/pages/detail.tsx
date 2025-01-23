import Card from "@/components/Card";
import {useEffect, useState} from "react";
import {FetchPosts} from "@/utils/fetchPosts";
import {Account, PriceType} from "@/types/account";

const Detail = () => {

  const [tab, setTab] = useState<PriceType>('income')
  const [incomePosts, setIncomePosts] =useState<Account[]>([]);
  const [expenditurePosts, setExpenditurePosts] = useState<Account[]>([]);
  const [date, setDate] = useState(new Date())

  const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

  useEffect(() => {
    const fetchDetailData = async () => {
      const incomeData = await FetchPosts("income");
      const expenditureData = await FetchPosts("expenditure");
      setIncomePosts(incomeData);
      setExpenditurePosts(expenditureData);
    };

    fetchDetailData();
  }, []);

  const handleTabClick = (priceType : PriceType) => {
    setTab(priceType)
  }

  // 이전 버튼 클릭 핸들러
  const handlePreviousMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // 다음 버튼 클릭 핸들러
  const handleNextMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };


  return (
    <div>
      <div className="flex justify-between items-center">
        <button onClick={handlePreviousMonth}>이전</button>
        <div>{formattedDate}</div>
        <button onClick={handleNextMonth}>다음</button>
      </div>
      <div className='flex border-b border-gray-500'>
        <div
          className={`flex-1 text-center cursor-pointer ${
            tab === "income" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleTabClick("income")}
        >
          입금
        </div>
        <div
          className={`flex-1 text-center cursor-pointer ${
            tab === "expenditure" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleTabClick("expenditure")}
        >
          지출
        </div>
      </div>

      <div className="mt-10">
        {tab === "expenditure" &&
          (expenditurePosts.length > 0 ? (
            expenditurePosts.map((post) => <Card key={post.id} post={post} detail={true}/>)
          ) : (
            <div>지출 데이터가 없습니다.</div>
          ))}
        {tab === "income" &&
          (incomePosts.length > 0 ? (
            incomePosts.map((post) => <Card key={post.id} post={post} detail={true}/>)
          ) : (
            <div>입금 데이터가 없습니다.</div>
          ))}
      </div>
    </div>
  )
}

export default Detail