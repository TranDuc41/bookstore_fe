import CardProduct from "@/Components/CardProduct"
import { Checkbox } from "@/Components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group"
import { Link, useParams } from "react-router-dom"

const products = [
    {
        name: '100 kỹ năng sinh tồn',
        price: 200000,
        price_sale: 100000,
        uid: '1',
        slug: 'ten-san-pham',
        thumbnail: '../image_195509_1_46272.webp'
    },
    {
        name: '100 kỹ năng sinh tồn',
        price: 200000,
        price_sale: null,
        uid: '4',
        slug: 'ten-san-pham',
        thumbnail: '../image_195509_1_46272.webp'
    },
    {
        name: '100 kỹ năng sinh tồn',
        price: 100000,
        price_sale: 50000,
        uid: '2',
        slug: 'ten-san-pham',
        thumbnail: '../image_195509_1_46272.webp'
    },
    {
        name: '100 kỹ năng sinh tồn',
        price: 100000,
        price_sale: 50000,
        uid: '3',
        slug: 'ten-san-pham',
        thumbnail: '../image_195509_1_46272.webp'
    }
]

const categories = [
    {
        name: 'Truyện Thiếu Nhi',
        slug: 'danh-muc',
        uid: '1'
    },
    {
        name: 'Kiến Thức - Kỹ Năng Sống Cho Trẻ',
        slug: 'danh-muc',
        uid: '2'
    },
    {
        name: 'Tô màu, luyện chữ',
        slug: 'danh-muc',
        uid: '3'
    },
]

const priceRanges = [
    {
        min: 0,
        max: 150000,
        title: '0 - 150.000 đ'
    },
    {
        min: 150000,
        max: 300000,
        title: '150.000 đ - 300.000đ'
    },
    {
        min: 300000,
        max: 500000,
        title: '300.000 đ - 500.000 đ'
    },
    {
        min: 500000,
        max: 999999999999,
        title: '500.000 - Trở lên'
    },
    {
        min: 0,
        max: 999999999999,
        title: 'Tất cả'
    }
]

const Category = () => {
    const { slug } = useParams();

    return (
        <div className="grid grid-cols-4 w-full gap-12">
            <div className="flex flex-col gap-6 text-start border-r border-dashed">
                <div>
                    <h3 className="text-xl font-medium mb-3">Danh mục</h3>
                    <div className="flex flex-col gap-1 ml-1">
                        {categories.map((category) => (
                            <Link
                                to={`/category/${category.slug}`}
                                key={category.uid}
                                className={`text-base hover:bg-accent p-2 
                                    ${slug === category.slug ? "text-red-500 font-bold" : ""}`}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-4">Giá</h3>
                    <div className="flex flex-col gap-1 ml-1">
                        <RadioGroup defaultValue="0-999999999999">
                            {priceRanges.map((priceRange, index) => (
                                <div className="flex items-center space-x-2" key={index}>
                                    <RadioGroupItem
                                        value={`${priceRange.min}-${priceRange.max}`}
                                        id={`price-${index}`}
                                    />
                                    <Label htmlFor={`price-${index}`} className="font-normal text-base">{priceRange.title}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-4">Hình thức</h3>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center space-x-2 ml-1">
                            <Checkbox id="bia-cung" />
                            <label
                                htmlFor="bia-cung"
                                className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Bìa cứng
                            </label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="bia-mem" />
                            <label
                                htmlFor="bia-mem"
                                className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Bìa mềm
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="grid grid-cols-4 gap-3">
                    {products.map((product) => (
                        <CardProduct
                            key={product.uid}
                            productName={product.name}
                            productThumb={product.thumbnail}
                            productPrice={product.price}
                            productPriceSale={product.price_sale}
                            productSlug={product.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category