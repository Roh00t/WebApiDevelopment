
var wardController = {
    beds: [
        {
            number: 1,
            status: "Available"
        },
        {
            number: 2,
            status: "Occupied"
        },
        {
            number: 3,
            status: "Available"
        },
        {
            number: 4,
            status: "Occupied"
        },
        {
            number: 5,
            status: "Available"
        }
    ],
    patients: [
        {
            name: "John",
            nric: "S1234567E",
            contactNum: 91234567,
            bedNum: 2
        },
        {
            name: "Tom",
            nric: "S9876542J",
            contactNum: 88220033,
            bedNum: 5
        }
    ],
    getBeds: function() {
        return this.beds;
    },
    //Update database and push
    addBeds: function(newBeds) {
        this.beds.push(newBeds);
    },
    //Patients
    getPatients: function() {
        return this.patients;
    },
    //Update database and push
    addPatients: function(newPatients) {
        this.beds[newPatients.bedNum-1].status = "Occupied"
        this.patients.push(newPatients);
    }
}
module.exports = wardController;