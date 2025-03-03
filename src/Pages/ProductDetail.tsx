import CardProduct from "@/Components/CardProduct"
import QuantitySelector from "@/Components/QuantitySelector";
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/Components/ui/carousel"
import { CalculateDiscount } from "@/Helpers/CalculateDiscount";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect, useState } from "react";

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

const ProductDetail = () => {
    const [numberProduct, setNumberProduct] = useState(1)

    const discount = CalculateDiscount(200000, 100000)

    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            groupAll: true, // Gom các ảnh vào cùng 1 gallery
            Thumbs: {
                autoStart: true, // Hiện thumbnail
            },
        });

        // Cleanup Fancybox khi component bị unmount
        return () => {
            Fancybox.destroy();
        };
    }, []);

    const handleQuantityChange = (value:number) => {
        setNumberProduct(value)
    }

    const handleBuyNow = () => {
        console.log('Mua ngay: ' + numberProduct + ' sản phẩm')
    }

    const handleAddCard = () => {
        console.log('Thêm vào giỏ: ' + numberProduct + ' sản phẩm')
    }

    return (
        <div className="my-12">
            <div className="grid grid-cols-2 gap-8 w-full mb-12">
                <div>
                    <div>
                        <a href={'../image_195509_1_46272.webp'} data-fancybox="gallery" data-caption="1">
                            <img src="../image_195509_1_46272.webp" alt="" className="w-full" />
                        </a>
                    </div>
                    <div className="grid grid-cols-4 mt-5">
                        <a href="../image_195509_1_46272.webp" data-fancybox="gallery" data-caption="2">
                            <img src="../image_195509_1_46272.webp" alt="" className="w-full" />
                        </a>
                        <a href="../image_195509_1_46272.webp" data-fancybox="gallery" data-caption="3">
                            <img src="../image_195509_1_46272.webp" alt="" className="w-full" />
                        </a>
                        <a href="../image_195509_1_46272.webp" data-fancybox="gallery" data-caption="4">
                            <img src="../image_195509_1_46272.webp" alt="" className="w-full" />
                        </a>
                        <a href="../image_195509_1_46272.webp" data-fancybox="gallery" data-caption="5">
                            <img src="../image_195509_1_46272.webp" alt="" className="w-full" />
                        </a>
                    </div>
                </div>
                <div className="text-start flex flex-col gap-6">
                    <div className="flex flex-col gap-3 border-b border-dashed pb-6">
                        <h2 className="text-2xl font-bold">Tên sách</h2>
                        <div className="grid grid-cols-2 justify-between">
                            <span>Nhà xuất bản: <strong>NXB trẻ</strong></span>
                            <span>Tác giả: <strong>Tên tác giả</strong></span>
                            <span>Độ tuổi: <strong>10</strong></span>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <strong className="text-red-600 text-2xl">100.000 đ</strong>
                            <div className="bg-red-600 w-fit text-white px-3 rounded">
                                -{discount}%
                            </div>
                            <p className="line-through">200.000 đ</p>
                        </div>
                        <div>
                            <QuantitySelector min={1} max={10} onQuantityChange={handleQuantityChange} />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Button variant={"destructive"} onClick={handleBuyNow}>Mua ngay</Button>
                            <Button variant={"outline"} onClick={handleAddCard}>Thêm vào giỏ</Button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-3">Thông tin chi tiết</h3>
                        <div>
                            <div className="grid grid-cols-2 border-b py-3">
                                <p>Mã hàng</p>
                                <strong>123456789</strong>
                            </div>
                            <div className="grid grid-cols-2 border-b py-3">
                                <p>Độ tuổi</p>
                                <strong>10</strong>
                            </div>
                            <div className="grid grid-cols-2 border-b py-3">
                                <p>Tên nhà cung cấp</p>
                                <strong>ABC</strong>
                            </div>
                            <div className="grid grid-cols-2 border-b py-3">
                                <p>Tác giả</p>
                                <strong>Tên tác giả</strong>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Mô tả sản phẩm</h3>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="mb-6 text-2xl font-bold">Sách cùng thể loại</h3>
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
        </div>
    )
}

export default ProductDetail