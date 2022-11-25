import {moveUserToOtherHouse, UserType, UserWithBookType, UserWithLaptopType} from "./10_01";
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


test ('upgrade laptop', ()=> {
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

    const userCopy= moveUserToOtherHouse(user, 99)



    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).not.toBe(userCopy.address.house)

})

