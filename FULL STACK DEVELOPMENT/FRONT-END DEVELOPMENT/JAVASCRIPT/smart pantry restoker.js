const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData){
  const seenSkus = new Set();
  const parsed = [];
  for(const item of rawData){
    const[sku, name, qty, expires, zone] = item.split("|");
    if(seenSkus.has(sku)){
      continue;
    }

    seenSkus.add(sku);

    parsed.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone: zone || "general"
    });
  }

  return parsed;
}

function planRestock(pantry, shipment){
  return shipment.map(item => {
    let type;
    if(item.qty <= 0){
      type = "discard";
    } else if(pantry.some(pantryItem => pantryItem.sku === item.sku)){
      type = "restock"
    } else {
      type = "donate";
    }

    return {type, item};
  });
}

function groupByZone(actions){
  return actions.reduce((acc, action) => {
    const zone = action.item.zone;

    if(!acc[zone]){
      acc[zone] = [];
    }

    acc[zone].push(action);
    return acc;
  }, {});
}

function clonePantry(pantry){
  return pantry.map(item => ({...item}));
}

const clonedPantry = clonePantry(pantry);

const parsedShipment = parseShipment(rawData);

const actions = planRestock(clonedPantry, parsedShipment);

const groupedActions = groupByZone(actions);

console.log(groupedActions);
