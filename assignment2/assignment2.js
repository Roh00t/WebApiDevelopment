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
          bcompany : "Singapore Bus Charter",
          details : {
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
          bcompany : "Chitson Transport",
          details : {
              destination : "Kuala Lumpur",
              ddate : "14-09-2021",
              dtime : "1240",
              adate : "14-09-2021",
              atime: "1945",
              bstatus: "Ongoing",
              bvacancy :"10"
          },
      },
      {
          busID : "B03",
          bcompany : "Koh Bus Transport",
          details : {
              destination : "Sabah",
              ddate : "21-10-2021",
              dtime : "2010",
              adate : "22-10-2021",
              atime: "0115",
              bstatus: "Scheduled",
              bvacancy :"9"
          },
      },
      {
          busID : "B04",
          bcompany : "Tong Tar Transport",
          details : {
          destination : "Malacca",
              ddate : "22-10-2021",
              dtime : "1205",
              adate : "25-10-2021",
              atime: "1135",
              bstatus: "Scheduled",
              bvacancy :"1"
          },
      }
  ],
  //Add new bus with busID, destination, departure date, departure time, arrival date, arrival time and bus status
  addbusInfo (bid, bc, dest, dd, dt, ad, at, bs, bv) {
      var newDataArray = {busID : bid, bcompany : bc,
          details : {
              destination : dest,
              ddate : dd,
              dtime : dt,
              adate : ad, 
              atime : at,
              bstatus : bs,
              bvacancy : bv,
          }
        };
      busInfoSystem.bus.push(newDataArray);
      //Use moduleAssignedVariable.searchbusInfoBybusID() to check for new add bus!
  },

  //Remove existing bus with busID
  removebusInfoBybusID (busID) {
      delete busInfoSystem.bus[busID];
      //Use console.log(busInfoSystem.bus[busID]) to check for bus removed!
      //Would return undefined.
  },
  
  //Get busID with destination as search key
  searchbusInfoByDestination(dest) {
      busInfoSystem.bus.forEach( function(items) {
          if(items.details.destination == dest) {
              console.log(items.busID);
          }
      });
  },

  //A sub function, can be used in multiple scenarios
  getbusInfoDetails(index) {
      var getdest, getddate, getdtime, getadate, getatime, getbstatus, getbvacancy;
      busInfoSystem.bus.forEach( function(items) {
          if(items.busID == index) {
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
  searchbusInfoBybusID(busID) {
      var dataInArray = this.getbusInfoDetails(busID);
      console.log("bus " + busID + " by " + dataInArray.bcompany + " would be going towards " + dataInArray.destination + ", departing on " + dataInArray.ddate + " at" + dataInArray.dtime + "and arriving on " + dataInArray.adate + " at " + dataInArray.atime + ".It is currently " + dataInArray.bstatus + " and " + " the bus has " + dataInArray.bvacancy + " seats available to book.");
  },

  //Modify existing bus details by stating the category 
  //Categories : destination, ddate, dtime, adate, atime
  modifybusInfo(busID, newData, dataCategory) {
      busInfoSystem.bus.forEach( function(items) {
          if(items.busID == busID) {
              items.details[dataCategory] = newData;
              console.log(items.details);
          }
      });
  },
}



module.exports = BusBookingSystem;
  