import {
    addNewBooksToUser,
    moveUserToOtherHouse, MySkillsType, removeBook,
    updateBook, updateCompanyTitle, updateSkills,
    UserType,
    UserWithBookType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";
import {makeHairstyle} from "./10_01";
import {moveUser} from "./10_01";
import {upgradeUserLaptop} from "./10_01";


test ('reference type test', ()=> {
    let user: UserType =
        {
        name: 'Dimych',
        hair: 32,
            address: {
            city: "Minsk",
                house:12
            }
    }

        const awesomeHair =  makeHairstyle(user,2);


    user.address.city= "Kiev"

        expect(awesomeHair.hair).toBe(16)
    expect(user.hair).toBe(16)
    expect(awesomeHair.address).toBe(user.address)
}
)

test ('change address', ()=> {
    let user: UserType =
        {
            name: 'Dimych',
            hair: 32,
            address: {
                city: "Minsk",
                house: 16
            }
        }

        const awesomeHair = makeHairstyle(user, 2)
       user = awesomeHair;

        expect(awesomeHair.hair).toBe(16)
        expect(user.hair).toBe(32)
        expect(awesomeHair.address).toBe(user.address)

})

test ('change address', ()=> {
    let user: UserWithLaptopType =
        {
            name: 'Dimych',
            hair: 32,
            address: {
                city: "Minsk",
                house: 14
            },
            laptop: {
                title: "ZenBook"
            }
        }

    let movedUser = moveUser(user, "Kiev")



    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")

})

test ('upgrade laptop', ()=> {
    let user: UserWithLaptopType =
        {
            name: 'Dimych',
            hair: 32,
            address: {
                city: "Minsk",
                house: 14
            },
            laptop: {
                title: "ZenBook"
            }
        }

    const changeLaptop = upgradeUserLaptop(user, "MacBook")



    expect(user).not.toBe(changeLaptop)
    expect(user.address).toBe(changeLaptop.address)
    expect(user.laptop).not.toBe(changeLaptop.laptop)
    expect(changeLaptop.laptop.title).toBe("MacBook")
    expect(user.laptop.title).toBe("ZenBook")

})


test ('add new books to user', ()=> {
    let user: UserWithLaptopType & UserWithBookType =
        {
            name: 'Dimych',
            hair: 32,
            address: {
                city: "Minsk",
                house: 14
            },
            laptop: {
                title: "ZenBook"
            },
            books : ["css", "html", "js", "react"]

        }

    const userCopy= addNewBooksToUser(user, ["ts", "rest api"])



    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).toBe(userCopy.address.house)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(userCopy.books[5]).toBe("rest api")

})

test ('update books in user', ()=> {
    let user: UserWithLaptopType & UserWithBookType =
        {
            name: 'Dimych',
            hair: 32,
            address: {
                city: "Minsk",
                house: 14
            },
            laptop: {
                title: "ZenBook"
            },
            books : ["css", "html", "js", "react"]

        }

    const userCopy=updateBook(user, "js", "ts")



    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).toBe(userCopy.address.house)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")


})


test ('update books in user', ()=> {
    let user: UserWithLaptopType & UserWithBookType & MySkillsType =
        {
            name: 'Dimych',
            hair: 32,
            address: {
                city: "Minsk",
                house: 14
            },
            laptop: {
                title: "ZenBook"
            },
            books : ["css", "html", "js", "react"],
            skills: [25,50,75,100]

        }

    const userCopy=updateSkills(user, 50, 60)



    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).toBe(userCopy.address.house)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")


})


test ('remove js book', ()=> {
    let user: UserWithLaptopType & UserWithBookType & MySkillsType =
        {
            name: 'Dimych',
            hair: 32,
            address: {
                city: "Minsk",
                house: 14
            },
            laptop: {
                title: "ZenBook"
            },
            books : ["css", "html", "js", "react"],
            skills: [25,50,75,100]

        }

    const userCopy=removeBook(user,"js")


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).toBe(userCopy.address.house)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")


})

test ('companies', ()=> {
    let user: UserWithLaptopType & WithCompaniesType=
        {
            name: 'Dimych',
            hair: 32,
            address: {
                city: "Minsk",
                house: 14
            },
            laptop: {
                title: "ZenBook"
            },
          companies: [
              {id: 1, title: "Епам"},
              {id: 2, title: "IT-Incubator"}
          ]
        }

    const userCopy = updateCompanyTitle(user,1,"Epam")
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies).not.toBe(userCopy.address)
    expect(user.companies[0].title).toBe("Epam")


})
