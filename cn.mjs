import getNzhObjByLang from "./src/autoGet.mjs";
import s from "./src/langs/cn_s.mjs";
import b from "./src/langs/cn_b.mjs";
var langs = {
  s: s,
  b: b,
};
export default getNzhObjByLang(langs.s, langs.b);
