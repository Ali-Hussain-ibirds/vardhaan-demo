import { Metadata } from 'next';
import blogs from '@/data/blogs';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const routeSlug = resolvedParams.slug.trim();
  const metadataBase = new URL("https://www.vardaanhospitals.org/");
  
  // Find blog by slug
  const blog = blogs.find((b) => {
    if (!b.slug) return false;
    const blogSlug = b.slug.endsWith('/') ? b.slug.slice(0, -1) : b.slug;
    return blogSlug === routeSlug;
  });

  if (!blog) {
    return {
      title: "Blog Not Found | Vardaan Hospital Ranchi",
      description: "The requested blog post could not be found.",
      alternates: {
        canonical: `/blogs/${routeSlug}`,
      },
    };
  }

  const imageUrl = blog.image ? new URL(blog.image, metadataBase).toString() : undefined;

  return {
    title: blog.metaTitle || `${blog.title} | Vardaan Hospital Ranchi`,
    description: blog.metaDescription || blog.description,
    alternates: {
      canonical: `/blogs/${routeSlug}`,
    },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.description,
      images: imageUrl ? [imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

