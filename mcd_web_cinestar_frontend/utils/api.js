const API_URL = import.meta.env.VITE_API_BASE_URL;

const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`Error fetching ${endpoint}`);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchReviews = () => fetchData("reviews");

export default fetchData;

export const createBlog = async (blogData) => {
  const response = await fetch(`${API_URL}/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogData),
  });
  return await response.json();
};
