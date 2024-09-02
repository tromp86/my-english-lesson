const allWord50 = [
  { who: "хто" },
  { what: "що" },
  { when: "коли" },
  { where: "де " },
  { why: "чому" },
  { which: "який" },
  { whose: "чий" },
  { whom: "кого" },
  { these: "ці [ðiːz]" },
  { those: "ті, та [ðoʊz]" },
  { be: "бути" },
  { do: "робити" },
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
  { here: "тут" },
  { there: "там" },
  { out: "зовні, поза" },
  { can: "можу" },
  { would: "б" },
  { how: "як" },
  { "after that": "після того як" },
  { then: "потім" },
  { "at first": "спочатку" },
  { finally: "нарешті" },
  { yet: "щось станеться незабаром" },
  { already: "вже, відбулось неочікуване" },
  { just: "щойно сталося" },
];

const allWord = [
  { difference: "різниця" },
  { confident: "впевнений" },
  { available: "доступний" },
  { changing: "змінюється" },
  { successful: "успішний" },
  { keep: "зберігати" },
  { matter: "має значення" },
  { through: "крізь" },
  { allows: "дозволяє" },
  { sets: "встановлює" },
  { fits: "підходить" },
  { explains: "пояснює" },
  { demands: "вимагати" },
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
  { adjectives: "прикметник" },
  { still: "досі" },
  { drawer: "ящик" },
  { employees: "співробітники" },
  { usefully: "корисно" },
  { really: "насправді" },
  { cheap: "дешевий" },
  { convenient: "зручний" },
  { necessary: "необхідний" },
  { possible: "можливий" },
  { sometimes: "іноді" },
  { circumstance: "обставина" },
  { convence: "переконати" },
  { such: "такий" },
  { rerely: "рідко" },
  { performance: "продуктивність" },
  { "to peel": "чистити" },
  { prefer: "віддавати перевагу" },
  { thick: "товстий" },
  { flabby: "вялий" },
  { reliable: "надійний" },
  { dyed: "пофарбований" },
  { someone: "хтось" },
  { suburbs: "передмістя" },
  { since: "жити з якогось року" },
  { cereal: "пластівці" },
  { describe: "описати" },
  { roundabout: "кільцева дорога" },
  { brave: "хоробрий" },
  { slowly: "повільно" },
  { immediately: "відразу" },
  { carefully: "обережно" },
  { terrible: "жахливо" },
  { appointment: "зустріч" },
  { headache: "[хедек] головний біль" },
  { "sore throat": "[соре фрут] біль в горлі" },
  { cough: "[коф] кашель" },
  { should: "слід" },
  { warm: "теплий" },
  { overtake: "обганяти" },
  { invitation: "запрошення" },
  { expect: "очікувати" },
  { "shouldn't ": "не повинен" },
  { reminds: "нагадує" },
  { goal: "мета" },
  { reason: "причина" },
  { suggest: "пропонувати" },
  { handle: "ручка" },
  { guilty: "винен" },
  { "no offense": "неображайся" },
  { worst: "найгірший" },
  { bother: "турбувати" },
  { definitely: "безумовно" },
  { appreciate: "цінувати" },
  { jealous: "ревнивий" },
  { spill: "розливати" },
  { proud: "пишатись" },
  { stuck: "застряг" },
  { lettuce: "салат" },
  { wipe: "витирати" },
  { borrow: "позичати" },
  { "tie up": "звязати" },
  { fasten: "закріпити" },
  { acceptable: "прийнятний" },
  { "it does": "це робить" },
  { chose: "обрав" },
  { embarrassed: "ніяково" },
  { polite: "вічливий" },
  { decisive: "вирішальний" },
  { attentive: "уважний" },
  { valid: "дійсний" },
  { significant: "значний" },
  { sufficient: "достатній" },
  { worrying: "хвилюватись" },
  { sly: "хитрий" },
  { sprang: "вистрибнув" },
  { burst: "лопнути" },
  { laid: "закладено" },
  { hang: "повісити" },
  { "put on": "одягати" },
  { "write down": "записувати" },
  { "throw out": "викидати" },
  { deserve: "заслуговувати" },
  { across: "через" },
  { faucet: "кран" },
  { taste: "смак" },
  { ordinary: "обикновенний" },
  { suddenly: "раптово" },
  { frustration: "розчарований" },
  { instead: "замість" },
  { encourage: "підбадьорити" },
  { aviod: "уникати" },
  { express: "виражати" },
  { delay: "затримка" },
  { heavy: "важкий" },
  { declare: "оголосити" },
  { breathe: "дихати" },
  { accuse: "звинувачувати" },
  { elect: "обирати" },
  { boil: "кипіти" },
  { differ: "відрізнятися" },
  { chased: "переслідуати" },
  { request: "запит" },
  { partisipate: "брати участь" },
  { obviously: "очевидно" },
  { either: "також" },
  { exact: "точний" },
  { strict: "строгий" },
  { sharp: "гострий" },
  { interaction: "перебивати" },
  { inspired: "натхненний" },
  { "artificial intelligence": "штучний інтелект" },
  { "consider": "розглянути" },
  { "essentials": "предмет необхідн" },
  { "according": "відповідно" },
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
  { crop: "обрізати, підстригти" },
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
  { "happen (to)": "трапилось з" },
  { "decide (to)": "вирішив з" },
  { even: "навіть" },
  { become: "ставати" },
  { "issues with": "ставати" },
  { relived: "полегшений" },
  { located: "розташований" },
  { observe: "спостерігати" },
  { "to get out": "виходити" },
  { excess: "надлишок" },
  { tear: "рвати" },
  { "to make out": "оформляти" },
  { "shed": "сарай" },

];
const irregularVerbs = [
  { "bring/brought": "[брот]приносити" },
  { "begin/began ": "починати, почався" },
  { "can/could ": "могти, вміти" },
  { "been able to": "вдалося" },
  { "catch/caught": "ловити, хватати" },
  { "choose/chose/chosen": "вибирати/вибрав/вибраний" },
  { "hide/hid/hidden": "сховати/сховав/схований" },
  { "fall/fell/fallen": "падати/падав/впав" },
  { "come/came": "[кейм] приход" },
  { "speak/spoke": "говорити, говорив" },

  { "eat/ate/eaten": "[ейт]] їсти, їв, зїв" },
  { "sleep/slept": "спати" },
  { "run/ran/run": "бігти/бігав/біг" },

  { "fall/fell/fallen": "падати, падав" },
  { "have/hes": "мати, мав" },
  { "work/worked": "робити, робив" },
  { "cook/cooked": "готую, готував" },

  { "cost/cost": "коштувати, коштувало" },
  { "find/found": "знаходити, знайшов" },
  { "feel/felt": "відчувати" },
  { "grow/grew/grown": "рости, вирощувати" },
 
  { "know/knew/known": "знаю, знав" },

  { "wake/woke/woken": "прокидатись" },

  { "stand/stood": "стояти, стояв" },

  { "wear/wore/worn": "носити одяг" },
  { "prepay/prepaid": "платити перед" },
  { "be/was(were)/been": "бути" },
  { "become/became/become": "ставати" },
  { "begin/began/begun": "починати" },
  { "bend/bent/bent": "гнути" },
  { "bet/bet/bet": "парі" },
  { "bite/bit/bitten": "кусати" },
  { "blow/blew/blown": "дути" },
  { "break/broke/broken": "ламати" },
  { "bring/brought/brought": "приносити" },
  { "build/built/built": "будувати" },
  { "burn/burnt/burnt": "горіти" },
  { "buy/bought/bought": "купувати" },
  { "catch/caught/caught": "ловити" },
  { "choose/chose/chosen": "вибирати" },
  { "come/came/come": "приходити" },
  { "cost/cost/cost": "коштувати" },
  { "cut/cut/cut": "різати" },
  { "deal/dealt/dealt": "мати справу" },
  { "dig/dug/dug": "копати" },
  { "do/did/done": "робити" },
  { "draw/drew/drawn": "малювати" },
  { "dream/dreamt/dreamt": "мріяти" },
  { "drink/drank/drunk": "пити" },
  { "drive/drove/driven": "водити" },
  { "eat/ate/eaten": "їсти" },
  { "fall/fell/fallen": "падати" },
  { "feed/fed/fed": "годувати" },
  { "feel/felt/felt": "відчувати" },
  { "fight/fought/fought": "битися" },
  { "find/found/found": "знаходити" },
  { "fly/flew/flown": "літати" },
  { "forget/forgot/forgotten": "забувати" },
  { "forgive/forgave/forgiven": "прощати" },
  { "freeze/froze/frozen": "замерзати" },
  { "get/got/got": "отримувати" },
  { "give/gave/given": "давати" },
  { "go/went/gone": "йти" },
  { "grow/grew/grown": "рости" },
  { "hang/hung/hung": "висіти" },
  { "have/had/had": "мати" },
  { "hear/heard/heard": "чути" },
  { "hide/hid/hidden": "ховати" },
  { "hit/hit/hit": "бити" },
  { "hold/held/held": "тримати" },
  { "hurt/hurt/hurt": "боліти" },
  { "keep/kept/kept": "тримати" },
  { "know/knew/known": "знати" },
  { "lay/laid/laid": "класти" },
  { "lead/led/led": "вести" },
  { "learn/learnt/learnt": "вчитися" },
  { "leave/left/left": "залишати" },
  { "lend/lent/lent": "позичати" },
  { "let/let/let": "дозволяти" },
  { "lie/lay/lain": "лежати" },
  { "lose/lost/lost": "губити" },
  { "make/made/made": "робити" },
  { "mean/meant/meant": "означати" },
  { "meet/met/met": "зустрічати" },
  { "pay/paid/paid": "платити" },
  { "put/put/put": "класти" },
  { "read/read/read": "читати" },
  { "ride/rode/ridden": "їздити" },
  { "ring/rang/rung": "дзвонити" },
  { "rise/rose/risen": "підніматися" },
  { "run/ran/run": "бігти" },
  { "say/said/said": "говорити" },
  { "see/saw/seen": "бачити" },
  { "sell/sold/sold": "продавати" },
  { "send/sent/sent": "посилати" },
  { "set/set/set": "встановлювати" },
  { "shake/shook/shaken": "трясти" },
  { "shine/shone/shone": "світити" },
  { "shoot/shot/shot": "стріляти" },
  { "show/showed/shown": "показувати" },
  { "shut/shut/shut": "закривати" },
  { "sing/sang/sung": "співати" },
  { "sink/sank/sunk": "тонути" },
  { "sit/sat/sat": "сидіти" },
  { "sleep/slept/slept": "спати" },
  { "speak/spoke/spoken": "говорити" },
  { "spend/spent/spent": "витрачати" },
  { "stand/stood/stood": "стояти" },
  { "steal/stole/stolen": "красти" },
  { "stick/stuck/stuck": "приклеювати" },
  { "swim/swam/swum": "плавати" },
  { "take/took/taken": "брати" },
  { "teach/taught/taught": "вчити" },
  { "tear/tore/torn": "рвати" },
  { "tell/told/told": "казати" },
  { "think/thought/thought": "думати" },
  { "throw/threw/thrown": "кидати" },
  { "understand/understood/": "розуміти" },
  { "wake/woke/woken": "прокидатися" },
  { "wear/wore/worn": "носити" },
  { "win/won/won": "вигравати" },
  { "write/wrote/written": "писати" },
];
const fastWord = [
  { come: "приходити" },
  { leave: "піти" },
  { mean: "значення" },
  { believe: "вірити" },
  { carry: "нести" },
  { wear: "носити" },
  { turn: "обертатися" },
  { begin: "починати" },
  { seem: "здаєця" },
  { hear: "чути" },
  { study: "вчитись" },
  { lose: "втрачати" },
  { pass: "пройти" },
  { stay: "залишатися" },
  { agree: "погоджуватись" },
  { allow: "дозволяє" },
  { follow: "слідкувати" },

  { warm: "тепло" },
  { fold: "зкладка" },
  { supply: "постачати" },
  { upset: "засмучений" },
  { expand: "розширювати" },
  { spread: "поширення" },
  { hire: "наймати" },
  { afford: "дозволяти собі" },
  { attract: "залучати" },
  { attach: "прикріпляти" },
  { treat: "лікувати" },
  { wave: "махати" },
  { annoy: "дратувати" },
  { consume: "споживати" },
  { pour: "наливати" },
  { flow: "текти" },
  { damage: "пошкодження" },
  { respect: "поважати" },
  { breathe: "дихати" },
  { pray: "молитись" },
  { vote: "голосувати" },
  { cheat: "обманювати" },
  { waste: "марно витрачено" },
  { guard: "охороняти" },
  { convince: "переконувати" },
  { doubt: "сумніватись" },
  { remind: "нагадувати" },
  { divide: "ділити" },
  { press: "натискати" },
  { store: "запасати" },
  { switch: "перемикач" },
  { weigh: "важити" },
  { separate: "відокремлювати" },
  { gather: "збиратися" },
  { entertain: "розважати" },
  { relate: "стосуватися" },
  { remain: "залишатися" },
  { require: "вимагати" },
  { investigate: "розслідувати" },
  { wonder: "дивуватися" },
  { appreciate: "цінувати" },
  { apologize: "вибачатись" },
  { curiosity: "допитливість" },
];

//
// поки нетреба
//

const allWordPhrases = [
  { "let figure out": "давай вирішимо" },
  { "let me know": "дай мені знати" },
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
  { "I will do": "я буду щось робити" },
  { "Hi there": "привіт" },
  { "no way": "ні в якому разі" },
  { "how come": "як так" },
  { "come again": "повтори ще раз" },
  { "I don't get it": "не розумію" },
  { "don't worry about this": "нічого страшного" },
  { nevermind: "неважливо" },
  { "I'm not really shure": "я не впевнений" },
  { "I am going to swim": "я збираюсь плавати" },
  { "Suit yourself": "як хочеш" },
  { "I'm not following": "я не слідкую" },
  { "I'll give it a shot": "я спробую" },
  { "Take your time": "не спіши" },
  { "I gotta go": "мені треба йти" },
  { "I have no clue": "я поняття не маю" },
  { "It's not a big deal": "нічого страшного" },
  { "Here we go": "ми вже йдемо" },
  { "to spend tіme with": "проводити час з" },
  { "to enjoy yourself": " приємно проводити час" },

  { "Thanks a lot": "дуже дякую" },
  { "to eat healthily": "здорове харчування" },
  { "That's a great point": "Це чудова точка зору" },
  { "supposed to be": "має бути" },
  { "It's a kind of": "це свого роду" },
  { "It's a type of": "це різновид" },
];

const allWordQuestion = [
  { "Is he comming?": "він йде?" },
  { "Are you getting anything?": "ти береш щось?" },
  { "You bring something?": "ти приносиш щось?" },
  { "Is it getting better?": "це стає кращим?" },
  { "What are you wearing?": "у що ти одягнений?" },
  { "Could I have?": "чи можна мені?" },
  { "What do you do for a living?": "Чим ви займаєтесь?" },
  { "Are you sure…?": "Ти впевнений/впевнена…?" },
  { "A lovely day, isn’t it?": "Прекрасний день, чи не так?" },
  { "Are you used to?": "Ти звик(ла)?" },
  { "Is it cold outside?": "На вулиці холодно?" },
  { "Do I have to?": "Чи мені потрібно?" },
  { "Can I help you?": "Я можу вам допомогти?" },
  { "Are you feeling better?": "Ти почуваєшся краще?" },
  { "How are things going?": "Як справи йдуть?" },
  { "Do you carry this in…?": "Ти несеш це в...?" },
  { "Was the film good?": "Фільм був хороший?" },
  { "Anything else?": "Ще щось?" },
  { "Are you kidding?": "Ти жартуєш?" },
  { "Do you agree…?": "Ти згоден/згодна…?" },
  { "Did you like it?": "Тобі сподобалося?" },
  { "Do you understand me?": "Ти розумієш мене?" },
  { "Are you done?": "Ти закінчив/закінчила?" },
  { "Can I ask you something?": "Можна тобі щось запитати?" },
  { "Can you please repeat that?": "Ти можеш, будь ласка, повторити це?" },
  { "Did you get it?": "Ти зрозумів/зрозуміла?" },
  { "Does it taste good?": "Це смачно?" },
  { "Do you mind…?": "Тобі не заважає...?" },
  { "Do you feel like…?": "Ти маєш бажання...?" },
  { "Shouldn’t we…?": "Ми не повинні...?" },
  { "Have you ever…?": "Ти коли-небудь...?" },
  { "Do you need anything?": "Тобі щось потрібно?" },
  { "How are you?": "Як ти?" },
  { "How do you feel?": "Як ти себе почуваєш?" },
  { "How long does it take…?": "Скільки це займає часу...?" },
  { "How much is it?": "Скільки це коштує?" },
  { "What’s the time?": "Котра година?" },
  { "How was your weekend?": "Як ти провів/провела вихідні?" },
  { "Is all good?": "Все гаразд?" },
  { "Is everything OK?": "Все в порядку?" },
  { "What are you doing?": "Що ти робиш?" },
  { "What becomes of…?": "Що станеться з...?" },
  { "Where is the toilet please?": "Де тут туалет, будь ласка?" },
  { "What can I do for…?": "Чим я можу вам допомогти...?" },
  { "What do you mean by…?": "Що ви маєте на увазі, коли говорите про...?" },
  { "What are you talking about?": "Про що ви говорите?" },
  { "What are you up to?": "З чим ви зараз зайняті?" },
  { "What did you say?": "Що ви сказали?" },
  { "What do you need?": "Чого вам потрібно?" },
  { "What do you want to do?": "Що ви хочете робити?" },
  { "What’s the weather like?": "Яка зараз погода?" },

  { "How do you open this?": "Як це відкривається?" },
  { "What is going on?": "Що відбувається?" },
  { "When is the train leaving?": "Коли відходить поїзд?" },
  { "Where did you get it?": "Де ви це взяли?" },
  { "Where are you going?": "Куди ви йдете?" },
  { "Are you coming with me?": "Ти йдеш зі мною?" },
  { "How long will you stay?": "Скільки ти залишишся?" },
  { "Who is coming to the play?": "Хто йде на виставу?" },
  { "There are a lot bears": "там багато медведів" },
  { "There's more to food in the village": "У селі більше їжі" },
  { "How much milk?": "незліченний іменник" },
  { "How many pancakes?": "зліченний іменник" },
  { "May I?": "чи можу я?" },
  { "Could you?": "можете ви?" },
  { "Are you taking any medicine?": " ви приймаєте якісь ліки" },
  { "What's going on?": "що відбувається?" },
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

const weather = [
  { rainy: "дощовито" },
  { snowy: "сніжно" },
  { muddy: "багнисто" },
  { foggy: "туманно" },
  { moist: "волого" },
  { cloudy: "хмарно" },
  { slippery: "слизько" },
  { chilly: "прохолодно" },
  { cool: "холодно" },
  { freezing: "морозно" },
  { dry: "сухий" },
  { windy: "вітряний" },
  { thunderstorm: "гроза" },
];

const eating = [
  { lunch: "обід" },
  { dinner: "вечеря" },
  { meal: "прийом їжі" },
  { poridge: "каша" },
  { "scrambled eggs": "яєшня" },
  { "cottage cheese": "сир" },
  { "french fries": "фрі" },
  { yogurt: "йогАрт" },
  { "dairy products": "молочні прод" },
  { cookie: "тортик" },
  { tasty: "смачно" },
  { thirsty: "спраглий" },
  { full: "повний" },
  { shrimps: "креведки" },
  { "soft drinks": "безалк" },
  { mustard: "гірчиця" },
  { sour: "кислий" },
  { sweet: "солодкий" },
  { bitter: "гіркий" },
];

const gettingAround = [
  { past: "повз" },
  { over: "над, понад, через" },
  { along: "вздовж" },
  { towards: "в напрямку до" },
  { straight: "прямо" },
  { "get around": "орієнтуватися" },
  { places: "місце" },
  { "outside the": "зовні" },
  { "inside the": "всередині" },
  { abroad: "закордоном" },
  { that: "той" },
  { sum: "трохи, деякі" },
  { above: "над" },
  { under: "під" },
  { behind: "позаду" },
  { opposite: "навпроти" },
  { "in front": "перед" },
  { before: "до, перед" },
  { after: "після" },
  { between: "між" },
  { "next to": "поруч з" },
  { "in the back of the": "ззаду" },
  { "in the front of the": "спереду" },
  { "in the middle of the": "по середині" },
  { "in the corner of the": "в кутку" },
];

const englishPrime = [
  { your: "твій" },
  { sell: "продавати" },
  { meet: "зустріти" },
  { walk: "ходити" },
  { carry: "тримати" },
  { "put on, in": "поставити" },
  { "pick up": "підняти" },
  { "talk (to)": "говорити" },
  { take: "брати" },
  { tell: "розмова" },
  { fine: "добре" },
  { kind: "доброзичливий" },
  { great: "чудовий прикрасний" },
  { dry: "сухий" },
  { wet: "вологий" },
  { cute: "милий" },
  { boring: "нудний" },
  { messy: "брудний" },
  { neat: "охайний" },
  { difficult: "тяжкий" },
  { simple: "простий" },
  { weak: "слабкий" },
  { strong: "сильний" },
  { poor: "бідний" },
  { mean: "жадібний" },
  { rich: "багатий" },
  { quarterpast: "чверть 15%" },
  { only: "тільки" },
  { together: "разом" },
  { make: "готуватись" },
  { "tidy up": "наводити поряд" },
  { dishes: "посуд" },
  { vacuum: "полососити" },
  { sweep: "підмітати" },
  { "take out the": "виносити" },
  { "make a mess": "смітити" },
  { "cut the grass": "стригти траву" },
  { "listen to": "слухати" },
  { "speak to/with": "говорити" },
  { "look at": "дивитись на" },
  { "look for": "шукати" },
  { "smile at": "між" },
  { "wait for": "чекати на" },
  { "shout at": "кричати на" },
  { stand: "стояти" },
  { "take a bath": "приймати ванну" },
];

const SentencePattern0 = [
  // {"Що ти робив" : "я плив"},
  { "Did you/we/they/swim?": "ти плавав" },
  { "Yes I swam": "так я плив" },
  { "No, I didn't swam": "ні я не плавав" },
  { "Friends were on vacation": "були на канікулах?" },
  { "Friends weren't on vac": "не були?" },
  { "We had a nice time": "ми гарно провели час" },
  { "We didn't have a nice time": "ми  не гарно провели" },
  { "You went to the beach": "ти пішов на пляж" },
  { "Did you go to the beach?": "ти пішов на пляж?" },
  { "The weather was nice": "погода була гарна" },
  { "Was the weather nice?": "погода була гарна?" },
  { "They had fun": "вони розважалися" },
  { "Did they have fun?": "вони розважалися?" },
  { "She did her homework": "вона зробила свою домашню роботу" },
  { "Did she do her homework?": "вона зробила свою домашню роботу?" },
  { "You were tired last night": "вчора ввечері ти втомився" },
  { "Were you tired last night?": "ви втомилися вчора ввечері?" },
];

const SentencePattern1 = [
  // {"Що ти робиш?" : "чи ти його робиш вобще"},
  { "Do you/we/they/your meet?": "ви зустрічаєтеся" },
  { "Yes I meet": "так я зустрічаюсь" },
  { "No I do not meet": "ні я не зустрічаюсь" },
  { "You don't meet": "ви не зустрічаєтесь" },
  { "Does he meetS": "так він зустрічається" },
  { "No, he does not meetS": "ні він не зустрічається" },
  { "She doesn't meet": "вона не зустрічаєця" },
];

const SentencePattern2 = [
  // {"Що ти хочеш?" : "в даний час"},
  { "Do you want/like to talk?": "чи ти хочеш поговорити" },
  { "Yes I want/like to talk": "так я хочу поговорити" },
  { "No, I don't want to talk?": "ні я нехочу поговорити" },
  { "Does, he want to talk": "ні я нехочу поговорити" },
  { "Yes, he wantS to talk": "так він хоче поговорити" },
  { "No,he does't to talk": "ні він не хоче поговорити" },
];
const SentencePattern3 = [
  // {"Чи ти хтось?" : "в даний час"},
  { "Are you a/an doctor": "Чи він лікар?" },
  { "Yes, I am a/an": "так він лікар" },
  { "No, I am not a/an": "ні він не лікар" },
  { "Is she a/an ": "чи вона є?" },
  { "No, she is not": "ні вона не є" },
  { "Are you/we doctorS": "чи вони є" },
  { "Yes you/we are doctorS": "так вони є" },
  { "No you are not doctorS": "ні вони не" },
  { "No we aren't doctorS": "ні вони не" },
];
const SentencePattern4 = [
  { "Чи був ти кимось?": "Were це Я, а Was це she" },
  { "Were you a/an?": "чи був ти кимось?" },
  { "Yes, I was a/an pretty man": "так я був чотким чуваком" },
  { "No, I was a/an ": "ні я не був кимось" },
  { "Was she/it a/an?": "чи вона було чимось" },
  { "Yes, it was a/an ": "так це було чимось" },
  { "No, he was not a/an ": "ні це не було чимось" },
  { "Were you we/they?": "були ми/ви комось" },
  { "Yes, we were doctorS": "так ми були лікарями" },
  { "No, you/they was not ": "ні ви/вони не були комось" },
];
const SentencePattern5 = [
  // {"When did you/I swim?" : "коли ти плавав"},
  { "When did she/they walked?": "коли вони гуляли" },
  { "I swam last month": "я плавав минулого місяця" },
  { "They waled in the spring ": "они гуляли весною" },
];
const SentencePattern6 = [
  { "Will you be a doctor?": "ви будете лікарем?" },
  { "Yes, I will be a doctor": "так, я буду лікарем" },
  { "No, I will not be a doc": "ні, я не буду лік" },
  { "Will He rich?": "чи буде він багатий?" },
  { "He won't rich": "він не розбагатіє" },
];
const SentencePattern7 = [
  { "Where are you?": "де ти?" },
  { "I am in the Canada": "я в Канаді" },
  { "He is at the church": "він в церкві" },
  { "Where are they?": "де вони?" },
  { "There are at mountains": "вони в горах" },
];
const SentencePattern8 = [
  { "Where were you?": "де ви були?" },
  { "I was at the hospital": "я в лікарні" },
  { "Where was he": "де він був" },
  { "He was at school": "він був у школі" },
  { "Where were they": "де вони були" },
  { "They were at the library": "вони були в бібл" },
];
const SentencePattern9 = [
  { "What is in the house?": "що в цьому будинку?" },
  { "The man is in the house": "чоловік в будинку" },
  { "What is behind the garden?": "що позаду саду?" },
  { "The flower is behind the gar": "квітка позаду" },
  { "The flowerS before are the gar": "квіткИ позаду" },
  { "What is under the carpet?": "що під килимом?" },
  { "The panS are under the carpet": "ручки під килимом" },
];
const SentencePattern10 = [
  { "Are you a walking": "ти робиш прямо зараз?" },
  { "Yes, I am walking": "так я гуляю" },
  { "Is she walking": "вона гуляє?" },
  { "No, she is not": "Ні вона не?" },
  { "Are they dancing": "вони танцюють?" },
  { "Yes they are": "так вони" },
  { "No, they are not": "ні вони не" },
];

const SentencePattern11 = [
  { "I, you, he can": "ти можеш!" },
  { "She can bake": "вона може пекти" },
  { "I can flight": "я можу літати" },
  { "Can they flight": "вони можуть літати?" },
  { "Yes they can fl": "можна літати" },
  { "No, I cannot": "ні я не можу" },
  { "Can you a talk?": "можеш говорити?" },
  { "Yes, I can": "я можу" },
  { "No, I cannot": "ні я не можу" },
];

const SentencePattern12 = [
  { "I was swimming at": "Я плавав" },
  { "She was bakeing at": "вона випікала" },
  { "At time a.m, p.m": "коли це було" },
  { "From 9 to 10 o'clock": "з 9 до 10" },
  { "All time": "всі вихідні чи канікули" },
  { "You were bakeing at": "ти випікав?" },
  { "They were bakeing at": "вони випікали?" },
];

const SentencePattern13 = [
  { "What do you": "що ти робиш" },
  { "Where do you": "де ти робиш" },
  { "When do you": "коли ти робиш" },
  { "Why do you": "чому ти робиш" },
  { "I fish in the lake": "лов рибу в озері" },
];

const SentencePattern14 = [
  { "Who do you jump with?": "з ким ти щось робиш" },
  { "I jump whis my friend": "стрибати з моїм другом" },
  { "Who do you see": "кого ви бачите" },
  { "Who does she drink with?": "зким вона пє" },
  { "She skis with her son": "катаєця з сином" },
  { "Who do you climb with?": "з ким ти лізеш?" },
  { "Who does she walk with?": "з ким вона гуляє?" },
];

const SentencePattern15 = [
  { "What did you do?": "що ти зробив?" },
  { "I did something": "я щось зробив" },
  { "What did you think?": "що ви думали" },
  { "I did think of a bicycle": "я думав про" },
  { "Where did you drive?": "куди ви їхали?" },
  { "I drove to the village": "заїхав до села" },
  { "When did she drink?": "коли вона пила?" },
  { "She did drink last week": "вона пила минулого" },
  { "Who did she know?": "кого вона знала?" },
  { "She did know all the people": "Вона знала всіх" },
];

const SentencePattern16 = [
  { "Is there a bathroom?": "чи там є ванн" },
  { "Yes, there is a bathroom": "так, є ванна" },
  { "No, there is no bathroom": "ні, немає ванної" },
  { "Are there a dogs?": "чи там є сабокени?" },
  { "Yes, there are dogs": "так, є сабокени" },
];

export {
  allWord50,
  allWord,
  allWordPhrases,
  allWordQuestion,
  reWord,
  eating,
  fastWord,
  months,
  weather,
  gettingAround,
  englishPrime,
  irregularVerbs,
  SentencePattern0,
  SentencePattern1,
  SentencePattern2,
  SentencePattern3,
  SentencePattern4,
  SentencePattern5,
  SentencePattern6,
  SentencePattern7,
  SentencePattern8,
  SentencePattern9,
  SentencePattern10,
  SentencePattern11,
  SentencePattern12,
  SentencePattern13,
  SentencePattern14,
  SentencePattern15,
  SentencePattern16,
};

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
