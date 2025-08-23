import Card from '@/components/ui/Card';
import PageContainer from '@/components/ui/PageContainer';
import { delayRecommendedProducts, withDelay } from '@/lib/utils/delay';
import Image from 'next/image';
import { Suspense } from 'react';
export const experimental_ppr = true

export default async function page() {
    return (
        <PageContainer className='!flex-col-reverse'>
            <Suspense fallback={<div className='h-64 w-full bg-gray-100 rounded-2xl'></div>}>

                <StaticProduct />
            </Suspense>
            <Suspense fallback={<RecommendedProductsSkeleton />}>
                <Stream />
            </Suspense>
        </PageContainer>
    );
}

async function StaticProduct() {
    const product = await withDelay(fetch(
        `https://app-router-api.vercel.app/api/products?id=1`
    ).then((res) => res.json()), 5000);

    return <div className="col-span-2  md:order-1 md:col-span-1">
        <h1 className='text-3xl mb-4'>{product.name}</h1>
        <div className="grid h-80 gap-4 ">
            <div className="relative ">
                <Image
                    src={`/${product.image}`}
                    className="block rounded-lg object-contain aspect-square grayscale"
                    alt={product.name}
                    fill
                    sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
                    priority
                />
            </div>

        </div>
    </div>
}


async function Stream() {
    let products = await withDelay(
        fetch(
            // We intentionally delay the response to simulate a slow data
            // request that would benefit from streaming
            `https://app-router-api.vercel.app/api/products?filter=1`,
            {
                // We intentionally disable Next.js Cache to better demo
                // streaming
                cache: 'no-store',
            }
        ).then((res) => res.json()),
        delayRecommendedProducts
    );

    return (
        <div className="space-y-6">
            <div>
                <div className="text-lg font-medium text-gray-900">
                    Recommended Products for You
                </div>
                <div className="text-sm text-gray-400">
                    Based on your preferences and shopping habits
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {products.map((product: any) => (
                    <div key={product.id} className="col-span-2 md:col-span-1">
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export function RecommendedProductsSkeleton() {
    return (
        <div className="space-y-6 pb-[5px]">
            <div className="space-y-2">
                <div className={`h-6  rounded-lg bg-gray-900 ${shimmer}`} />
                <div className={`h-4 w-1/2 rounded-lg bg-gray-900 ${shimmer}`} />
            </div>

            <div className="grid grid-cols-4 gap-6">
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
            </div>
        </div>
    );
}
function ProductSkeleton() {
    return (
        <div className="col-span-4 space-y-4 lg:col-span-1">
            <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />

            <div className="h-4 w-full rounded-lg bg-gray-900" />
            <div className="h-6  rounded-lg bg-gray-900" />
            <div className="h-4 w-full rounded-lg bg-gray-900" />
            <div className="h-4 w-4/6 rounded-lg bg-gray-900" />
        </div>
    );
}
