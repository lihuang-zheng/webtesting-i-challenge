module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let enhancedItem = item.enhancement + 1;
  if (item.enhancement >= 20) {
    return { ...item };
  } else {
    return { ...item, enhancement: enhancedItem };
  }
}

function fail(item) {
  let unEnhancedItem = item.enhancement - 1;
  let durabilityDec5 = item.durability - 5;
  let durabilityDec10 = item.durability - 10;

  if (item.enhancement < 15) {
    return { ...item, durability: durabilityDec5 };
  } else {
    if (item.enhancement <= 16) {
      return { ...item, durability: durabilityDec10 };
    } else {
      return {
        ...item,
        durability: durabilityDec10,
        enhancement: unEnhancedItem
      };
    }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  const initialName = item.name;
  if (item.enhancement == 0) {
    return item;
  } else {
    return {
      ...item,
      name: `[+${item.enhancement}]${initialName}`
    };
  }
}
