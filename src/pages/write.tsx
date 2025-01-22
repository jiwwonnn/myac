import React, {useEffect, useState} from "react";
import {addDoc, collection} from "@firebase/firestore";
import {db} from "@/pages/Firebase";
import Select from "@/components/Select";
import Input from "@/components/Input";
import Button from "@/components/Button";
import {PriceType} from "@/types/account";
import {EXPENDITURECATEGORY, INCOMECATEGORY} from "@/constants/type";

const Write = () => {
  const [priceType, setPriceType] = useState<PriceType>('income')
  const [content, setContent] = useState<string>('')
  const [detail, setDetail] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [price, setPrice] = useState<string>('')

  
  
  // 분류, 타입, 내역, 날짜, 상세내역, 금액 내용을 입력 후 FIREBASE에 저장하는 함수 ( after react-query )
  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        content: content,
        detail: detail,
        price: price,
        date: date,
      })
    } catch (e) {
      console.log(e)
    }
  }

  // 분류를 변경했을때 select 의 상태가 초기화가 되어야한다.
  useEffect(() => {

  }, []);

   return (
     <div>
       <div>
         <div>분류</div>
         <div>
           <div>
             <input
               type="radio"
               id='chk01'
               name='price'
               checked={priceType === "income"}
                onChange={e => (e.target.checked) && setPriceType("income")}
             />
             <label htmlFor="chk01">수입</label>
           </div>
           <div>
             <input
               type="radio"
               id='chk02'
               name='price'
               checked={priceType === "expenditure"}
               onChange={e => (e.target.checked) && setPriceType("expenditure")}
             />
             <label htmlFor="chk02">지출</label>
           </div>
         </div>
       </div>

       <div className=''>
         <Select
           priceType={priceType}
           optionList={priceType === "income" ? INCOMECATEGORY : EXPENDITURECATEGORY}
         />
       </div>

       <div>
         <div>내역</div>
         <div>
           <Input
             value={content}
             onChange={(e) => setContent(e.target.value)}
             placeholder='내역을 입력하세요.'
           />
         </div>
       </div>

       <div>
         <div>상세내역</div>
         <div>
           <Input
             value={detail}
             placeholder='상세내역을 입력하세요'
             onChange={(e) => setDetail(e.target.value)}
           />
         </div>
       </div>

       <div>
         <div>날짜</div>
         <div>
           <Input
             type='date'
             value={date}
             onChange={(e) => setDate(e.target.value)}
           />
         </div>
       </div>

       <div>
         <div>금액</div>
         <div>
           <Input
            value={price}
            placeholder='금액을 입력하세요'
            onChange={(e) => setPrice(e.target.value)}
           />
         </div>
       </div>

       <div className='flex justify-center mt-20'>
         <Button text={'취소'}/>
         <Button text={'저장'} onClick={handleSave}/>
       </div>

     </div>
   )
}

export default Write