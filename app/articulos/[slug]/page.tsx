export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    // const post = await getProducts(slug)
    return <div>
        <h1>{slug}</h1>
        {slug}</div>;
}