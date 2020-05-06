class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.role = "Employee"; //Default
        this.id = id;
        this.email = email;
    }

    getRole = function() {
        return this.role;
    }

    getId = function() {
        return this.id;
    }

    getName = function() {
        return this.name;
    }

    getEmail = function() {
        return this.email;
    }
}

module.exports = Employee;