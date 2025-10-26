import Avatar from "../ui/Avatar";

interface Story {
  id: string;
  name: string;
  image?: string;
}

export default function StoriesBar({ stories }: { stories?: Story[] }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {(stories || []).map((story) => (
        <div key={story.id} className="flex flex-col items-center">
          <Avatar src={story.image} size={64} />
          <span className="text-sm mt-1 text-gray-700">{story.name}</span>
        </div>
      ))}
    </div>
  );
}
