interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductResponse {
  products: Product[];
}

export const fetchProducts = async (): Promise<ProductResponse> => {
  try {
    const response = await fetch("https://dummyjson.com/products?&limit=100");
    if (!response.ok) {
      throw new Error("Error fetching");
    }
    const data = await response.json();
    return data as ProductResponse;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
