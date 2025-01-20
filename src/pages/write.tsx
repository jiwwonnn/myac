import Select from "@/components/Select";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Write = () => {
   return (
     <div>
       <div>
         <div>분류</div>
         <div>
           <div>
             <input type="radio" id='chk01' name='price'/>
             <label htmlFor="chk01">수입</label>
           </div>
           <div>
             <input type="radio" id='chk02' name='price'/>
             <label htmlFor="chk02">지출</label>
           </div>
         </div>
       </div>

       <div className="min-h-[100px]">
         <Select/>
       </div>

       <div>
       <div>내역</div>
         <div>
           <Input/>
         </div>
       </div>

       <div>
         <div>날짜</div>
         <div>
           <Input/>
         </div>
       </div>

       <div>
         <div>금액</div>
         <div>
           <Input/>
         </div>
       </div>
       
       <div className='flex justify-center mt-20'>
         <Button text={'취소'}/>
         <Button text={'저장'}/>
       </div>

     </div>
   )
}

export default Write