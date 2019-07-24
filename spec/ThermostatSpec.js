'use strict';

describe("Thermostat", function() {
  var thermostat;

  describe("#temperature", function() {
    beforeEach(function() {
      thermostat = new Thermostat();
    });
    it("defaults temperature to 20 degrees", function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    });
    it("increase temperature by 1", function() {
      thermostat.increase();
      expect(thermostat.getCurrentTemperature()).toEqual(21)
    });
  });






});
