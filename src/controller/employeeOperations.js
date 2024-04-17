const onBeforeEmployeeCreate = async (req) => {
    console.log(req);
    console.log("Before Event is triggered");
    //here calculating the age in dates right...
    const { DOB } = req.data;
    const iAge = _getAge(DOB);
    console.log(`iAge is: ${iAge}`);

    //To store the value into POST details...
    console.log(req.data);
    const DATE = _getAge(req.data.DOB);
    req.data.Age = DATE;

    //this is function was using in BEFOREEVENT if you need to check the eligibility age and also you can add any error
    /*if (iAge < 40){
        req.error({
            code: 400,
            msg: "Ohh Sorry your not eligible for joining got it..."
        });
    }*/
}
//This is the _getAge() is for calculating the age by today to past date & which will executed along with BEFOREEVENT...
const _getAge = (sDate) => {
    const oToday = new Date(),
        oBirthdate = new Date(sDate);
    const age = oToday.getFullYear() - oBirthdate.getFullYear();
    return age;
}

const onAfterEmployeeCreate = async(req) => {
  console.log(req);
    console.log("After Event is triggered");
}

module.exports = {
    onBeforeEmployeeCreate,
    onAfterEmployeeCreate
}