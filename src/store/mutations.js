let mutations = {
    changeCartAddNum: function (state, payload) {
        state.count += 1
        let res = state.shopCart.some((item) => {
            return item.shopItemIndex == payload.shopItemIndex
        })
        if (res) {
            state.shopCart.forEach((item, index) => {
                if (item.shopItemIndex == payload.shopItemIndex) {
                    state.shopCart[index].shopCount += 1
                }
            })
        } else {
            state.cartCount += 1
            state.shopCart.push({
                shopItemIndex: payload.shopItemIndex,
                shopItemTitle: payload.shopItemTitle,
                shopItemTip: payload.shopItemTip,
                shopItemPrice: payload.shopItemPrice,
                shopCount: 1
            })
        }
    },
    changeCartRemoveNum: function (state, payload) {
        if (state.count > 1) {
            state.count -= 1
        } else {
            state.count = 0
        }
        state.shopCart.map((item, index) => {
            if (item.shopItemIndex == payload.shopItemIndex) {
                if (item.shopCount > 1) {
                    state.shopCart[index].shopCount -= 1
                } else {
                    state.shopCart.splice(index, 1)
                    if (state.cartCount > 1) {
                        state.cartCount -= 1
                    } else {
                        state.cartCount = 0
                    }
                }
            }
        })
    }
}

export default mutations