var organisersController = {
    organisers: [], 
    getOrganiser: function() {
        return this.organisers; //array
    },
    addOrganiser: function(newOganiser) {
        this.organisers.push(newOganiser);
    }
    
};

module.exports=organisersController;
