export interface IBox{
    id: number,
    name: string,
    year: string,
    sport: string,
    price: number,
    inStock: string
}

export interface IAbout{
    name:string,
    description: string
}

export interface IContact{
    phone:string,
    email: string,
    address: string,
    city: string,
    state: string,
    zip: string
}

export interface IUser{
    email: string;
    password: string;
}