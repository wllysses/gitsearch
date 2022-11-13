export async function users(userName) {
    const url = `https://api.github.com/users/${userName}`
    const response = await fetch(url)
    const data = await response.json()
    return await data
}

export async function repositories(userName) {
    const url = `https://api.github.com/users/${userName}/repos`
    const response = await fetch(url)
    const data = await response.json()
    return await data
}