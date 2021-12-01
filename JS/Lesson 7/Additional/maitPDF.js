function userCard(num) {
    return {
        data : {
            balance: 100,
            transactionLimit: 100,
            historyLogs: [],
            key: Math.round(Math.random() * (num - 1 + 1) + 1),
        },
        getCardOptions: function () {
            console.log(this.data);
        },

        putCredits: function (credit) {
            this.data.balance = this.data.balance + credit
            console.log(this.data.balance)
        },
        takeCredits: function (credit) {
            if (credit <= this.data.balance) {
                this.data.balance = this.data.balance - credit
                console.log(this.data.balance);
            } else {
                console.log('No money no honey');
            }
        },
        setTransactionLimit: function (newLimit) {
            this.transactionLimit = newLimit;
            console.log(this.transactionLimit);
        },
        transferCredits: function ()

    }
}

const user1WithCard = userCard(300)
user1WithCard.getCardOptions();
user1WithCard.putCredits(150)
user1WithCard.takeCredits(150)
user1WithCard.setTransactionLimit(5000)