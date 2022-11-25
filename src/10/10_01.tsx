
export type UserType= {
    name: string,
    hair: number,
    address: { city: string, house: number}
}

    export type LaptopType = {
        title: string
}

export  type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBookType = {
    books: Array<string>
}

export type MySkillsType = {
    skills: Array<number>
}


export function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair/power
    }
    // copy.hair = u.hair/power
    return copy
}


export function moveUser (u: UserWithLaptopType, city : string) {
    const copyMoveUser = {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    // copyMoveUser.address = {...copyMoveUser.address}
    return copyMoveUser
}



export function moveUserToOtherHouse (u: UserWithLaptopType & UserWithBookType, house : number) {
    const copyMoveUser = {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    // copyMoveUser.address = {...copyMoveUser.address}
    return copyMoveUser
}

export function addNewBooksToUser (u: UserWithLaptopType & UserWithBookType, newBooks : Array<string>) {
    return  {
        ...u,
        books: [...u.books, newBooks]
        }

}


export function upgradeUserLaptop (u: UserWithLaptopType, title:string ) {
    const copyLaptop = {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
    // copyMoveUser.address = {...copyMoveUser.address}
    return copyLaptop
}


export function updateBook (u: UserWithLaptopType & UserWithBookType, changeBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === changeBook ? newBook : b)

    }
}

export function updateSkills (u: UserWithLaptopType & UserWithBookType & MySkillsType, oldSkill: number, newSkill: number) {
    return {
        ...u,
        skills: u.skills.map(b => b === oldSkill ? newSkill : b)

    }
}