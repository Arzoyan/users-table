/**
 *  * @param {redax state} state 
 * create new format user  object ,
 * return user
 */
export const defaultValue = (state) => {
    let result = [];
    let data = state.home.user;
    for (let key in data) {
        result.push({
            "name": [key],
            "value": data[key]
        })
    }
    return result
}

/**
 * @param {redax state} state 
 * create new  img object format  ,
 * return img object
 */
export const fillImg = (state) => {

    let formatImgData = [
        {
            uid: state.home.user?.photo,
            name: "img",
            status: 'done',
            url: state.home.user?.photo,
            thumbUrl: state.home.user?.photo,
        }
    ]

    return state.home.user ? formatImgData : []
}