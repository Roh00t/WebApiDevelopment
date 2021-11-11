var BusBookingSystem = {
  buses : [
      //bcompany = name of the bus company
      //ddate = departure date
      //dtime = departure time
      //adate = arrival date
      //atime = arrival time
      //bstatus = Bus Journey Status
      //bvaccancy = shows the vacant seats on the bus
      {
          busID : "B01",
          details : {
            bcompany : "Singapore Bus Charter",
            destination : "Johor Bahru",
            ddate : "11-06-2021",
            dtime : "2200",
            adate : "12-06-2021",
            atime: "0245",
            bstatus: "Finished",
            bvacancy :"16"
          },
      },
      {
          busID : "B02",
          details : {
            bcompany : "Chitson Transport",
            destination : "Kuala Lumpur",
            ddate : "10-11-2021",
            dtime : "1240",
            adate : "10-11-2021",
            atime: "1945",
            bstatus: "Ongoing",
            bvacancy :"10"
          },
      },
      {
          busID : "B03",
          details : {
            bcompany : "Koh Bus Transport",
            destination : "Sabah",
            ddate : "21-11-2021",
            dtime : "2010",
            adate : "22-11-2021",
            atime: "0115",
            bstatus: "Scheduled",
            bvacancy :"9"
          },
      },
      {
          busID : "B04",
          details : {
            bcompany : "Tong Tar Transport",
            destination : "Malacca",
            ddate : "22-11-2021",
            dtime : "1205",
            adate : "25-11-2021",
            atime: "1135",
            bstatus: "Scheduled",
            bvacancy :"1"
          },
      }
  ],
  //Add new bus with busID, destination, departure date, departure time, arrival date, arrival time and bus status
  addbusBooking (bid, bc, dest, dd, dt, ad, at, bs, bv) {
      var newDataArray = {busID : bid,
          details : {
            bcompany : bc,
              destination : dest,
              ddate : dd,
              dtime : dt,
              adate : ad, 
              atime : at,
              bstatus : bs,
              bvacancy : bv,
          }
        };
        
        BusBookingSystem.buses.push(newDataArray);
        //Use moduleAssignedVariable.searchbusBookingBybusID() to check for new add bus!
  },

  //Remove existing bus with busID
  removebusBookingBybusID (busID) {
      delete BusBookingSystem.bus[busID];
      //Use console.log(BusBookingSystem.bus[busID]) to check for bus removed!
      //Would return undefined.
  },
  
  //Get busID with destination as search key
  searchbusBookingByDestination(dest) {
    BusBookingSystem.bus.forEach( function(items) {
          if(items.details.destination == dest) {
              console.log(items.busID);
          }
      });
  },

  //A sub function, can be used in multiple scenarios
  getbusBookingDetails(index) {
      var getdest, getbc, getddate, getdtime, getadate, getatime, getbstatus, getbvacancy;
      BusBookingSystem.buses.forEach( function(items) {
          if(items.busID == index) {
              getbc = items.details.bcompany;
              getdest = items.details.destination;
              getddate = items.details.ddate;
              getdtime = items.details.dtime;
              getadate = items.details.adate;
              getatime = items.details.atime;
              getbstatus = items.details.bstatus;
              getbvacancy = items.details.bvacancy;
          }
      });
      var newData =  {
          bcompany :getbc,
          destination : getdest,
          ddate : getddate,
          dtime : getdtime,
          adate : getadate, 
          atime : getatime,
          bstatus : getbstatus,
          bvacancy : getbvacancy,
      };
      return newData;
  },

  //Get all details of the bus by busID
  searchbusBookingBybusID(busID) {
      var dataInArray = this.getbusBookingDetails(busID);
      console.log("Bus " + busID + " by " + dataInArray.bcompany + " would be going towards " + dataInArray.destination + ", departing on " + dataInArray.ddate + " at " + dataInArray.dtime + " and arriving on " + dataInArray.adate + " at " + dataInArray.atime + ". It is currently " + dataInArray.bstatus + " and" + " the bus has " + dataInArray.bvacancy + " seats available to book.");
  },

  //Modify existing bus details by stating the category 
  //Categories : company, destination, ddate, dtime, adate, atime, bstatus, bvacancy
  modifybusBooking(busID, newData, dataCategory) {
    BusBookingSystem.bus.forEach( function(items) {
          if(items.busID == busID) {
              items.details[dataCategory] = newData;
              console.log(items.details);
          }
      });
  },
};

module.exports = BusBookingSystem;
