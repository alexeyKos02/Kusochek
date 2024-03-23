export interface ItemCard{
    name: string,
    description: string,
    price: number,
    measurements: string[],
    composition: string
}

export interface Item{
    id: number,
    name: string,
    price: number,
    promotionPrice: number,
    category: string,
    image: string,
    averageMark: number
}
