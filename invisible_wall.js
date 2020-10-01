function wallUpdate(data) {
  canvas.walls.controlled.map(wall => wall.update(data));
}

wallUpdate({"move": CONST.WALL_MOVEMENT_TYPES.NORMAL});
wallUpdate({"sense": CONST.WALL_SENSE_TYPES.NONE});
wallUpdate({"door": CONST.WALL_DOOR_TYPES.NONE});