import { ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import QuantitySelector from "./QuantitySelector"
import { useState } from "react"

const Cart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Sản phẩm 1", price: 100000, discountPrice: 200000, quantity: 1, image: "/image_195509_1_46272.webp", checked: false },
        { id: 2, name: "Sản phẩm 2", price: 150000, discountPrice: 250000, quantity: 1, image: "/image_195509_1_46272.webp", checked: false }
    ])
    const [selectAll, setSelectAll] = useState(false)

    const handleQuantityChange = (id:number, value:number) => {
        const updatedProducts = products.map(product =>
            product.id === id ? { ...product, quantity: value } : product
        )
        setProducts(updatedProducts)
    }

    const handleDelete = (id:number) => {
        const updatedProducts = products.filter(product => product.id !== id)
        setProducts(updatedProducts)
    }

    const handleSelect = (id:number) => {
        const updatedProducts = products.map(product =>
            product.id === id ? { ...product, checked: !product.checked } : product
        )
        setProducts(updatedProducts)

        // Kiểm tra tất cả sản phẩm đã được chọn
        const allSelected = updatedProducts.every(product => product.checked)
        setSelectAll(allSelected)
    }

    const handleSelectAll = () => {
        const newChecked = !selectAll
        setSelectAll(newChecked)

        const updatedProducts = products.map(product => ({
            ...product,
            checked: newChecked
        }))
        setProducts(updatedProducts)
    }

    const total = products.reduce((sum, product) => product.checked ? sum + product.quantity * product.price : sum, 0)

    const isDisabled = !products.some(product => product.checked)

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <ShoppingCart />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Giỏ hàng</SheetTitle>
                    <SheetDescription>
                        Vui lòng chọn số lượng và sản phẩm cần mua để thanh toán.
                    </SheetDescription>
                </SheetHeader>

                {/* Chọn tất cả */}
                <div className="flex items-center gap-3 border-b border-dashed px-3 py-2">
                    <Checkbox id="select-all" checked={selectAll} onCheckedChange={handleSelectAll} />
                    <label htmlFor="select-all">Chọn tất cả</label>
                </div>

                <div className="grid gap-4 px-3 py-4">
                    {products.map((product) => (
                        <div key={product.id} className="grid grid-cols-4 gap-3 items-center border-y border-dashed py-3">
                            <div className="col-span-1 flex items-center gap-2">
                                <Checkbox
                                    id={`product-${product.id}`}
                                    checked={product.checked}
                                    onCheckedChange={() => handleSelect(product.id)}
                                />
                                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                            </div>
                            <div className="col-span-2">
                                <p>{product.name}</p>
                                <div className="flex gap-3">
                                    <strong className="text-destructive">{product.price.toLocaleString()} đ</strong>
                                    <span className="line-through">{product.discountPrice.toLocaleString()} đ</span>
                                </div>
                                <QuantitySelector
                                    max={10}
                                    min={1}
                                    value={product.quantity}
                                    onQuantityChange={(value:number) => handleQuantityChange(product.id, value)}
                                />
                            </div>
                            <div>
                                <Button variant="destructive" onClick={() => handleDelete(product.id)}>
                                    <Trash2 />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <SheetFooter>
                    <div>
                        <p>Cần thanh toán: <strong>{total.toLocaleString()} đ</strong></p>
                    </div>
                    <SheetClose asChild>
                        <Button type="submit" variant="destructive" disabled={isDisabled}>Thanh toán</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Cart
