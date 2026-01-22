import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";
import SectionTop from "@/components/SectionTop";
import blogs from "@/data/blogs";

interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const Blogs = () => {
  return (
    <>
      <SectionTop
        heading="Our"
        headingHighlight=" Blogs"
        backgroundImage="/sectionTop/global.webp"
      />
      <div className="parent bg-pattern py-[100px]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <div className="w-full py-6 bg-white/50 rounded-2xl">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {blogs.length > 0 ? (
                [...blogs]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map((blog) => <BlogCard key={blog.id} blog={blog} />)
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600">No articles found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

function BlogCard({ blog }: { blog: Blog }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Normalize slug - remove trailing slash for URL
  const normalizedSlug = blog.slug?.endsWith('/') 
    ? blog.slug.slice(0, -1) 
    : blog.slug;

  return (
    <Link
      href={`/blogs/${normalizedSlug}`}
      className="w-[350px] min-h-[300px] bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-2 transition-all hover:shadow-2xl"
    >
      <div className="w-full relative  !aspect-[768/288]">
        <Image
          src={blog.image || "/blog.jpg"}
          fill
          alt={blog.title}
          className=" object-cover "
        />
      </div>
      <div className="w-full p-4 flex flex-col gap-2 items-start">
        <h2 className="text-xl leading-5 line-clamp-2">{blog.title}</h2>
        <p className="text-sm line-clamp-3 opacity-65">{blog.description}</p>
        <div className="border-t border-gray-300 w-[50px] my-3"></div>
        <span className="px-2 text-sm text-[var(--accentDark)] flex items-center gap-2">
          <FaRegClock />
          {formatDate(blog.date)}
        </span>
      </div>
    </Link>
  );
}
