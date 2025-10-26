import { prisma } from "@/lib/prisma";

export default async function FeedPage() {
  const posts = await prisma.post.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow p-4">
          <h2 className="text-primary font-semibold">{post.user.name}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      {posts.length === 0 && (
        <p className="text-gray-600 text-center">No posts yet. Be first!</p>
      )}
    </div>
  );
}
