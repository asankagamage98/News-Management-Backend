const User = require('../models/user.model')
const bcrypt = require('bcrypt')

//user create service
const create = async (userdata) => {
    const { name, email, password } = userdata

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await new User({
            name,
            email,
            password: hashedPassword,
        }).save()

        return user
    } catch (error) {
        console.error('Error creating user:', error.message)
        throw error
    }
}

// Get all users
const getAllUsers = async () => {
    const users = await User.find()
    return users
}

//update user
const update = async (id, data) => {
    try {
        let user = await User.findByIdAndUpdate(id, data)
        user = await User.findById(id)
        return user
    } catch (error) {
        console.error('Error updating user:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

// remove a note by its ID
const remove = async (id) => {
    try {
        return await User.findByIdAndDelete(id)
    } catch (err) {
        throw err
    }
}

// find user by email
const getUserByEmail = async (email) => {
    try {
        const userdata = await User.findOne({ email: email })

        if (!userdata) {
            // User not found
            return null
        }
        return userdata
    } catch (error) {
        console.error('Error getting user:', error.message)
        throw new Error('Internal Server Error')
    }
}
//comparePassword
const comparePassword = async (password, hashedPassword) => {
    try {
        console.log('password', password)
        console.log('hashedPassword', hashedPassword)
        const isMatch = await bcrypt.compare(password, hashedPassword)
        console.log('isMatch', isMatch)
        return isMatch
    } catch (error) {
        console.error('Error comparing password:', error.message)
        throw new Error('Internal Server Error')
    }
}

module.exports = {
    create,
    update,
    getAllUsers,
    remove,
    comparePassword,
    getUserByEmail,
}
