'use strict';

describe("Thermostat", function() {
  var thermostat;

  describe("#defaultTemperature", function() {
    beforeEach(function() {
      thermostat = new Thermostat();
    });
    it("defaults temperature to 20 degrees", function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    });
  });





});
