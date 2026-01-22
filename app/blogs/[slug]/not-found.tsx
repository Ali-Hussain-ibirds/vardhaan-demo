import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="parent bg-pattern py-[100px]">
      <div className="container px-4 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl text-center text-red-500">Blog Not Found</h1>
        <p className="text-center">The requested blog post could not be found.</p>
        <Link href="/blogs" className="btn">
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}

