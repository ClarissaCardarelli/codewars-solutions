// Bug Description
// Pilots have reported discrepancies in their flight logs after returning from interception missions. The travel distance logged in the logistics software does not match actual flight paths, potentially leading to incorrect fuel calculations and errors in planning of future missions.

// Steps to Reproduce
// Deploy an interceptor to engage a UFO.
// Upon its return, note the average speed (given in knots) and travel time (in minutes) reported by onboard instruments.
// Enter the values into the Logistics and Planning System.
// Expected result: The system should correctly compute the distance in kilometers.
// Actual result: The logged distance appears inaccurate.
// Impact
// If not fixed, this could cause interceptors to run out of fuel mid-mission, leaving Earth vulnerable to alien attacks. On the other hand, if the system overestimates travel distance, interceptors may be overfueled, making them heavier than necessary. This reduces maneuverability, increases takeoff time, and could put pilots at a disadvantage during high-speed engagements with alien craft.

// The Flight Operations team has requested an immediate fix.

// Task
// Investigate and fix the bug in the travel distance calculation function.

// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*

function travelDistance(avgSpeed, travelTime) {
  const KNOT_PER_KM_PER_HR = 1.852;
  const travelHours = travelTime / 60;
  const travelDistance = avgSpeed * travelHours;
  const travelKms = travelDistance * KNOT_PER_KM_PER_HR;

  return travelKms;
}
