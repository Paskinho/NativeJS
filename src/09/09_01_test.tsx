
function increaseAge (u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}




test ('reference type test', ()=> {
    let users = [
        {
        name: 'Dimych',
        age: 32
    },
        {
            name: 'Dimych',
            age: 32
        }

    ]

    let admins = users

    admins.push({name: "Bandyugan", age: 10})

    expect(users[2]).toEqual({name: "Bandyugan", age: 10})


    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)


    })


test ('reference type test', ()=> {

    const address =
        {
            title = "Minsk"
        }

    let users = [
        {
            name: 'Dimych',
            age: 32,
            address: address
        },
        {
            name: 'Dimych',
            age: 32,
            address: address
        }

    ]


}
)