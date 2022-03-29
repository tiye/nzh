import getNzhObjByLang from "./src/autoGet";
import s from "./src/langs/hk_s";
import b from "./src/langs/hk_b";
var langs = {
  s: s,
  b: b,
};
export default getNzhObjByLang(langs.s, langs.b);
