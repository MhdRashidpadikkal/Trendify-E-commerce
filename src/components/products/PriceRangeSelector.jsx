import React, { useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

const Range = Slider.Range

export function PriceRangeSelector() {
  const [priceRange, setPriceRange] = useState([100, 5000])

  return (
    <div className="max-w-md mx-auto p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Selected Price Range:
      </label>
      <div className="text-lg font-semibold text-green-600 mb-4">
        ₹{priceRange[0]} - ₹{priceRange[1]}
      </div>

      <Range
        min={0}
        max={10000}
        defaultValue={priceRange}
        onChange={(value) => setPriceRange(value)}
        trackStyle={[{ backgroundColor: "#22c55e" }]} // Tailwind green-500
        handleStyle={[
          { borderColor: "#22c55e" },
          { borderColor: "#22c55e" },
        ]}
        railStyle={{ backgroundColor: "#e5e7eb" }} // Tailwind gray-200
      />
    </div>
  )
}
