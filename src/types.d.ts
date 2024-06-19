export interface ProductProps {
  id: number
  name: string
  title?: string
  description: string
  price: number
  stock?: number
  images: string[]
  colors: string[]
  discount: number
}

export type ProductDetail = {
  product: ProductProps;
};
