export const HELPER_OUTLINE = false;
export const CELL_SIZE = 16;
export const SPRITE_SHEET_SRC = "/assets/ciabattas-revenge-sprites.png";
export const PIXEL_SIZE = 2;

export const BODY_SKINS = {
  NORMAL: "NORMAL",
  WATER: "WATER",
  ICE: "ICE",
  CONVEYOR: "CONVEYOR",
  FIRE: "FIRE",
  TELEPORT: "TELEPORT",
  SCARED: "SCARED",
};

export const HERO_RUN_1 = "HERO_RUN_1";
export const HERO_RUN_2 = "HERO_RUN_2";

export const PLACEMENT_TYPES = {
  HERO: "HERO",
  GOAL: "GOAL",
} as const;

export const DIRECTIONS = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;

export const DIRECTION_UPDATE_MAP = {
  [DIRECTIONS.UP]: { x: 0, y: -1 },
  [DIRECTIONS.DOWN]: { x: 0, y: 1 },
  [DIRECTIONS.LEFT]: { x: -1, y: 0 },
  [DIRECTIONS.RIGHT]: { x: 1, y: 0 },
} as const;

export const LEVEL_THEMES = {
  YELLOW: "YELLOW",
  BLUE: "BLUE",
  GREEN: "GREEN",
  PINK: "PINK",
  GRAY: "GRAY",
} as const;

export const THEME_BACKGROUNDS = {
  [LEVEL_THEMES.YELLOW]: "#2f2808",
  [LEVEL_THEMES.BLUE]: "#3d4c67",
  [LEVEL_THEMES.GREEN]: "#2f2808",
  [LEVEL_THEMES.PINK]: "#673d5e",
  [LEVEL_THEMES.GRAY]: "#96a1c7",
} as const;

export const THEME_TILES_MAP = {
  [LEVEL_THEMES.YELLOW]: {
    FLOOR: "1x1",
    TOP: "1x0",
    LEFT: "0x1",
    RIGHT: "2x1",
    BOTTOM: "1x2",
    WALL: "0x2",
  },
  [LEVEL_THEMES.BLUE]: {
    FLOOR: "4x1",
    TOP: "4x0",
    LEFT: "3x1",
    RIGHT: "5x1",
    BOTTOM: "4x2",
    WALL: "3x2",
  },
  [LEVEL_THEMES.GREEN]: {
    FLOOR: "7x1",
    TOP: "7x0",
    LEFT: "6x1",
    RIGHT: "8x1",
    BOTTOM: "7x2",
    WALL: "6x2",
  },
  [LEVEL_THEMES.PINK]: {
    FLOOR: "10x1",
    TOP: "10x0",
    LEFT: "9x1",
    RIGHT: "11x1",
    BOTTOM: "10x2",
    WALL: "9x2",
  },
  [LEVEL_THEMES.GRAY]: {
    FLOOR: "13x1",
    TOP: "13x0",
    LEFT: "12x1",
    RIGHT: "14x1",
    BOTTOM: "13x2",
    WALL: "12x2",
  },
} as const;

export const TILES = {
  // Basics
  SHADOW: "1x3",
  FLOUR: "2x3",
  FIRE_PICKUP: "3x3",
  ICE_PICKUP: "4x3",
  WATER_PICKUP: "5x3",
  BULLET_PICKUP: "4x9",
  BULLET: "3x9",

  // Icons
  CONTINUE_BUTTON: "7x3",
  EDIT_BUTTON: "8x3",
  RESUME_BUTTON: "9x3",
  RESTART_BUTTON: "10x3",
  MAP_BUTTON: "11x3",
  CLOCK: "12x3",
  SETTINGS: "13x3",

  // Locks and Keys
  BLUE_LOCK: "0x4",
  BLUE_KEY: "1x4",
  GREEN_LOCK: "2x4",
  GREEN_KEY: "3x4",
  UNLOCKED_LOCK: "4x4",

  // Water
  WATER1: "0x5",
  WATER2: "1x5",

  // Ice
  ICE: "0x6",
  ICE_TOP_LEFT: "1x6",
  ICE_TOP_RIGHT: "2x6",
  ICE_BOTTOM_LEFT: "3x6",
  ICE_BOTTOM_RIGHT: "4x6",

  // Fire
  FIRE1: "0x7",
  FIRE2: "1x7",
  FIRE3: "2x7",

  // Conveyors
  CONVEYOR_DOWN: "0x8",
  CONVEYOR_UP: "1x8",
  CONVEYOR_RIGHT: "2x8",
  CONVEYOR_LEFT: "3x8",

  // Other Tiles
  BULLET_DROPBOX: "2x9",

  // Spawns
  ENEMY_LEFT_SPAWN: "4x8",
  ENEMY_RIGHT_SPAWN: "5x8",
  ENEMY_UP_SPAWN: "6x8",
  ENEMY_DOWN_SPAWN: "7x8",
  ENEMY_FLYING_LEFT_SPAWN: "8x8",
  ENEMY_FLYING_RIGHT_SPAWN: "9x8",
  ENEMY_FLYING_UP_SPAWN: "10x8",
  ENEMY_FLYING_DOWN_SPAWN: "11x8",
  ENEMY_ROAMING_SPAWN: "12x8",
  HERO_SPAWN: "13x8",
  CIABATTA_SPAWN: "14x8",

  //Goal
  GOAL_DISABLED: "0x9",
  GOAL_ENABLED: "1x9",

  //Switches, Other
  PURPLE_BUTTON: "0x10",
  PURPLE_DOOR_OUTLINE: "1x10",
  PURPLE_DOOR_SOLID: "2x10",
  TELEPORT1: "3x10",
  TELEPORT2: "4x10",
  TELEPORT3: "5x10",
  TELEPORT4: "6x10",

  THIEF: "7x10",
  WARNING: "8x10",

  //Particle Dusty explosion
  PARTICLE_1: "5x9",
  PARTICLE_2: "6x9",
  PARTICLE_3: "7x9",
  PARTICLE_4: "8x9",
  PARTICLE_5: "9x9",
  PARTICLE_6: "10x9",
  PARTICLE_7: "11x9",
  PARTICLE_8: "12x9",
  PARTICLE_9: "13x9",

  //Characters
  HERO_LEFT: "0x11",
  HERO_RIGHT: "2x11",
  ENEMY_LEFT: "4x11",
  ENEMY_RIGHT: "6x11",
  ENEMY_ROAMING: "8x11",
  ENEMY_FLYING_LEFT: "10x11",
  ENEMY_FLYING_RIGHT: "12x11",
  HERO_HOP_LEFT: "14x11",
  HERO_HOP_RIGHT: "16x11",

  //Characters Row 2
  HERO_WATER_LEFT: "0x13",
  HERO_WATER_RIGHT: "2x13",
  HERO_ICE_LEFT: "4x13",
  HERO_ICE_RIGHT: "6x13",
  HERO_CONVEYOR_LEFT: "8x13",
  HERO_CONVEYOR_RIGHT: "10x13",
  HERO_FIRE_LEFT: "12x13",
  HERO_FIRE_RIGHT: "14x13",

  //Characters Row 3
  HERO_DEATH_LEFT: "0x15",
  HERO_DEATH_RIGHT: "2x15",
  HERO_TELEPORT_LEFT: "4x15",
  HERO_TELEPORT_RIGHT: "6x15",
  HERO_EDITING_LEFT: "8x15",
  HERO_EDITING_RIGHT: "10x15",

  //Characters Row 4
  HERO_RUN_1_LEFT: "0x17",
  HERO_RUN_1_RIGHT: "2x17",
  HERO_RUN_2_LEFT: "4x17",
  HERO_RUN_2_RIGHT: "6x17",

  // Ciabatta
  CIABATTA1: "5x4",
  CIABATTA2: "8x4",
  CIABATTA_PAIN: "11x4",
  CIABATTA_DEAD: "14x4",
  CIABATTA_BLAST: "6x3",
} as const;
