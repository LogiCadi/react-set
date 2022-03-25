import _ from "lodash";

export default function $set<T extends object>(
  state: T,
  exec: (s: T) => void
): T {
  const s = _.cloneDeep(state);
  exec(s);
  return s;
}
