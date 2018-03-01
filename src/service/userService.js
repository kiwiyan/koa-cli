// service文件的方法用于复用，方便处理数据
async function getUserById(id) {
    const user = {
        x1: {
            name: 'jerry',
            hobby: 'eat on the sly'
        },
        x2: {
            name: 'tom',
            hobby: 'catch mice'
        }
    }
    return user(id);
}

module.exports = {
    getUserById
}