const isObjEqual = (objA: any, objB: any): boolean => {
  if (objA === objB) {
    return true;
  }

  if (objA === null || objA === undefined || objB === null || objB === undefined) {
    return objA === objB;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    return objA.length === objB.length && objA.every((value, index) => isObjEqual(value, objB[index]));
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  return keysA.every(key => keysB.includes(key) && isObjEqual(objA[key], objB[key]));
};

export default isObjEqual;
