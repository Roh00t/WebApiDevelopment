var dealershipController = {

    dealership: [],
    getDealership: function() {
        return this.dealership;
    },
    addDealership: function(newDealership) {
        this.dealership.push(newDealership);
    }
};

module.exports=dealershipController;