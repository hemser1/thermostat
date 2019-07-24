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

      it("decrease temperature by 1", function() {
        thermostat.decrease();
        expect(thermostat.getCurrentTemperature()).toEqual(19)
      });
      it('has a minimum of 10 degrees', function() {
        for (var i=0; i< 11; i++) {
          thermostat.decrease();
        };
        expect(thermostat.getCurrentTemperature()).toEqual(10);
      });
      it('has a power saving mode on by default', function(){
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
      });
      it('can switch PSM back off', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
      });
      it('can switch PSM back on', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
      });
  });








});
