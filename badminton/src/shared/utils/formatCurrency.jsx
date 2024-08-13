import React from 'react'

export const formatCurrency= (amountMoney) => {
    return amountMoney.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND"
    })
}
