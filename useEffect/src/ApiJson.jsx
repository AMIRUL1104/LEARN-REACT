import { useState, useEffect } from "react";

function ApiJson() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await fetch("/apijson.json");
      const modifyData = await response.json();
      setData(modifyData);
    } catch (e) {
      console.error(e);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isSuccess = true;

    setTimeout(() => {
      if (isSuccess) {
        loadData();
      } else {
        setError("failed to get data");
        setLoading(false);
      }
    }, 3000);
  }, []);

  if (loading)
    return (
      <h2 className=" mt-8 p-5 border-2 text-black bg-amber-50 rounded-2xl text-4xl">
        loading data...
      </h2>
    );
  if (error)
    return (
      <h2 className=" mt-8 p-5 border-2 text-black bg-amber-50 rounded-2xl text-4xl">
        {error}
      </h2>
    );
  return (
    <div className=" border-2 border-amber-50 p-4">
      <h2 className=" w-full mt-8  border-2 text-black bg-amber-50 mb-5 text-4xl">
        Books Loaded Successfully
      </h2>
      <div className="mt-1 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {data.map((item) => (
          <p
            key={item.id}
            className="p-4 text-left pl-5 rounded-2xl border border-gray-300 mb-4 shadow-2xl"
          >
            {item.id} ) {item.title} — {item.author}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ApiJson;
