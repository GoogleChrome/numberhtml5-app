var soundChart = new TimeChart({range: [0, 180], title: 'Sound sensor'});
var lightChart = new TimeChart({range: [0, 1023], title: 'Light sensor'});
var proximityChart = new TimeChart({range: [0, 255], title: 'Proximity sensor'});

var servo1Chart = new AngleChart({title: 'Servo 1'});
var servo2Chart = new AngleChart({title: 'Servo 2'});
var servo3Chart = new AngleChart({title: 'Servo 3'});

var switchChart = new SwitchChart({title: 'Switch'});


var robot = new HTML5Robot();
//var robot = new RobotMock();

robot.addSensorListener('sound', function(data) {
  soundChart.addValue(data.value);
});
robot.addSensorListener('light', function(data) {
  lightChart.addValue(data.value);
});
robot.addSensorListener('proximity', function(data) {
  proximityChart.addValue(data.value);
});

robot.addSensorListener('servo1', function(data) {
  servo1Chart.setCurrentSpeed(data.value);
});
robot.addSensorListener('servo2', function(data) {
  servo2Chart.setCurrentSpeed(data.value);
});
robot.addSensorListener('servo3', function(data) {
  servo3Chart.setCurrentSpeed(data.value);
});

robot.addSensorListener('switch', function(data) {
  switchChart.setState(data.value); 
});
