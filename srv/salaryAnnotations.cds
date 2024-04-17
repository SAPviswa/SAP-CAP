using EmployeeService from './Employee-srv';

annotate EmployeeService.Salary with {
    costToCompany @title: '{i18n>costToCompany}';
    employeePf    @title: '{i18n>employeePf}';
    employerPf    @title: '{i18n>employerPf}';
    nps           @title: '{i18n>nps}';
    vpf           @title: '{i18n>vpf}';
};