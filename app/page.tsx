import axios from "axios";

export default async function Home() {
  const response = await axios("http://localhost:3001/api/v1/user/details");
  const data = response.data;
  console.log(data);
  await new Promise((r) => setTimeout(r, 5000));

  return (
    <div className="m-4 p-4 space-y-8 mx-auto text-4xl font-semibold h-fit w-fit bg-green-950 rounded-md">
      <div>{data.name}</div>
      <div>{data.email}</div>
      <div>
        {data.address.city}
        {data.address.state}
        {data.address.houseNumber}
      </div>
    </div>
  );
}
