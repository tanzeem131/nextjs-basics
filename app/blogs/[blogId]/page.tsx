import axios from "axios";
export default async function blogs({ params }: any) {
  const postId = (await params).blogId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = response.data;

  return (
    <div className="m-4 p-4 text-center text-xl">
      Blog page {postId}
      <br />
      Title :{data.title}
      <br />
      Content :{data.body}
    </div>
  );
}
