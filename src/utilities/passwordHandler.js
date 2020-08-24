import bcrypt from 'bcryptjs';

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const comparePassword = async function (password, password_entered) {
    return bcrypt.compare(password_entered, password);
};

module.exports = {
    encryptPassword,
    comparePassword
}