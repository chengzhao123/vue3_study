let mutations = {
    changeCartAddNum: function (state, payload) {
        state.count += 1
        let res = state.shopCart.some((item) => {
            return item.index == payload.index
        })
        if (res) {
            state.shopCart.forEach((item, index) => {
                if (item.index == payload.index) {
                    state.shopCart[index].count += 1
                }
            })
        } else {
            state.shopCart.push({
                name: payload.name,
                index: payload.index,
                count: 1
            })
        }
    },
    changeCartRemoveNum: function (state, payload) {
        if(state.count > 0) {
            state.count -= 1
        } else {
            state.count = 0
        }
        let res = state.shopCart.some((item) => {
            return item.index == payload.index
        })
        if (res) {
            state.shopCart.forEach((item, index) => {
                if (item.index == payload.index) {
                    if(item.count > 0) {
                        state.shopCart[index].count -= 1
                    } else {
                        state.shopCart[index].count = 0
                    }
                }
            })
        } else {
            state.shopCart.push({
                name: payload.name,
                index: payload.index,
                count: 1
            })
        }
    }
}

export default mutations