import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const QuantitySelector = ({ min = 1, max = 10, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(min)

    const handleIncrease = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1
            setQuantity(newQuantity)
            onQuantityChange?.(newQuantity) // Gửi giá trị lên cha
        }
    }

    const handleDecrease = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1
            setQuantity(newQuantity)
            onQuantityChange?.(newQuantity) // Gửi giá trị lên cha
        }
    }

    return (
        <div className="flex items-center gap-3">
            <Button 
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 hover:bg-gray-100"
                onClick={handleDecrease}
                disabled={quantity === min}
            >
                <Minus className="w-4 h-4" />
            </Button>
            <Input 
                type="number" 
                value={quantity} 
                readOnly 
                className="w-16 text-center border-gray-300 bg-white rounded-md"
            />
            <Button 
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 hover:bg-gray-100"
                onClick={handleIncrease}
                disabled={quantity === max}
            >
                <Plus className="w-4 h-4" />
            </Button>
        </div>
    )
}

export default QuantitySelector
