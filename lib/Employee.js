class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.role = "Employee"; //Default
        this.id = id;
        this.email = email;
    }

    getRole() {
        return this.role;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;