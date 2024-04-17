using EmployeeService from './Employee-srv';

annotate EmployeeService.Salary with @Capabilities : { 
    InsertRestrictions : {
        $Type : 'Capabilities.InsertRestrictionsType',
        Insertable : true
    },
    ReadRestrictions : {
        $Type : 'Capabilities.ReadRestrictionsType',
        Readable : true
    },
    DeleteRestrictions : {
        $Type : 'Capabilities.DeleteRestrictionsType',
        Deletable : false
    },
 };

annotate EmployeeService.Address with @Capabilities : { 
    InsertRestrictions : {
        $Type : 'Capabilities.InsertRestrictionsType',
        Insertable : false
    },
    ReadRestrictions : {
        $Type : 'Capabilities.ReadRestrictionsType',
        Readable: false
    },
 };


