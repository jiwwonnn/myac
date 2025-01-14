const Select = () => {
  return (
    <div className='relative w-[120px]'>
      <label className='flex items-center justify-center border border-black w-full h-[40px] rounded-md px-2'>text</label>
      <ul className='w-full absolute top-[40px] border border-black inline-block'>
        <li>select item01</li>
        <li>select item02</li>
      </ul>
    </div>
  )
}

export default Select