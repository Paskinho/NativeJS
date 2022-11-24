import {UserType} from "./10_01";


function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u
    }
    copy.hair = u.hair/power
    return copy
}


test ('reference type test', ()=> {
    let user: UserType =
        {
        name: 'Dimych',
        hair: 32,
            address: {
            title: "Minsk"
            }
    }

        const awesomeHair =  makeHairstyle(user,2);


        expect(awesomeHair.hair).toBe(16)
    expect(user.hair).toBe(16)


}
)