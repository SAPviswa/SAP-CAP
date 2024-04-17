const cds = require("@sap/cds");
//const { onBeforeEmployeeCreate, onAfterEmployeeCreate } = require("./src/controller/employeeOperations");

module.exports = cds.service.impl(async (srv) => {
    srv.before("CREATE", "Employee",
    async(req)=>{
        console.log(req.data);
    } )
    srv.after("CREATE", "Employee", async(req)=>{
        console.log(req);
    })
});