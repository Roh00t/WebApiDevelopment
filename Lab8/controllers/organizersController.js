var organizersController = {
    organizers: [],
    getOrganizers: function() {
        return this.organizers;
    },
    //Update database and push
    addOrganizer: function(newOrganizer) {
        this.organizers.push(newOrganizer);
    }
};

module.exports=organizersController;