// app/blog/[slug]/page.tsx
import { use } from "react";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Main page component using React's use() hook
export default function BlogPost({ params, searchParams }: PageProps) {
    // Use the use() hook to unwrap the promises
    const { slug } = use(params);
    const resolvedSearchParams = use(searchParams);

    // Your existing blog post logic here
    return (
        <div>
            <h1>Blog Post: {slug}</h1>
            {/* Your blog content */}
        </div>
    );
}

// generateMetadata still needs to be async
export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;

    return {
        title: `Blog Post - ${slug}`,
        description: `Read about ${slug}`,
    };
}
