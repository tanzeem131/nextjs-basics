import axios from "axios";
export default async function blogs({ params }: any) {
  const postId = (await params).blogIds;

  return (
    <div className="m-4 p-4 text-center text-xl">
      Blog page {JSON.stringify(postId)}
    </div>
  );
}
