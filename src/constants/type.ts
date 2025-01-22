export const EXPENDITURECATEGORY = {
  FOOD: 'FOOD',                            // 식비
  HOUSING: 'HOUSING',                      // 주거비
  INSURANCE: 'INSURANCE',                  // 보험비
  TRANSPORTATION: 'TRANSPORTATION',        // 교통비
  MEDICAL: 'MEDICAL',                      // 의료비
  EDUCATION: 'EDUCATION',                  // 교육비
  LIVING: 'LIVING',                        // 생활비
  COMMUNICATION : 'COMMUNICATION'          // 통신비
} as const

export const INCOMECATEGORY = {
  SALARY : 'SALARY',                       // 월급
  INVEST : 'INVEST'                        // 투자
} as const

export const CategoryLabels = {
  food: "식비",
  housing: "주거비",
  insurance: "보험비",
  transportation: "교통비",
  medical: "의료비",
  education: "교육비",
  living: "생활비",
  communication: "통신비",
  salary: "월급",
  invest: "투자",
} as const


export type ExpenditureCategoryType = typeof EXPENDITURECATEGORY[keyof typeof EXPENDITURECATEGORY];
export type IncomeCategoryType = typeof INCOMECATEGORY[keyof typeof INCOMECATEGORY];