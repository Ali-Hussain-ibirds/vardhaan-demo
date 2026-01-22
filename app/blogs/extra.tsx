"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock  } from "react-icons/fa";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import SectionTop from "@/components/SectionTop";





interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  content?: unknown;
  slug: string;
  publishedAt: string;
  publishDate?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    documentId: string;
    name: string;
    email: string;
  };
  category: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
  };
  cover: {
    id: number;
    documentId: string;
    name: string;
    url: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    size: number;
    ext: string;
    mime: string;
  };
}

interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface ApiResponse {
  data: Article[];
  meta: {
    pagination: PaginationMeta;
  };
}







const Blogs = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);



  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const strapiUrl = "https://vardaan.vixiserver.online";
        const response = await fetch(
          `${strapiUrl}/api/articles?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=10`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data: ApiResponse = await response.json();
        setArticles(data.data || []);
        setPagination(data.meta.pagination);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="parent bg-pattern py-[100px]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-5xl text-center">Our <span> Blogs</span></h1>
          <div className="text-red-500 text-center">
            <p>Error loading articles: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn mt-4"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }




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
            <div className="flex  flex-wrap items-center justify-center gap-6  ">
            {articles.length > 0 ? (
              articles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No articles found.</p>
              </div>
            )}
            </div>

            {pagination && pagination.pageCount > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`btn ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Previous
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: pagination.pageCount }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`btn ${currentPage === page ? 'btn2' : ''}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, pagination.pageCount))}
                  disabled={currentPage === pagination.pageCount}
                  className={`btn ${currentPage === pagination.pageCount ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Next
                </button>
              </div>
            )}

            {pagination && (
              <div className="text-center mt-4 text-gray-600">
                Showing {((currentPage - 1) * 10) + 1} to {Math.min(currentPage * 10, pagination.total)} of {pagination.total} articles
              </div>
            )}
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Blogs;

function BlogCard({article}: {article: Article}) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toPlainText = (value: unknown): string => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.map(toPlainText).join(' ');
    if (value && typeof value === 'object') {
      const node = value as { text?: unknown; children?: unknown };
      if (typeof node.text === 'string') return node.text;
      if (node.children) return toPlainText(node.children);
    }
    return '';
  };

  return (
    <Link href={`/blogs/${article.slug}`} className="w-[350px] min-h-[300px] bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-2 transition-all hover:shadow-2xl">
      <Image 
        src={article.cover?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://82.29.167.68:1337'}${article.cover.url}` : "/blog.jpg"} 
        width={350} 
        height={200} 
        alt={article.cover?.alternativeText || article.title}
        className="w-full h-[200px] object-cover"
      />
      <div className="w-full p-4 flex flex-col gap-2 items-start">
        <span className="si">{article.category.name}</span>

        <h2 className="text-xl leading-5 line-clamp-2">{article.title}</h2>
        <p className="text-sm line-clamp-3 opacity-65">{toPlainText(article.content) || article.description}</p>
        <div className="border-t border-gray-300 w-[50px] my-3"></div>
  
        <span className="px-2 text-sm text-[var(--accentDark)] flex items-center gap-2">
          <FaRegClock />
          {formatDate(article.publishDate || article.publishedAt)}
        </span>
      </div>
    </Link>
  );
}



