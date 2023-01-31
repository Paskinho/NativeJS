const resolvedPromise = Promise.resolve([{}])
console.log(resolvedPromise)

const rejectedPromise= Promise.reject({message: "Some error"})
console.log(resolvedPromise)

rejectedPromise.then(data => console.log(data)).
    catch(error=> console.log(error))