import Card from "@/components/Card";
import {useEffect, useState} from "react";
import {FetchPosts} from "@/utils/fetchPosts";
import {Account, PriceType} from "@/types/account";

const Detail = () => {

  const [tab, setTab] = useState<PriceType>('income')
  const [incomePosts, setIncomePosts] =useState<Account[]>([]);
  const [expenditurePosts, setExpenditurePosts] = useState<Account[]>([]);

  const [searchData, setSearchData] = useState<Account[]>([]);

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
      newDate.setDate(1)
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // 다음 버튼 클릭 핸들러
  const handleNextMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(1)
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  useEffect(() => {
    if(formattedDate) {
      const newYear = formattedDate.split(' ')[0].replaceAll("년", "");
      let newMonth = formattedDate.split(' ')[1].replaceAll("월", "");
      if(parseInt(newMonth) < 10) {
        newMonth = "0" + newMonth;
      }

      if(tab === "income") {
        const newData = incomePosts.map(post => {
          const itemYear = post.date.split("-")[0];
          const itemMonth = post.date.split("-")[1];
          if (newYear === itemYear && newMonth === itemMonth) {
            return {
              ...post,
              isMatch: true,
              title: "수입"
            }
          } else {
            return null
          }
        });
        setSearchData(newData.filter(post => post))
      } else {
        const newData = expenditurePosts.map(post => {
          const itemYear = post.date.split("-")[0];
          const itemMonth = post.date.split("-")[1];
          if (newYear === itemYear && newMonth === itemMonth) {
            return {
              ...post,
              isMatch: true,
              title: "지출"
            }
          } else {
            return null
          }
        });
        setSearchData(newData.filter(post => post))
      }
    }
  }, [formattedDate, tab]);


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
        {
          searchData?.filter(post => post.isMatch)?.length <= 0 &&
          <div>
            {tab === 'income' ? '수입' : '지출'} 데이터가 없습니다.
          </div>
        }
        {
          searchData?.filter(post => post.isMatch)?.map(post => (
            <Card key={post.id} post={post} detail={true}/>
          ))
        }
      </div>
    </div>
  )
}

export default Detail