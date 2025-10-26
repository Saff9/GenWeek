import Avatar from "../ui/Avatar";

interface PostCardProps {
  user: { name?: string; image?: string };
  content: string;
  createdAt: string;
}

export default function PostCard({ user, content, createdAt }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex gap-3">
      <Avatar src={user.image} size={44} />
      <div className="flex flex-col">
        <span className="font-semibold text-primary">{user.name}</span>
        <p>{content}</p>
        <span className="text-xs text-gray-500 mt-1">
          {new Date(createdAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
}
