import axios from 'axios'
import lodash from 'lodash'

// some popular lib does NOT comes with a d.ts file
// luckily there is a repo that collects Types for popular lib
// we shall install separately
// npm i @types/libname

const ENDPOINT = 'https://jsonplaceholder.typicode.com'

// We can user axios' **.d.ts as documentation
axios.get<User>(`${ENDPOINT}/users/1`)
    .then((res)=>{
        const {data} = res
        printUser(data)
    })
    .catch(err=>{
        console.error(err)
    })


axios.get<User[]>(`${ENDPOINT}/users`)
    .then((res)=>{
        const {data} = res
        data.forEach(printUser)
    })
    .catch(err=>{
        console.error(err)
    })

function printUser(user: User){
    console.log(user.username)
    console.log(user.email)
    console.log(user.phone)
    console.log()
}

interface User{
    id: string
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: number
            lng: number
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}