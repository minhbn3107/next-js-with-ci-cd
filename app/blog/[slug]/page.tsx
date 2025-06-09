// app/blog/[slug]/page.tsx
type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Params) {
    const { slug } = await params;
    return { title: `Post: ${slug}` };
}

export default async function Page({ params }: Params) {
    const { slug } = await params;

    return (
        <>
            <h1>Slug: {slug}</h1>
            <p>Write github actions for ci/cd</p>
        </>
    );
}
