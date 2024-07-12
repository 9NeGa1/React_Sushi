import React from 'react'
type Props = {
  type: string;
  placeholder: string;
  onChange: ((prev: string) => void);
  stateValue: string;
}
const AuthInput:React.FC<Props> = ({type, placeholder, onChange, stateValue}) => {
  return (
    <div>
      <input value={stateValue} onChange={(e) => onChange(e.target.value)} className='border border-gray-300 outline-none rounded-md p-2 mb-2 w-full focus:border-gray-400' type={type} placeholder={placeholder} />
    </div>
  )
}

export default AuthInput
