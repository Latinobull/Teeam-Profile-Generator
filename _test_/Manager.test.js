const Manager = require("../Classes/Manager");

describe("Manager Class", () => {
  describe("Constructor Test", () => {
    it("Should display the Manager`s name", () => {
      const manager = new Manager("bob", 21, "bob@bob.com", 11234);
      expect(manager.name).toBe("bob");
    });

    it("Should display the Manager`s id", () => {
      const manager = new Manager("bob", 21, "bob@bob.com", 11234);
      expect(manager.id).toBe(21);
    });

    it("Should display Manager`s email", () => {
      const manager = new Manager("bob", 21, "bob@bob.com", 11234);
      expect(manager.email).toBe("bob@bob.com");
    });

    it("Should display Manager`s office number", () => {
      const manager = new Manager("bob", 21, "bob@bob.com", 11234);
      expect(manager.officeNum).toBe(11234);
    });
  });
  describe("Manager Function", () => {
    it("Should display office number through the function", () => {
      const manager = new Manager("bob", 21, "bob@bob.com", 11234);
      expect(manager.getOfficeNum()).toEqual(11234);
    });

    it("Should display the role of Manager", () => {
      const manager = new Manager();
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
