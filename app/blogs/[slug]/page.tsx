import { notFound } from "next/navigation";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import blogs from "@/data/blogs";
import BlogContent from "@/components/BlogContent";

interface Blog {
  id: number;
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  description: string;
  date: string;
  image: string;
  body?: string;
}

// ISG: Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

// Generate static params for all blogs at build time
export async function generateStaticParams() {
  return blogs.map((blog) => {
    const slug = blog.slug?.endsWith('/') ? blog.slug.slice(0, -1) : blog.slug;
    return {
      slug: slug || '',
    };
  });
}

const BlogDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const routeSlug = resolvedParams.slug.trim();

  // Find blog by slug (handle both with and without trailing slash)
  const blog = blogs.find((b) => {
    if (!b.slug) return false;
    const blogSlug = b.slug.endsWith('/') ? b.slug.slice(0, -1) : b.slug;
    return blogSlug === routeSlug;
  }) as Blog | undefined;

  if (!blog) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const blogContent = blog.body && blog.body.trim() 
    ? blog.body 
    : `<p class="text-black mb-4">${blog.description}</p>`;

  return (
    <>
      <div className="parent bg-pattern pt-[100px]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h1
            className="text-3xl max-w-[1000px] text-balance text-center line-clamp-2 "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {blog.title}
          </h1>

          <span
            className="px-2 text-sm text-[var(--accentDark)] flex items-center gap-2 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaRegClock />
            {formatDate(blog.date)}
          </span>
        </div>
      </div>

      <div className="parent bg-pattern-half pt-[30px]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <Image
            src={blog.image || "/blog.jpg"}
            width={1000}
            height={500}
            alt={blog.title}
            className="rounded-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
      </div>

      <div
        className="flex flex-col gap-4 p-4 mb-[60px] rounded-2xl max-w-[1000px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="w-full border-t border-gray-300"></div>
        <BlogContent html={blogContent} />
      </div>
    </>
  );
};

export default BlogDetail;
