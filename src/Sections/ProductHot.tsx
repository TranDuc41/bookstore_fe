import CardProduct from "@/Components/CardProduct"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/Components/ui/carousel"
import { Flame } from "lucide-react"
import { Link } from "react-router-dom"

const products = [
    {
        name: '100 kỹ năng sinh tồn',
        price: 200000,
        price_sale: 100000,
        uid: '1',
        slug: 'ten-san-pham',
        thumbnail: './image_195509_1_46272.webp'
    },
    {
        name: '100 kỹ năng sinh tồn',
        price: 200000,
        price_sale: null,
        uid: '4',
        slug: 'ten-san-pham',
        thumbnail: './image_195509_1_46272.webp'
    },
    {
        name: '100 kỹ năng sinh tồn',
        price: 100000,
        price_sale: 50000,
        uid: '2',
        slug: 'ten-san-pham',
        thumbnail: './image_195509_1_46272.webp'
    },
    {
        name: '100 kỹ năng sinh tồn',
        price: 100000,
        price_sale: 50000,
        uid: '3',
        slug: 'ten-san-pham',
        thumbnail: './image_195509_1_46272.webp'
    }
]

const ProductHot = () => {
    return (
        <section className="mb-12">
            <div className="flex items-center gap-5">
                <h3 className="text-3xl font-medium text-red-600">Sách nổi bật</h3>
                <Flame className="text-red-600" />
            </div>
            <div className="mt-6">
                <Carousel>
                    <CarouselContent>
                        {products.map((product) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={product.uid}>
                                <CardProduct
                                    productName={product.name}
                                    productThumb={product.thumbnail}
                                    productPrice={product.price}
                                    productPriceSale={product.price_sale}
                                    productSlug={product.slug}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="mt-6">
                <Link to={''}>
                    <Button className="hover:cursor-pointer">Xem thêm</Button>
                </Link>
            </div>
        </section>
    )
}

export default ProductHot