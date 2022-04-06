let actions = {
    changeCartNum(context, payload) {
        if(payload !=0) {
            context.commit('changeCartNum', payload)
        }
    }
}

export default actions