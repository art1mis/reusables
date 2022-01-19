export default function isPlainObject(item) {
  return (
    item !== null &&
    typeof item === "object" &&
    // TS thinks `item is possibly null` even though this was our first guard.
    // @ts-expect-error
    item.constructor === Object
  );
}
