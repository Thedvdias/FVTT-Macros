function wallUpdate(data) {
  canvas.walls.controlled.map(wall => wall.update(data));
}

let dialogEditor = new Dialog({
  title: `Wall Type Picker`,
  content: `Pick the type of wall to change the selected wall to.`,
  buttons: {
    blockMove: {
      label: `Regular Wall`,
      callback: () => {
        wallUpdate({"move": CONST.WALL_MOVEMENT_TYPES.NORMAL});
		wallUpdate({"sense": CONST.WALL_SENSE_TYPES.NORMAL});
		wallUpdate({"door": CONST.WALL_DOOR_TYPES.NONE});
        dialogEditor.render(true);
      }
    },
    allowMove: {
      label: `Terrain Wall`,
      callback: () => {
        wallUpdate({"move": CONST.WALL_MOVEMENT_TYPES.NORMAL});
		wallUpdate({"sense": CONST.WALL_SENSE_TYPES.LIMITED});
		wallUpdate({"door": CONST.WALL_DOOR_TYPES.NONE});
        dialogEditor.render(true);
      }
    },
    blockPer: {
      label: `Invisible Wall`,
      callback: () => {
        wallUpdate({"move": CONST.WALL_MOVEMENT_TYPES.NORMAL});
		wallUpdate({"sense": CONST.WALL_SENSE_TYPES.NONE});
		wallUpdate({"door": CONST.WALL_DOOR_TYPES.NONE});
        dialogEditor.render(true);
      }
    },
    limitPer: {
      label: `Ethereal Wall`,
      callback: () => {
        wallUpdate({"move": CONST.WALL_MOVEMENT_TYPES.NONE});
		wallUpdate({"sense": CONST.WALL_SENSE_TYPES.NORMAL});
		wallUpdate({"door": CONST.WALL_DOOR_TYPES.NONE});
        dialogEditor.render(true);
      }
    },
    allowPer: {
      label: `Door`,
      callback: () => {
        wallUpdate({"move": CONST.WALL_MOVEMENT_TYPES.NORMAL});
		wallUpdate({"sense": CONST.WALL_SENSE_TYPES.NORMAL});
		wallUpdate({"door": CONST.WALL_DOOR_TYPES.DOOR});
        dialogEditor.render(true);
      }
    },
    isDoor: {
      label: `Secret Door`,
      callback: () => {
        wallUpdate({"move": CONST.WALL_MOVEMENT_TYPES.NORMAL});
		wallUpdate({"sense": CONST.WALL_SENSE_TYPES.NORMAL});
		wallUpdate({"door": CONST.WALL_DOOR_TYPES.SECRET});
        dialogEditor.render(true);
      }
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Close`
    },
  },
  default: "close",
  close: () => {}
});

dialogEditor.render(true)