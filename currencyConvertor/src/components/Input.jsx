import React, { useId } from 'react'

function Input({
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    label
}) {


  const amountInputId=useId()
  return (
    <div className='bg-white text-sm rounded-lg p-3 flex'>
      
    <div className="w-1/2 ">

        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>

          {label}
        </label>

        <input 
        type='number'
        id={amountInputId}
        className=' w-full bg-transparent py-1.5'
        placeholder='amount'
        disabled={amountDisable}
        value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
    </div>

    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select name="" id="" className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}>


          {
            currencyOptions.map((currency)=>(
               <option key={currency} value={currency}>{currency}</option>  
            ))
          }
        </select>
    </div>
    </div>
  )
}

export default Input
