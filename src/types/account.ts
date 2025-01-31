import {ExpenditureCategoryType, IncomeCategoryType} from "@/constants/type";

export type PriceType = "income" | "expenditure"

export interface Account {
  priceType : PriceType
  type : ExpenditureCategoryType | IncomeCategoryType
  content: string
  detail: string
  date: string
  price: string
  isEditing? : boolean
  id: string
  isMatch?: boolean;
}