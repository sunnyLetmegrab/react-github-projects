import supabase from "../db/db"


async function getUser(req, res) {

}
async function registerUser(req, res) {

    const { data, error } = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
    })
}

module.exports = {
    getUser,
}