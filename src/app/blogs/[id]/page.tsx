"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogData, BlogPost } from "../../../Mocdata/blogData";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const postId = parseInt(params?.id as string);
    const foundPost = blogData.blogPosts.find((p) => p.id === postId);

    if (foundPost) {
      setPost(foundPost);
      // Get related posts from same category
      const related = blogData.blogPosts
        .filter((p) => p.id !== postId && p.category === foundPost.category)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [params?.id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-2xl font-bold text-gray-300 mb-2">
            Blog post not found
          </h2>
          <Link
            href="/blogs"
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Navigation */}
      <nav className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-semibold"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Post Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-300">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Body */}
          <div
            className="prose prose-lg prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: "#e5e7eb",
              lineHeight: "1.8",
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800/50 text-gray-300 px-3 py-2 rounded-lg text-sm border border-gray-700/50"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Section */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl p-6 border border-gray-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-4">
              Share this article
            </h3>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                📘 Facebook
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors">
                🐦 Twitter
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors">
                💼 LinkedIn
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4 md:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent mb-8 text-center">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {new Date(relatedPost.publishDate).toLocaleDateString()} •{" "}
                      {relatedPost.readTime}
                    </p>
                    <Link href={`/blogs/${relatedPost.id}`}>
                      <button className="text-red-400 hover:text-red-300 font-semibold text-sm transition-colors">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
