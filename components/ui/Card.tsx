import Image from 'next/image';

export default function Card({ product }: { product: any }) {
    return (
        <div className="group block">
            <div className="space-y-2">
                <div className="relative aspect-square">
                    <Image
                        src={`/${product.image}`}
                        fill
                        sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
                        className="rounded-xl grayscale group-hover:opacity-80"
                        alt={product.name}
                        placeholder="blur"
                        blurDataURL={product.imageBlur}
                    />
                </div>

                <div className="truncate text-sm font-medium text-gray-900 group-hover:text-vercel-cyan">
                    {product.name}
                </div>

            </div>
        </div>
    );
}