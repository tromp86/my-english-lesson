const allWord50 = [
  { be: "бути" },
  { do : "робити" },
  { to: "до" },
  { of: "з, про" },
  { for: "для" },
  { it: "це" },
  { with: "з, із" },
  { as: "як" },
  { at: "на, у" },
  { near: "поруч" },
  { behind: "позаду" },
  { from: "з, від" },
  { or: "або" },
  { will: "буде" },
  { there: "там" },
  { out: "зовні, поза" },
  { who: "хто" },
  { which: "який" },
  { can: "можу" },
];

const allWord = [
  { difference: "різниця" },
  { confident: "впевнений" },
  { available: "доступний" },
  { changing: "змінюється" },
  { successful: "успішний" },
  { keep: "зберігати" },
  { believe: "вірити" },
  { matter: "має значення" },
  { already: "вже" },
  { through: "крізь" },
  { allows: "дозволяє" },
  { sets: "встановлює" },
  { fits: "підходить" },
  { explains: "пояснює" },
  { demands: "вимагати" },
  { relationships: "стосунки" },
  { assumes: "припускає" },
  { tells: "розповідає" },
  { spend: "витрачати" },
  { appear: "з'являтись" },
  { approximately: "приблизно" },
  { almost: "майже" },
  { responsible: "відповідальний" },
  { frequent: "часто" },
  { everyone: "усі" },
  { trip: "подорож" },
  { among: "серед" },
  { neighborhood: "околиці" },
  { average: "середній" },
  { majority: "більшість" },
  { half: "половина" },
  { example: "приклад" },
  { explanation: "пояснення" },
  { preparation: "підготовка" },
  { difficulties: "труднощі, складність" },
  { meaning: "зміст, сенс" },
  { agree: "погоджуватись" },
  { feels: "почуватися" },
  { wishes: "бажання" },
  { tries: "коштувати" },
  { either: "також, теж" },
  { sad: "сумно" },
  { major: "спеціальність" },
  { nearby: "неподалік" },
  { especially: "особливий" },
  { crowded: "переповнений" },
  { often: "часто" },
  { adjectives: "прикметник" },
  { still: "досі" },
  { always: "завжди" },
  { must: "обов'язково" },
];

const reWord = [
  { few: "декілька" },
  { "to break off": "відокремити, відламати" },
  { "to approach": "наближатися" },
  { "to match": "відповідати підходити" },
  { "to consome": "споживати, поглинати" },
  { "to find out": "зясовувати" },
  { "to earn": "заробляти" },
  { cupboard: "кухонна шафа" },
  { "to survey": "опитувати, оглядати" },
  { "to hold out": "триматися до кінця" },
  { "to aford": "дозво. фінансово" },
  { "to go over": "повторювати" },
  { "to lose": "втрачати, програвати" },
  { could: "міг, може бути" },
  { "to extract": "витягувати, добувати" },
  { forego: "відмовлятися" },
  { change: "здача" },
  { contest: "конкурс, змагання" },
  { "to crop": "обрізати, підстригти" },
  { loose: "вільний" },
  { influence: "впливати" },
  { wide: "широкий" },
  { "to mind": "заперечувати, слухатися" },
  { "to persuade": "переконувати" },
  { representative: "представник" },
  { source: "джерело, початковий" },
  { "to supplement": "доповнювати" },
  { "to owe": "заборгувати" },
  { "to blow out": "підірвати, гасити" },
  { interweave: "переплітати" },
];

const allWordPhrases = [
  { "let's go": "ходімо" },
  { "let's do it": "зробимо це" },
  { "come here": "підійди сюди" },
  { "follow me": "йди за мною" },
  { "keep going": "продовжуй" },
  { "wait here": "почикай тут" },
  { "stay still": "залишся" },
  { "try it": "спробуй це" },
  { "give it to me": "дайте це мені" },
  { "be quiet": "тихо" },
  { "ask hime": "запитай його" },
  { "let go it": "відпусти це" },
  { "leave it here": "залиши це тут" },
  { "put it here": "постав це тут" },
  { "don't forget": "не забудь" },
  { "slow down": "повільніше" },
  { "can't complain": "не скаржусь" },
  { "see if I care": "мене це не хвилює" },
  { "I do not care": "мені всеодно" },
  { "I did it": "я зробив це" },
  { "It's up to you": "тобі вирішувати" },
  { "I'd like": "меніб хотілось" },
];

const allWordQuestion = [
  { "are you kidding?": "жартуєш?" },
  { "is he comming?": "він йде?" },
  { "are you getting anything?": "ти береш щось?" },
  { "you bring something?": "ти приносиш щось?" },
  { "is it getting better?": "це стає кращим?" },
  { "what are you wearing?": "у що ти одягнений?" },
  { "could I have?": "чи можна мені?" },
  { "what do you do for a living?": "Чим ви займаєтесь?" },
];

// const vehicle = [
//   { brake: "гальма" },
//   { tire: "шина" },
//   { alternator: "генератор" },
//   { suspension: "підвіска" },
//   { exhaustSystem: "вихлопна система" },
//   { headlight: "фара" },
//   { taillight: "заднє світло" },
//   { windshield: "лобове скло" },
//   { wiper: "двірник" },
//   { fuelTank: "паливний бак" },
//   { sparkPlug: "свічка запалювання" },
//   { ignitionCoil: "котушка запалювання" },
//   { fuelPump: "паливний насос" },
//   { trunk: "багажник" },
// ];
// const house = [
//   { roof: "дах" },
//   { ceiling: "стеля" },
//   { chimney: "димар" },
//   { stairs: "сходи" },
//   { fence: "пагорб" },
//   { gate: "ворота" },
//   { pathway: "доріжка" },
//   { porch: "веранда" },
//   { attic: "горище" },
//   { basement: "підвал" },
//   { livingRoom: "вітальня" },
//   { bedroom: "спальня" },
//   { bathroom: "ванна кімната" },
//   { diningRoom: "їдальня" },
//   { study: "кабінет" },
//   { fireplace: "камін" },
//   { roofing: "покрівля" },
//   { plumbing: "сантехніка" },
//   { heating: "опалення" },
//   { skylight: "дахове вікно" },
//   { siding: "обшивка" },
//   { balustrade: "балюстрада" },
//   { shutter: "жалюзі" },
//   { awning: "навіс" },
//   { gutter: "сток" },
//   { lawn: "газон" },
//   { driveway: "під'їзд" },
//   { shed: "хлів" },
//   { laundryRoom: "пральня" },
//   { boiler: "котел" },
//   { alarmSystem: "сигналізація" },
//   { intercom: "домофон" },
// ];

const number = [
  { twelve: "12" },
  { thirteen: "13" },
  { fourteen: "14" },
  { fifteen: "15" },
  { sixteen: "16" },
  { seventeen: "17" },
  { eighteen: "18" },
  { nineteen: "19" },
  { twenty: "20" },
  { thirty: "30" },
  { forty: "40" },
  { fifty: "50" },
  { sixty: "60" },
  { seventy: "70" },
  { eighty: "80" },
  { ninety: "90" },
];

const months = [
  { January: "січень" },
  { February: "лютий" },
  { March: "березень" },
  { April: "квітень" },
  { May: "травень" },
  { June: "червень" },
  { July: "липень" },
  { August: "серпень" },
  { September: "вересень" },
  { October: "жовтень" },
  { November: "листопад" },
  { December: "грудень" },
];

const englishPrime = [
  { your : "твій" },
  { sell : "продавати" },
  { meet : "зустріти" },
  { walk : "ходити" },
  { carry : "тримати" },
  { "put on, in" : "поставити" },
  { "pick up" : "підняти" },
  { "talk (to)" : "говорити" },
  { take : "брати" },
  { tell : "розмова" },
  { fine : "добре" },
  { kind : "доброзичливий" },
  { great : "чудовий прикрасний" },
  { dry : "сухий" },
  { wet : "вологий" },
  { cute : "милий" },
  { boring : "нудний" },
  { messy : "брудний" },
  { neat : "охайний" },
  { difficult : "тяжкий" },
  { simple : "простий" },
  { weak : "слабкий" },
  { strong : "сильний" },
  { poor : "бідний" },
  { mean : "жадібний" },
  { rich : "багатий" },
  { quarterpast : "чверть 15%" },
  { only : "тільки" },
  { together : "разом" },
  { make : "готуватись" },
  { "tidy up" : "наводити поряд" },
  { dishes : "посуд" },
  { vacuum : "полососити" },
  { sweep : "підмітати" },
  { "take out the" : "виносити" },
  { "make a mess" : "смітити" },
  { "cut the grass" : "стригти траву" },
  { places : "місце" },
  { "outside the" : "зовні" },
  { "inside the" : "всередині" },
  { here : "тут" },
  { there : "там" },
  { abroad : "закордоном" },
  { that : "той" },
  { sum : "трохи, деякі" },
  { above: "над" },
  { under: "під" },
  { behind: "позаду" },
  { opposite: "навпроти" },
  { "in front": "перед" },
  { before: "перед" },
  { between: "між" },
  { "next to": "поруч з" },
  { "in the back of the": "ззаду" },
  { "in the front of the": "спереду" },
  { "in the middle of the": "по середині" },
  { "in the corner of the": "в кутку" },
];

const irregularVerbs = [
  {"come/came" : "кейм"},
  {"break/broke" : "ламати"},
  {"speak/spoke" : "говорити"},
  {"write/wrote" : "писати"},
  {"eat/ate" : "ейт"},
  {"sleep/slept" : "спати"},
  {"run/ran" : "рен"},
  {"sit/sat" : "сет"},
  {"read/read" : "ред"},
  {"have/had" : "мати"},
  {"get/got" : "отримати"},
  {"put/put" : "поставити"},
  {"go/went" : "йти"},
  {"come/came" : "приходити"},
  {"come/came" : "приходити"},
]

const SentencePattern1 = [
  {"Do you/we/they/your meet?" : "ви зустрічаєтеся"},
  {"Yes I meet" : "так я зустрічаюсь"},
  {"No I do not meet" : "ні я не зустрічаюсь"},
  {"You don't meet" : "ви не зустрічаєтесь"},
  {"Does he meetS" : "так він зустрічається"},
  {"No, he does not meetS" : "ні він не зустрічається"},
  {"She doesn't meet" : "вона не зустрічаєця"},
];

const SentencePattern2 = [
  {"Do you want/like to talk?" : "чи ти хочеш поговорити"},
  {"Yes I want/like to talk" : "так я хочу поговорити"},
  {"No, I don't want to talk?" : "ні я нехочу поговорити"},
  {"Does, he want to talk" : "ні я нехочу поговорити"},
  {"Yes, he wantS to talk" : "так він хоче поговорити"},
  {"No,he does't to talk" : "ні він не хоче поговорити"},
];
const SentencePattern3 = [
  {"Are you a/an doctor" : "Чи він лікар?"},
  {"Yes, I am a/an" : "так він лікар"},
  {"No, I am not a/an" : "ні він не лікар"},
  {"Is she a/an " : "чи вона є?"},
  {"No, she is not" : "ні вона не є"},
  {"Are you/we doctorS" : "чи вони є"},
  {"Yes you/we are doctorS" : "так вони є"},
  {"No you are not doctorS" : "ні вони не"},
  {"No we aren't doctorS" : "ні вони не"},
];
const SentencePattern4 = [
  {"Were you a/an?" : "чи був ти кимось?"},
  {"Yes, I was a/an pretty man" : "так я був чотким чуваком"},
  {"No, I was a/an " : "ні я не був кимось"},
  {"Was she/it a/an?" : "чи воно було чимось"},
  {"Yes, it was a/an " : "так це було чимось"},
  {"No, he was not a/an " : "ні це не було чимось"},
  {"Were you we/they?" : "були ми/ви комось"},
  {"Yes, we were doctorS" : "так ми були лікарями"},
  {"No, you/they was not " : "ні ви/вони не були комось"},
];
const SentencePattern5 = [
  {"When did you/I swim?" : "коли ти плавав"},
  {"When did she/they walked?" : "коли вони гуляли"},
  {"I swam last month" : "я плавав минулого місяця"},
  {"They waled in the spring " : "они гуляли весною"},
];
const SentencePattern6 = [
  {"Will you be a doctor?" : "ви будете лікарем?"},
  {"Yes, I will be a doctor" : "так, я буду лікарем"},
  {"No, I will not be a doc" : "ні, я не буду лік"},
  {"Will He rich?" : "чи буде він багатий?"},
  {"He won't rich" : "він не розбагатіє"},
];
const SentencePattern7 = [
  {"Where are you?" : "де ти?"},
  {"I am in the Canada" : "я в Канаді"},
  {"He is at the church" : "він в церкві"},
  {"Where are they?" : "де вони?"},
  {"There are at mountains" : "вони в горах"},
];
const SentencePattern8 = [
  {"Where were you?" : "де ви були?"},
  {"I was at the hospital" : "я в лікарні"},
  {"Where was he" : "де він був"},
  {"He was at school" : "він був у школі"},
  {"Where were they" : "де вони були"},
  {"They were at the library" : "вони були в бібл"},
];

export {
  allWord50,
  allWord,
  allWordPhrases,
  allWordQuestion,
  reWord,
  number,
  months,
  englishPrime,
  irregularVerbs,
  SentencePattern1,
  SentencePattern2,
  SentencePattern3,
  SentencePattern4,
  SentencePattern5,
  SentencePattern6,
  SentencePattern7,
  SentencePattern8
};
