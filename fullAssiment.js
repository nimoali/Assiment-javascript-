function calculateAdjustedTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    let adjustedTarget = 0;
    let daysExcludingFridays = 0;
    let daysWorkedExcludingFridays = 0;
    let currentDate = new Date(start);

    //daysExcludingFridays
    
    let year = start.getFullYear();
    let month = end.getMonth(); // Get month from the end date
    let totalDays = new Date(year, month + 1, 0).getDate(); // Total days in the month
    let fridays = 0;
  
   


    ///calculating the number of days
    while (currentDate <= end) {
      if (currentDate.getDay() !== 5) {
        adjustedTarget += totalAnnualTarget / 365;
        daysWorkedExcludingFridays++;
      }
      daysExcludingFridays++;
      currentDate.setDate(currentDate.getDate() + 1);
    }


    ///claculate months days without friday
    for (let i = 1; i <= totalDays; i++) {
        let currentDate = new Date(year, month, i); // Date of the current iteration
        if (currentDate.getDay() === 5) { // Friday is 5th day of the week
            fridays++;
        }
    }
    //months day mminus fridays
    let daysexcludingf= totalDays - fridays;
  
    //adjustedTarget = Math.round(adjustedTarget * 112) / 100;

    //month target wax ka imaanee totaltsrget ugeeybi inta maalmaha sanadka marka laga reebo jimco 
    //then ku dhufuo maalmaha shaqeyey 
    let monthlyTar=(totalAnnualTarget/324) *daysWorkedExcludingFridays
  
    return {
      //daysExcludingFridays: [daysExcludingFridays],
      daysExcludingFridays: [daysexcludingf],
      daysWorkedExcludingFridays: [daysWorkedExcludingFridays],
      monthlyTarget: [monthlyTar],
      totalTarget: monthlyTar,
    };
  }


    // out put
    console.log(
        calculateAdjustedTarget('2024-01-01', '2024-01-06', 5220)
      );