const cards = [
  {
    id: "01",
    title: "Mirage City",
    prompt: "What are you projecting onto the place you want to reach?",
    ru: {
      title: "Мираж",
      prompt: "Что ты уже знаешь о будущем, которое ещё не наступило?",
    },
    deeper: { en: "The card shows a city skyline seen from across a stretch of water or open ground. In the foreground, a small flower or spindly figure grows alone. At the bottom right, something round and mossy is half-buried, almost swallowed by the earth. The city is real and unreachable at the same time. You are looking at it from outside, from the low ground, from the side where things are still small and uncertain. The skyline does not move toward you.", ru: "На карте — силуэт города, видный издали, через полосу воды или открытого пространства. На переднем плане — тонкий цветок или хрупкая фигурка, одна. В правом нижнем углу что-то круглое и мшистое наполовину ушло в землю. Город одновременно настоящий и недосягаемый. Ты смотришь на него снаружи, с низкого места, оттуда, где вещи ещё маленькие и неопределённые. Силуэт не движется тебе навстречу." },
    image: "assets/images/mirage-city.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 50%, transparent 0 26%, currentColor 26.2% 26.7%, transparent 27% 100%), linear-gradient(90deg, transparent 0 33%, currentColor 33.2% 33.5%, transparent 33.8% 66%, currentColor 66.2% 66.5%, transparent 66.8% 100%)",
      secondary:
        "linear-gradient(180deg, transparent 0 22%, currentColor 22.2% 22.5%, transparent 22.8% 77%, currentColor 77.2% 77.5%, transparent 77.8% 100%)",
    },
  },
  {
    id: "02",
    title: "Tender Orbit",
    prompt: "What inside you is still alive and worth protecting?",
    ru: {
      title: "Орбита",
      prompt: "Что в тебе ещё живо и просит о бережности?",
    },
    deeper: { en: "A massive creature fills the frame — dense with fur or spines, curled tightly into itself like a sleeping planet. Its texture is layered and alive, covered in marks that could be wounds or stars. Around it: the emptiness of space, a full moon, another distant sphere. Whatever is inside that curl is protected by the sheer weight of its own being.", ru: "Огромное существо заполняет весь кадр — плотное, меховое или колючее, туго свернувшееся в себя, как спящая планета. Его фактура живая, в отметинах, которые могут быть ранами или звёздами. Вокруг — космическая пустота, полная луна, ещё один далёкий шар. Всё, что свернулось внутри этого кольца, защищено самой тяжестью собственного бытия." },
    image: "assets/images/tender-orbit.jpg",
    art: {
      primary:
        "linear-gradient(135deg, transparent 0 49%, currentColor 49.2% 49.6%, transparent 49.8% 100%), linear-gradient(45deg, transparent 0 64%, currentColor 64.2% 64.6%, transparent 64.8% 100%)",
      secondary:
        "radial-gradient(circle at 36% 36%, currentColor 0 1.4%, transparent 1.7%), radial-gradient(circle at 63% 61%, currentColor 0 1.2%, transparent 1.5%), linear-gradient(180deg, transparent 0 14%, currentColor 14.2% 14.5%, transparent 14.8% 86%, currentColor 86.2% 86.5%, transparent 86.8% 100%)",
    },
  },
  {
    id: "03",
    title: "Distant Castle",
    prompt: "What are you waiting for before you allow yourself to want this?",
    ru: {
      title: "Дальний план",
      prompt: "Чего ты ждёшь, чтобы разрешить себе это хотеть?",
    },
    deeper: { en: "A strange building stands at night under a scattered, dotted sky. Its roof is a great rounded dome — heavy and mushroom-like — pressing down on a squat body with three circular windows and a single arched door. Mountains rise sharply in the distance. The place is sealed, self-contained, improbable. It is not waiting to be entered. It is simply there — further away than it looks.", ru: "Странное здание стоит ночью под усыпанным точками небом. Его кровля — огромный округлый купол, тяжёлый, давящий на приземистый корпус с тремя круглыми окнами и одной арочной дверью. Вдали резко поднимаются горы. Место закрытое, самодостаточное, невероятное. Оно не ждёт, чтобы в него вошли. Оно просто есть — дальше, чем кажется." },
    image: "assets/images/distant-castle.jpg",
    art: {
      primary:
        "radial-gradient(ellipse at 50% 36%, currentColor 0 0.8%, transparent 1.2%), radial-gradient(ellipse at 42% 51%, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8%), radial-gradient(ellipse at 58% 67%, transparent 0 24%, currentColor 24.2% 24.5%, transparent 24.8%)",
      secondary:
        "linear-gradient(180deg, transparent 0 29%, currentColor 29.2% 29.5%, transparent 29.8% 58%, currentColor 58.2% 58.5%, transparent 58.8% 100%)",
    },
  },
  {
    id: "04",
    title: "The In-Between",
    prompt: "What holds you when there is nothing to hold onto?",
    ru: {
      title: "Между",
      prompt: "Что держит тебя, когда не за что держаться?",
    },
    deeper: { en: "A checkerboard plane stretches into the distance, the black and white squares pulling the eye toward a horizon that never arrives. In the middle of it, a large slab or monolith hangs suspended — attached to nothing, going nowhere. A moon with a closed human face floats to the right, calm and unreachable. This is a place between places, where the usual rules about before and after don\'t quite apply.", ru: "Шахматная плоскость уходит вдаль, чёрно-белые клетки тянут взгляд к горизонту, который так и не наступает. Посередине висит большая плита или монолит — ни к чему не прикреплённый, никуда не движущийся. Луна с закрытым человеческим лицом плывёт справа — спокойная и недостижимая. Это место между местами, где привычные правила о до и после не совсем работают." },
    image: "assets/images/the-in-between.jpg",
    art: {
      primary:
        "linear-gradient(135deg, transparent 0 34%, currentColor 34.2% 34.5%, transparent 34.8% 66%, currentColor 66.2% 66.5%, transparent 66.8% 100%)",
      secondary:
        "radial-gradient(circle at 50% 50%, transparent 0 30%, currentColor 30.2% 30.5%, transparent 30.8% 100%)",
    },
  },
  {
    id: "05",
    title: "The Familiar",
    prompt: "What part of you sees clearly, even in the dark?",
    ru: {
      title: "То, что видит",
      prompt: "Что в тебе видит ясно, даже когда темно?",
    },
    deeper: { en: "A dark figure stands in a night landscape — ears pointed like a cat or a fox, body dense with texture. The sky above is wild, full of turbulent marks that spiral and press down. The figure is not running, not hiding. It faces outward, into the dark. Whatever made this night so turbulent is not visible — but the figure knows it is there. It has always known. This is someone who does not need the lights on to see.", ru: "Тёмная фигура стоит в ночном пейзаже — уши заострены, как у кошки или лисы, тело плотное, фактурное. Небо над ней бурное, полное вихревых штрихов, которые спирально давят вниз. Фигура не бежит, не прячется. Она смотрит вперёд, в темноту. То, что сделало эту ночь такой бурной, не видно — но фигура знает, что оно там. Это кто-то, кому не нужен свет, чтобы видеть." },
    image: "assets/images/the-familiar.jpg",
    art: {
      primary:
        "radial-gradient(circle at 41% 44%, currentColor 0 1.1%, transparent 1.5%), radial-gradient(circle at 59% 44%, currentColor 0 1.1%, transparent 1.5%), linear-gradient(180deg, transparent 0 54%, currentColor 54.2% 54.5%, transparent 54.8% 100%)",
      secondary:
        "linear-gradient(90deg, transparent 0 25%, currentColor 25.2% 25.5%, transparent 25.8% 74%, currentColor 74.2% 74.5%, transparent 74.8% 100%)",
    },
  },
  {
    id: "06",
    title: "Her Planet",
    prompt: "What would it mean to stop being a guest in your own life?",
    ru: {
      title: "Её планета",
      prompt: "Что значит чувствовать себя дома в собственной жизни?",
    },
    deeper: { en: "A vast creature sits on an open shore — its body enormous, textured like bark or earth, its head a dense spiral with no center. One arm is raised slightly, as if caught mid-gesture. Small palm-like plants grow below, delicate and unafraid. The creature does not seem lost. It seems to be somewhere that belongs to it — or to be something the landscape belongs to. The scale is off. And yet it fits.", ru: "Огромное существо сидит на открытом берегу — тело исполинское, фактурное, как кора или земля, голова — плотная спираль без центра. Одна рука слегка поднята, словно застыла в жесте. Внизу растут маленькие пальмообразные растения — хрупкие и бесстрашные. Существо не кажется потерявшимся. Масштаб нарушен. И всё же — всё на месте." },
    image: "assets/images/her-planet.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 52%, transparent 0 22%, currentColor 22.2% 22.5%, transparent 22.8% 100%), radial-gradient(circle at 50% 52%, currentColor 0 1%, transparent 1.4%)",
      secondary:
        "linear-gradient(180deg, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8% 82%, currentColor 82.2% 82.5%, transparent 82.8% 100%)",
    },
  },
  {
    id: "07",
    title: "Signal Garden",
    prompt: "What keeps returning to you until you finally pay attention?",
    ru: {
      title: "Сад сигналов",
      prompt: "Что возвращается снова и снова, пока ты это не замечаешь?",
    },
    deeper: { en: "An outdoor space at night, alive with signals. A large mirror ball blazes on the left, its light spilling outward. Trees are strung with bulbs that hang like punctuation marks. A crowd presses forward on the right. The energy is electric and not entirely comfortable — too much input, too many things calling for attention at once. Something in this picture has been sending you a signal for a while.", ru: "Открытое пространство ночью, живое от сигналов. Слева пылает большой зеркальный шар, его свет разливается наружу. Деревья увешаны лампочками. Справа толпа давит вперёд. Энергия электрическая и не вполне комфортная — слишком много входящего, слишком много всего, требующего внимания одновременно. Что-то в этой картине посылает тебе сигнал уже какое-то время." },
    image: "assets/images/signal-garden.jpg",
    art: {
      primary:
        "linear-gradient(90deg, transparent 0 17%, currentColor 17.2% 17.5%, transparent 17.8% 50%, currentColor 50.2% 50.5%, transparent 50.8% 83%, currentColor 83.2% 83.5%, transparent 83.8% 100%)",
      secondary:
        "radial-gradient(circle at 31% 64%, currentColor 0 1.2%, transparent 1.6%), radial-gradient(circle at 69% 36%, currentColor 0 1.2%, transparent 1.6%)",
    },
  },
  {
    id: "08",
    title: "Private Gallery",
    prompt: "What would you make if even you weren't watching?",
    ru: {
      title: "Личная галерея",
      prompt: "Что рождается в тебе, когда нет ни одного взгляда, даже твоего?",
    },
    deeper: { en: "A solitary figure stands at a tall window, looking out over a dense cityscape from high above. Seen from behind, completely still. The room behind is dark; the world outside is lit. Nothing is performed here. This is a private moment — thought that hasn\'t become words yet, feeling that hasn\'t become action. Whatever this is, it belongs entirely to the one looking.", ru: "Одинокая фигура стоит у высокого окна, глядя на плотный городской пейзаж сверху. Видна со спины, совершенно неподвижная. Комната сзади тёмная; мир снаружи освещён. Здесь ничего не исполняется. Это частный момент — мысль, которая ещё не стала словами. Всё это принадлежит только тому, кто смотрит." },
    image: "assets/images/private-gallery.jpg",
    art: {
      primary:
        "linear-gradient(180deg, transparent 0 15%, currentColor 15.2% 15.5%, transparent 15.8% 50%, currentColor 50.2% 50.5%, transparent 50.8% 85%, currentColor 85.2% 85.5%, transparent 85.8% 100%)",
      secondary:
        "linear-gradient(90deg, transparent 0 20%, currentColor 20.2% 20.5%, transparent 20.8% 80%, currentColor 80.2% 80.5%, transparent 80.8% 100%)",
    },
  },
  {
    id: "09",
    title: "Behind the Glass",
    prompt: "What do you see when you stop trying to fix it?",
    ru: {
      title: "За стеклом",
      prompt: "Что ты видишь, когда перестаёшь пытаться это исправить?",
    },
    deeper: { en: "A figure stands at a large window or behind glass, separated from what is outside. The glass is not a barrier — it is a frame. It allows seeing without being pulled in, witnessing without intervening. Whatever is on the other side has been there the whole time. The question is not what you see. It is what you have been willing to look at.", ru: "Фигура стоит у большого окна или за стеклом, отделённая от того, что снаружи. Стекло — не барьер, а рама. Оно позволяет видеть, не будучи втянутым, наблюдать, не вмешиваясь. То, что по ту сторону, было там всё это время. Вопрос не в том, что ты видишь. А в том, на что ты был готов смотреть." },
    image: "assets/images/behind-the-glass.jpg",
    art: {
      primary:
        "linear-gradient(90deg, transparent 0 9%, currentColor 9.2% 9.5%, transparent 9.8% 91%, currentColor 91.2% 91.5%, transparent 91.8% 100%), linear-gradient(180deg, transparent 0 9%, currentColor 9.2% 9.5%, transparent 9.8% 91%, currentColor 91.2% 91.5%, transparent 91.8% 100%)",
      secondary:
        "radial-gradient(circle at 50% 50%, transparent 0 34%, currentColor 34.2% 34.5%, transparent 34.8% 100%)",
    },
  },
  {
    id: "10",
    title: "Sky Instruments",
    prompt: "What helps you navigate when there are no maps?",
    ru: {
      title: "Небесный атлас",
      prompt: "На что ты опираешься, когда нет ориентиров?",
    },
    deeper: { en: "A complex of domes, towers, and rooftop structures rises against an open sky. On the lower left, a glass greenhouse dome sits apart — contained and transparent. The foreground is a rolling organic terrain: spiraling forms, mushrooms, paths that curve without destination. There are no instruments visible in the conventional sense — and yet the whole image is a structure for reading something that cannot be read by looking straight at it. You navigate by the shape of things, not their labels.", ru: "Комплекс куполов, башен и надкровельных конструкций поднимается на фоне открытого неба. В нижнем левом углу стоит отдельно стеклянный купол-теплица — замкнутый и прозрачный. Передний план — живой органический рельеф: спиральные формы, грибы, тропы без пункта назначения. Никаких инструментов в обычном смысле не видно — и всё же весь образ является конструкцией для считывания того, что нельзя считать, глядя прямо. Ты ориентируешься по форме вещей, а не по их названиям." },
    image: "assets/images/sky-instruments.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 28%, currentColor 0 1.1%, transparent 1.5%), linear-gradient(180deg, transparent 0 28%, currentColor 28.2% 28.5%, transparent 28.8% 72%, currentColor 72.2% 72.5%, transparent 72.8% 100%)",
      secondary:
        "linear-gradient(45deg, transparent 0 48%, currentColor 48.2% 48.5%, transparent 48.8% 100%), linear-gradient(135deg, transparent 0 52%, currentColor 52.2% 52.5%, transparent 52.8% 100%)",
    },
  },
  {
    id: "11",
    title: "The Current",
    prompt: "What is moving through you before you understand it?",
    ru: {
      title: "Течение",
      prompt: "Что движется через тебя до того, как ты это понимаешь?",
    },
    deeper: { en: "A single tree stands at the edge of moving water — its roots in the bank, its branches reaching back over the stream. The water around it is alive with marks, current visible in the texture. The tree does not resist the current. It is rooted here, in this particular bend of this particular river, where the water has been moving through for longer than memory. Something is passing. The tree knows it before you do.", ru: "Одинокое дерево стоит у края движущейся воды — корни в берегу, ветви тянутся обратно над ручьём. Вода вокруг него живая, течение видно в фактуре. Дерево не сопротивляется течению. Оно укоренено здесь, в этом конкретном изгибе этой конкретной реки, где вода движется дольше, чем хватает памяти. Что-то проходит. Дерево знает это раньше тебя." },
    image: "assets/images/the-current.jpg",
    art: {
      primary:
        "linear-gradient(180deg, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8% 47%, currentColor 47.2% 47.5%, transparent 47.8% 76%, currentColor 76.2% 76.5%, transparent 76.8% 100%)",
      secondary:
        "radial-gradient(circle at 28% 40%, currentColor 0 1.2%, transparent 1.6%), radial-gradient(circle at 71% 63%, currentColor 0 1.2%, transparent 1.6%)",
    },
  },
  {
    id: "12",
    title: "The Game World",
    prompt: "What would the rules be, if you were the one writing them?",
    ru: {
      title: "Мир игры",
      prompt: "Что стало бы правилом, если бы мир создавался под тебя?",
    },
    deeper: { en: "A surreal urban-natural space, layered and unstable. At the back, great arched gates loom without walls — doorways to nothing, or to everything. In the upper left, handwritten text: \'don\'t follow it\' and \'it\'s not real.\' In the foreground, tangled roots pressed into the earth. The place runs on its own logic. This is a world with rules — you just don\'t know whose rules they are yet.", ru: "Сюрреалистическое городско-природное пространство, многослойное и нестабильное. Сзади нависают большие арочные ворота без стен — двери в ничто или во всё. В верхнем левом углу рукописный текст: \'don\'t follow it\' и \'it\'s not real.\' На переднем плане — переплетённые корни, вдавленные в землю. Место работает по своей логике. Это мир с правилами — ты просто ещё не знаешь, чьи они." },
    image: "assets/images/the-game-world.jpg",
    art: {
      primary:
        "linear-gradient(90deg, transparent 0 12%, currentColor 12.2% 12.5%, transparent 12.8% 38%, currentColor 38.2% 38.5%, transparent 38.8% 62%, currentColor 62.2% 62.5%, transparent 62.8% 88%, currentColor 88.2% 88.5%, transparent 88.8% 100%)",
      secondary:
        "linear-gradient(180deg, transparent 0 24%, currentColor 24.2% 24.5%, transparent 24.8% 76%, currentColor 76.2% 76.5%, transparent 76.8% 100%)",
    },
  },
  {
    id: "13",
    title: "The Absolute",
    prompt: "What would you do if you stopped asking whether you are ready?",
    ru: {
      title: "Абсолют",
      prompt: "Что становится возможным, когда вопрос о готовности исчезает?",
    },
    deeper: { en: "A vast landscape opens in all directions — mountains, a winding path, rough terrain that seems to breathe. At the center of the sky, a great circular form radiates outward in sweeping marks. At its center: an eye. One eye, fully open, looking down at everything. Not judging. Simply seeing. The forces at work here are older than any decision you have been avoiding. The eye has not been waiting for you to be ready.", ru: "Огромный пейзаж открывается во все стороны — горы, извивающаяся тропа, грубый рельеф, который, кажется, дышит. В центре неба большая круговая форма излучается наружу широкими штрихами. В её центре — глаз. Один глаз, полностью открытый, смотрящий вниз на всё. Не судящий. Просто видящий. Силы, которые действуют здесь, старше любого решения, которого ты избегал." },
    image: "assets/images/the-absolute.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 50%, transparent 0 20%, currentColor 20.2% 20.5%, transparent 20.8% 100%), linear-gradient(180deg, transparent 0 16%, currentColor 16.2% 16.5%, transparent 16.8% 84%, currentColor 84.2% 84.5%, transparent 84.8% 100%)",
      secondary:
        "linear-gradient(45deg, transparent 0 49%, currentColor 49.2% 49.5%, transparent 49.8% 100%), linear-gradient(135deg, transparent 0 51%, currentColor 51.2% 51.5%, transparent 51.8% 100%)",
    },
  },
  {
    id: "14",
    title: "The Long Way",
    prompt: "What kind of companion do you need for this passage?",
    ru: {
      title: "Долгий путь",
      prompt: "Кто нужен рядом, чтобы пройти этот путь?",
    },
    deeper: { en: "The scene is inside a vehicle moving through a landscape — seen from outside, through large windows. The central figure is a woman with long hair and round glasses, facing forward. Another figure beside her, watching a different direction. The landscape outside is moving; the figures inside are still. This is a journey already underway — not a departure, not an arrival. The question is not whether to go, but who is beside you as you do.", ru: "Сцена — внутри движущегося транспортного средства, вид снаружи через большие окна. Центральная фигура — женщина с длинными волосами и круглыми очками, смотрит вперёд. Рядом другая фигура, смотрящая в другую сторону. Пейзаж снаружи движется; фигуры внутри неподвижны. Это путешествие уже в процессе — не отъезд, не прибытие. Вопрос не в том, ехать ли, а в том, кто рядом, пока едешь." },
    image: "assets/images/the-long-way.jpg",
    art: {
      primary:
        "linear-gradient(180deg, transparent 0 14%, currentColor 14.2% 14.5%, transparent 14.8% 41%, currentColor 41.2% 41.5%, transparent 41.8% 68%, currentColor 68.2% 68.5%, transparent 68.8% 100%)",
      secondary:
        "linear-gradient(45deg, transparent 0 32%, currentColor 32.2% 32.5%, transparent 32.8% 100%), radial-gradient(circle at 76% 72%, currentColor 0 1.2%, transparent 1.6%)",
    },
  },
  {
    id: "15",
    title: "The Presence",
    prompt: "What is watching you from the edge of awareness?",
    ru: {
      title: "Присутствие",
      prompt: "Что стоит на краю твоего внимания и ждёт, пока ты обернёшься?",
    },
    deeper: { en: "A city at night — rooftops, buildings, familiar urban geometry in the lower half. Above them, the sky is not sky: it is a mass of dark, swirling forms that seem to have a face — or a body — or both. Something enormous is present just above the roofline. The buildings below go on as if nothing is above them. But something is above them. It is not threatening — it is simply there, at the edge of attention, watching from the place where day hasn\'t quite started and night hasn\'t quite ended.", ru: "Ночной город — крыши, здания, привычная городская геометрия в нижней половине. Над ними небо — не небо: масса тёмных, вихревых форм, у которых, кажется, есть лицо — или тело — или и то, и другое. Что-то огромное присутствует прямо над линией крыш. Здания внизу продолжают стоять, словно ничего нет над ними. Оно не угрожает — оно просто здесь, на краю внимания, наблюдает оттуда, где день ещё не начался и ночь ещё не закончилась." },
    image: "assets/images/the-presence.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 38%, currentColor 0 1.2%, transparent 1.6%), radial-gradient(circle at 50% 58%, transparent 0 24%, currentColor 24.2% 24.5%, transparent 24.8% 100%)",
      secondary:
        "linear-gradient(90deg, transparent 0 22%, currentColor 22.2% 22.5%, transparent 22.8% 78%, currentColor 78.2% 78.5%, transparent 78.8% 100%)",
    },
  },
  {
    id: "16",
    title: "Moon Station",
    prompt: "What small thing connects you to something larger?",
    ru: {
      title: "Лунная станция",
      prompt: "Что маленькое соединяет тебя с чем-то большим?",
    },
    deeper: { en: "A small figure stands alone in an immense open landscape. Its head is a crescent moon — curved, dark, eyes closed. The body is simple, upright, still. The scale is the point. The figure is not lost — it is placed. It stands on the surface of something much larger than itself, and this does not seem to frighten it. Whatever connects this small figure to the enormity around it is invisible, but it is holding.", ru: "Маленькая фигура стоит одна в огромном открытом пейзаже. Её голова — серп луны: изогнутый, тёмный, с закрытыми глазами. Тело простое, прямое, неподвижное. Масштаб — это и есть суть. Фигура не потеряна — она помещена. Она стоит на поверхности чего-то гораздо большего, чем она сама, и это, кажется, её не пугает. То, что соединяет эту фигуру с окружающей огромностью, невидимо — но оно держит." },
    image: "assets/images/moon-station.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 50%, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8% 100%), linear-gradient(180deg, transparent 0 20%, currentColor 20.2% 20.5%, transparent 20.8% 80%, currentColor 80.2% 80.5%, transparent 80.8% 100%)",
      secondary:
        "linear-gradient(45deg, transparent 0 47%, currentColor 47.2% 47.5%, transparent 47.8% 100%), linear-gradient(135deg, transparent 0 53%, currentColor 53.2% 53.5%, transparent 53.8% 100%)",
    },
  },
];

// ─── DOM refs ──────────────────────────────────────────────────────────────────
const themeKey = "quiet-deck-theme";
const root = document.documentElement;
const cardElement = document.querySelector("[data-card]");
const deckStack = document.querySelector("[data-deck-stack]");
const idElement = document.querySelector("[data-card-id]");
const titleElement = document.querySelector("[data-card-title]");
const promptElement = document.querySelector("[data-card-prompt]");
const visualElement = document.querySelector("[data-card-visual]");
const cardImageElement = document.querySelector("[data-card-image]");
const prevVisualElement = document.querySelector("[data-prev-visual]");
const nextVisualElement = document.querySelector("[data-next-visual]");
const drawButton = document.querySelector("[data-draw-card]");
const languageButton = document.querySelector("[data-lang-toggle]");
const themeButton = document.querySelector("[data-theme-toggle]");
const diveButton = document.querySelector("[data-dive]");
const diveOverlay = document.querySelector("[data-dive-overlay]");
const diveModal = document.querySelector("[data-dive-modal]");
const diveClose = document.querySelector("[data-dive-close]");
const diveText = document.querySelector("[data-dive-text]");
const diveQuestion = document.querySelector("[data-dive-question]");
const diveInteract = document.querySelector("[data-dive-interact]");
const diveInput = document.querySelector("[data-dive-input]");
const diveSend = document.querySelector("[data-dive-send]");
const diveResponse = document.querySelector("[data-dive-response]");

// ─── State ─────────────────────────────────────────────────────────────────────
let currentCardIndex = 0;
let hasPickedOnce = false;
let currentLang = "en";

// Shuffled deck: array of card indices dealt in order, refilled when empty.
// This guarantees all cards are seen before any repeats.
let shuffledDeck = [];

function buildShuffledDeck() {
  // Fisher-Yates shuffle of all indices
  const indices = cards.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // If the first card of the new deck is the same as the current card,
  // move it to the end so there's no repeat at the seam between two decks.
  if (indices[0] === currentCardIndex && indices.length > 1) {
    indices.push(indices.shift());
  }

  shuffledDeck = indices;
}

function drawFromDeck() {
  if (shuffledDeck.length === 0) {
    buildShuffledDeck();
  }
  return shuffledDeck.shift();
}

// ─── Helpers ───────────────────────────────────────────────────────────────────
function resolveImagePath(imagePath) {
  if (!imagePath) return "";
  if (window.location.protocol === "file:" && imagePath.startsWith("/")) {
    return `.${imagePath}`;
  }
  return imagePath;
}

function getAdjacentIndex(direction) {
  const total = cards.length;
  return (currentCardIndex + direction + total) % total;
}

function setPreviewArt(element, card) {
  if (!element) return;
  element.style.setProperty("--art-primary", card.art.primary);
  element.style.setProperty("--art-secondary", card.art.secondary);
}

function updateButtonCopy() {
  const buttonCopy = {
    en: {
      initial: "Pick a Card",
      next: "Pick Another",
    },
    ru: {
      initial: "Выбрать карту",
      next: "Следующая карта",
    },
  };

  drawButton.textContent = hasPickedOnce
    ? buttonCopy[currentLang].next
    : buttonCopy[currentLang].initial;
}

// ─── Language ──────────────────────────────────────────────────────────────────
function getCardCopy(card) {
  if (currentLang === "ru") return card.ru;
  return card;
}

function updateLanguageButton() {
  languageButton.textContent = currentLang.toUpperCase();
  languageButton.setAttribute(
    "aria-label",
    currentLang === "ru" ? "Switch language to English" : "Switch language to Russian",
  );
  root.classList.toggle("lang-ru", currentLang === "ru");
}

function setLanguage(lang) {
  currentLang = lang;
  updateLanguageButton();
  applyCard(cards[currentCardIndex]);
  if (diveButton) diveButton.textContent = lang === "ru" ? "Погрузиться" : "Go Deeper";
  if (diveQuestion) {
    diveQuestion.textContent =
      lang === "ru" ? "С чем это резонирует?" : "What does this bring up for you?";
  }
  if (diveInput) {
    diveInput.placeholder =
      lang === "ru" ? "расскажи в паре слов" : "tell me in a few words";
  }
}

// ─── Go deeper ────────────────────────────────────────────────────────────────
function openDive() {
  const card = cards[currentCardIndex];
  const lang = currentLang;

  diveQuestion.textContent = lang === "ru" ? "С чем это резонирует?" : "What does this bring up for you?";
  diveText.textContent = lang === "ru" ? card.deeper.ru : card.deeper.en;
  diveResponse.textContent = "";
  diveInput.value = "";
  diveInput.placeholder = lang === "ru" ? "расскажи в паре слов" : "tell me in a few words";
  diveInput.style.height = "auto";
  diveInteract.style.display = "";

  diveModal.removeAttribute("hidden");
  diveOverlay.removeAttribute("hidden");
}

async function sendDive() {
  const text = diveInput.value.trim();
  const lang = currentLang;

  if (!text) return;

  const card = cards[currentCardIndex];
  diveSend.disabled = true;

  diveInteract.style.display = "none";
  diveQuestion.textContent = lang === "ru" ? "Рефлексия" : "Reflection";
  diveText.textContent = lang === "ru" ? "Думаю..." : "Thinking...";
  diveResponse.textContent = "";

  const systemPrompt =
    lang === "ru"
      ? `Ты — коучинговое присутствие для колоды метафорических карт 'Victoria's Quiet Deck'. 
Если ввод пользователя выглядит как случайный набор букв или бессмысленный текст — 
ответь только этим: 'Похоже, это случайный ввод. Закрой окно и попробуй ещё раз — 
напиши пару слов о том, что карта вызывает у тебя.' Не добавляй ничего от себя.
Если ввод осмысленный — отвечай кратко, 2-3 предложения, только отражение и один вопрос в конце. Без советов.`
      : `You are a coaching presence for 'Victoria's Quiet Deck' card deck.
If the user input looks like random characters or gibberish —
respond only with: 'That looks like random input. Close this and try again — 
write a few words about what the card brings up for you.' Add nothing else.
If the input is meaningful — reply briefly, 2-3 sentences, only reflection and one question at the end. No advice.`;

  const cardContext =
    lang === "ru"
      ? `Карта: ${card.ru.title}. Вопрос карты: ${card.ru.prompt}. Описание: ${card.deeper.ru}`
      : `Card: ${card.title}. Card question: ${card.prompt}. Description: ${card.deeper.en}`;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `${cardContext}\n\nUser writes: ${text}` },
        ],
      }),
    });
    const data = await res.json();
    diveText.textContent = data.choices[0].message.content;
  } catch {
    diveText.textContent = lang === "ru" ? "Что-то пошло не так." : "Something went wrong.";
  }
  diveSend.disabled = false;
}

// ─── Theme ─────────────────────────────────────────────────────────────────────
function setTheme(theme) {
  const themeText =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  root.setAttribute("data-theme", theme);
  themeButton.setAttribute("aria-label", themeText);
  themeButton.innerHTML = `
    <svg class="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      ${
        theme === "dark"
          ? '<path d="M21 12.8A8.9 8.9 0 1 1 11.2 3a7.2 7.2 0 0 0 9.8 9.8Z"></path>'
          : '<circle cx="12" cy="12" r="4.1"></circle><path d="M12 1.9v2.2M12 19.9v2.2M4.22 4.22l1.56 1.56M18.22 18.22l1.56 1.56M1.9 12h2.2M19.9 12h2.2M4.22 19.78l1.56-1.56M18.22 5.78l1.56-1.56"></path>'
      }
    </svg>
    <span class="theme-toggle__label">${themeText}</span>
  `;
  localStorage.setItem(themeKey, theme);
}

function getPreferredTheme() {
  const storedTheme = localStorage.getItem(themeKey);
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// ─── Card rendering ────────────────────────────────────────────────────────────
function applyCard(card) {
  const cardCopy = getCardCopy(card);
  idElement.textContent = card.id;
  titleElement.textContent = cardCopy.title;
  promptElement.textContent = cardCopy.prompt;
  visualElement.style.setProperty("--art-primary", card.art.primary);
  visualElement.style.setProperty("--art-secondary", card.art.secondary);

  const imagePath = resolveImagePath(card.image);
  cardImageElement.src = imagePath;
  cardImageElement.alt = "";
  visualElement.classList.remove("has-image");

  setPreviewArt(prevVisualElement, cards[getAdjacentIndex(-1)]);
  setPreviewArt(nextVisualElement, cards[getAdjacentIndex(1)]);
  updateButtonCopy();
}

// ─── Draw ──────────────────────────────────────────────────────────────────────
function drawNextCard() {
  if (cards.length < 2) return;

  const nextIndex = drawFromDeck();

  // FIX: preload the image NOW, before the animation starts.
  // The browser gets 170ms head-start to fetch the file,
  // so it's likely ready by the time the card flips in.
  const preloadImg = new Image();
  preloadImg.src = resolveImagePath(cards[nextIndex].image);

  hasPickedOnce = true;
  diveModal.setAttribute("hidden", "");
  diveOverlay.setAttribute("hidden", "");
  deckStack.classList.add("is-animating");
  cardElement.classList.add("is-changing");

  window.setTimeout(() => {
    currentCardIndex = nextIndex;
    applyCard(cards[currentCardIndex]);
    cardElement.classList.remove("is-changing");
  }, 170);

  window.setTimeout(() => {
    deckStack.classList.remove("is-animating");
  }, 420);
}

// ─── Events ────────────────────────────────────────────────────────────────────
themeButton.addEventListener("click", () => {
  const nextTheme =
    root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

languageButton.addEventListener("click", () => {
  setLanguage(currentLang === "ru" ? "en" : "ru");
});

drawButton.addEventListener("click", drawNextCard);

diveButton.addEventListener("click", openDive);
diveClose.addEventListener("click", () => {
  diveModal.setAttribute("hidden", "");
  diveOverlay.setAttribute("hidden", "");
});

diveOverlay.addEventListener("click", () => {
  diveModal.setAttribute("hidden", "");
  diveOverlay.setAttribute("hidden", "");
});

diveSend.addEventListener("click", sendDive);
diveInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") sendDive();
});
const diveInputEl = document.querySelector("[data-dive-input]");
diveInputEl.addEventListener("input", () => {
  diveInputEl.style.height = "auto";
  diveInputEl.style.height = `${Math.min(diveInputEl.scrollHeight, 128)}px`;
});

cardImageElement.addEventListener("load", () => {
  visualElement.classList.add("has-image");
});

cardImageElement.addEventListener("error", () => {
  visualElement.classList.remove("has-image");
});

// ─── Init ──────────────────────────────────────────────────────────────────────
setTheme(getPreferredTheme());
updateLanguageButton();
applyCard(cards[currentCardIndex]);

// Preload all card images on init so switching is instant
function preloadAllImages() {
  cards.forEach((card) => {
    const img = new Image();
    img.src = resolveImagePath(card.image);
  });
}

preloadAllImages();
