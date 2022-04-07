let actions = {
    changeCartAddNum(context, payload) {
        context.commit('changeCartAddNum', payload)
    },
    changeCartRemoveNum(context, payload) {
        context.commit('changeCartRemoveNum', payload)
    }
}

export default actions