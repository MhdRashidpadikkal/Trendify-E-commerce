import { useFilterContext } from "@/context/FilterContext"
import { formatPriceInINR } from "@/utils/currencyFormat"
import React, { useEffect, useState } from "react"
import { Range, getTrackBackground } from "react-range"

const MIN = 0
const MAX = 1000

export function PriceRangeSlider() {
  const [values, setValues] = useState([0, 1000])
  const {dispatch} = useFilterContext()

  useEffect(() => {
    dispatch({type: "SET_PRICE_RANGE" , payload: {max: formatPriceInINR(values[1]), min: formatPriceInINR(values[0])}})
  }, [values])

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-lg font-semibold text-[#111111] mb-2">
        ₹{formatPriceInINR(values[0])} - ₹{formatPriceInINR(values[1])} <span className="text-sm relative right-1">+</span>
      </div>

      <Range
        values={values}
        step={100}
        min={MIN}
        max={MAX}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              background: getTrackBackground({
                values,
                colors: ["#d1d5db", "#59A52C", "#d1d5db"], // gray-300, green-500
                min: MIN,
                max: MAX
              }),
              borderRadius: "4px"
            }}
            className="w-full rounded "
          >
            {children}          </div>
        )}
        renderThumb={({ props, index }) => {
            const {key, ...restProps} = props;
            return <div 
                key={key} {...restProps}
                 className="w-5 h-5 rounded-full bg-[#6fca3a] border-2 border-white shadow-md"
                />
        }
         }
      />
    </div>
  )
}
