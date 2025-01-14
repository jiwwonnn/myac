import Select from "@/components/Select";
import Input from "@/components/Input";

const Write = () => {
   return (
     <div>
       <div>
         <div>분류</div>
         <div>
           <input type="checkbox"/>
           <input type="checkbox"/>
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

     </div>
   )
}

export default Write